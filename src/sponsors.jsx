import React, {Component} from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import './App.css';
class sponsors extends Component {
  render() {
    const listSponsors = (
      <ListGroup >
        <ListGroupItem href="https://www.facebook.com/" active>Facebook</ListGroupItem>
        <ListGroupItem href="#">Link 2</ListGroupItem>
        <ListGroupItem href="#">Link 3</ListGroupItem>
      </ListGroup>
    );
    return (
      <div className="sponsors">
        {listSponsors}
      </div>
    );
  }
}
export default sponsors;