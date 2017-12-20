import React, {Component} from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import './App.css';
class sponsors extends Component {
  render() {
    const listSponsors = (
      <ListGroup >
        <ListGroupItem href="https://www.facebook.com/" active>
          Facebook
        </ListGroupItem>
        <ListGroupItem href="http://www.westcoastautogroup.com">
          west coast auto group
        </ListGroupItem>
        <ListGroupItem href="http://www.driversedgeautosport.com">
          drivers edge auto sport
        </ListGroupItem>
        <ListGroupItem href="https://www.facebook.com/pages/HBL-Autosports-Inc/113181875427893">
          HBL Auto sports
        </ListGroupItem>
        <ListGroupItem href="http://www.facebook.com/poweredbyaloe">
          Powered by aloe
        </ListGroupItem>
        <ListGroupItem href="http://www.headshots.club">
          headhots club
        </ListGroupItem>
        <ListGroupItem href="http://www.oddballworkshop.com">
          odd ball workshop
        </ListGroupItem>

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