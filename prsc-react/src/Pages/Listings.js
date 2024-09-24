// Class Component
import React from 'react';
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { getDocs, collection } from "firebase/firestore";
import {db} from '../config.js'

class Listings extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      products: [],
    };
  }

  async componentDidMount() {
    console.log('Listings mounted');

    const productsRef = collection(db, "products");
    const docSnap = await getDocs(productsRef);

    if (!docSnap.empty) {
      // console.log("Document data:", docSnap);
      const products = docSnap.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      this.setState({ products });  
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }

  }

  render() {
    return (
    <>

    <Container>
      <h1 className="my-4">Listings</h1>
      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {this.state.products.map(product => (
          <Col key={product.id}>
            <Card className="h-100 shadow-sm">
              <Card.Img variant="top" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1920bacd3b0%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1920bacd3b0%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22107.1953125%22%20y%3D%2296.3%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" />
              <Card.Body className="d-flex flex-column">
                <Card.Title>{product.title.length < 20 ? product.title : product.title.substring(0, 16) + "...."}</Card.Title>
                <Card.Text>
                  SKU: {product.sku} <br/>
                  Price: ${product.price}
                </Card.Text>
                <div className="mt-auto">
                  <Button variant="primary" className="me-2 mb-2">Edit</Button>
                  <Button variant="danger" className="me-2 mb-2">Delete</Button>
                  <Button variant="dark" className="mb-2">Hide</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>

    
    </>
    );
  }
}

export default Listings;

