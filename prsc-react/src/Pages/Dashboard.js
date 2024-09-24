// Class Component
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Counter from '../Components/Counter';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyEditor from '../Components/MyEditor';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  componentDidMount() {
    console.log('Dashboard mounted');
  }

  render() {
    return (

        <>
          <p>Dashboard</p>
          <Counter ctId = '11' storageId='counter'/>

          <MyEditor/>

        </>
    );
  }
}

export default Dashboard;

