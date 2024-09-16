// Class Component
import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: localStorage.getItem(this.props.storageId)};
  }

  componentDidMount() {
    this.setState({count: Number(localStorage.getItem(this.props.storageId))})
    console.log(`${localStorage.getItem(this.props.storageId)}`)
    console.log('Component mounted');
  }

  incrementCount = () => {
    // this.setState(prevState => ({ count: prevState.count + 1 }));
    let{count}= this.state
    console.log(count)
    this.setState({ count: count + 1 })
    localStorage.setItem(this.props.storageId, count+1)
  }

  render() {
    return (
      <div>
        <p>Counter ({this.props.ctId})</p>
        <p>Count: {this.state.count}</p>
        {/* <Button variant="primary">Primary</Button>{''} */}
        {/* <Button variant="warning" >Warning</Button>{' '} */}

        {/* <Button variant="dark">Dark</Button> */}
        <Button variant='dark' onClick={this.incrementCount}>Increment(+)</Button>
      </div>
    );
  }
}

export default Counter;

