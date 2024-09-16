import React from 'react';
import { Form, Button, Container, Row, Col, Image } from 'react-bootstrap';
import RichTextEditor from '../Components/MyEditor';
import ReactQuill from 'react-quill';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      validated: false,
      product: {
        partNumber: '',
        name: '',
        title: '',
        category: '',
        sku: '',
        price: '',
        description: ''
      },
      richText:'',
      images: [],
      previews: []
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      product: {
        ...prevState.product,
        [name]: value
      }
    }));
  }

  handleRichTextChange = (e) =>{
    this.setState({richText: e})
  }

  handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    
    // Create preview URLs
    const previews = files.map(file => URL.createObjectURL(file));
    
    this.setState({
      images: files,
      previews: previews
    });
  }

  handleSubmit = (event) => {
    console.log(event)
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      // Here you would typically send the data to your backend
      console.log('Product to add:', this.state.product);
      console.log('Images to upload:', this.state.images);
      
      // Reset form after successful submission
      this.setState({
        product: {
          partNumber: '',
          name: '',
          title: '',
          category: '',
          sku: '',
          price: '',
          description: ''
        },
        richText: '',
        images: [],
        previews: []
      });
    }
    this.setState({ validated: true });
  }

  onChange(){
    console.log('change made')
  }

  render() {
    const { validated, product, previews } = this.state;

    return (
      <Container>
        <h2 className="my-4">List New Product</h2>
        <Form noValidate validated={validated} onSubmit={this.handleSubmit}>
          <Row className="mb-3">
            
          <Form.Group as={Col} md="4" controlId="partNumber">
              <Form.Label>Part Number</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Product Part Number"
                name="partNumber"
                value={product.partNumber}
                onChange={this.handleChange}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a part number.
              </Form.Control.Feedback>
          </Form.Group>

            <Form.Group as={Col} md="4" controlId="nameId">
              <Form.Label>Name ID</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Product Name ID"
                name="name"
                value={product.name}
                onChange={this.handleChange}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a name ID.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="4" controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Product Title"
                name="title"
                value={product.title}
                onChange={this.handleChange}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a title.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="category">
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="text"
                placeholder="Category"
                name="category"
                value={product.category}
                onChange={this.handleChange}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a category.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="sku">
              <Form.Label>SKU</Form.Label>
              <Form.Control
                type="text"
                placeholder="SKU"
                name="sku"
                value={product.sku}
                onChange={this.handleChange}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a SKU.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="4" controlId="price">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Price"
                name="price"
                value={product.price}
                onChange={this.handleChange}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid price.
              </Form.Control.Feedback>
            </Form.Group>

          </Row>
          {/* <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationCustom05">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Price"
                name="price"
                value={product.price}
                onChange={this.handleChange}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid price.
              </Form.Control.Feedback>
            </Form.Group>
          </Row> */}
          {/* <Form.Group className="mb-3" controlId="validationCustom06">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="description"
              value={product.description}
              onChange={this.handleChange}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a description.
            </Form.Control.Feedback>
          </Form.Group> */}
          
          <ReactQuill onChange={this.handleRichTextChange}/>

          <Form.Group className="mb-3">
            <Form.Label>Upload Images</Form.Label>
            <Form.Control
              type="file"
              multiple
              onChange={this.handleImageChange}
              accept="image/*"
            />
          </Form.Group>
          
          {previews.length > 0 && (
            <Row className="mb-3">
              {previews.map((preview, index) => (
                <Col key={index} xs={6} md={4} lg={3} className="mb-3">
                  <Image src={preview} thumbnail />
                </Col>
              ))}
            </Row>
          )}


          <Button type="submit">Add Product</Button>
        </Form>
      </Container>
    );
  }

  componentWillUnmount() {
    // Clean up the preview URLs to avoid memory leaks
    this.state.previews.forEach(URL.revokeObjectURL);
  }

}



export default List;
