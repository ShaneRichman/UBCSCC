import React, {Component} from 'react';
import { NavItem, Nav, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
import './App.css';

class navList extends Component {

  handleSelect(selectedKey) {
    //alert(`selected ${selectedKey}`);
  }

  render() {
    const form = (
      <LinkContainer to="/forum">
        <NavItem activeKey href="/forum">Forum</NavItem>
      </LinkContainer>
    )
    const racing = (
      <NavDropdown title="Racing" id="nav-dropdown-racing">
        <LinkContainer to="/racing/autoX">
          <MenuItem >Auto X</MenuItem>
        </LinkContainer>
        <LinkContainer to="/racing/trackDays">
          <MenuItem >Track Days</MenuItem>
        </LinkContainer>
        <LinkContainer to="/racing/TSDRally">
          <MenuItem >TSD Rally</MenuItem>
        </LinkContainer>

      </NavDropdown>
    )
    const clubEvents = (
      <LinkContainer to="/clubEvents">
        <NavItem>Club Events</NavItem>
      </LinkContainer>
    )
    const pictures = (
      <LinkContainer to="/pictures">
        <NavItem>Pictures and Videos</NavItem>
      </LinkContainer>
    )
    const register = (
      <LinkContainer to="/register">
        <NavItem>Register</NavItem>
      </LinkContainer>
    )
    const membership = (
       <LinkContainer to="/membership">
        <NavItem>Membership</NavItem>
      </LinkContainer>
    )
    const rules = (
      <NavDropdown title="Rules" id="nav-dropdown-rules">
        <LinkContainer to="/rules/SR">
          <MenuItem >UBCSCC Supplemental Regulations</MenuItem>
        </LinkContainer>
        <LinkContainer to="/rules/slushSeries">
          <MenuItem >Slush Series</MenuItem>
        </LinkContainer>
      </NavDropdown>
    )
    const about = (
      <LinkContainer to="/about">
        <NavItem >About</NavItem>
      </LinkContainer>
    )
    const contactUs = (
      <LinkContainer to="/contactUs">
        <NavItem>Contact Us</NavItem>
      </LinkContainer>
    )
    const navInstance = (
      <Nav bsStyle="pills" onSelect={this.handleSelect}>
        {form}
        {racing}
        {clubEvents}
        {pictures}
        {register}
        {membership}
        {rules}
        {about}
        {contactUs}
      </Nav>
    );

    return (
      <div className="navBar">
        {navInstance}
      </div>
    );
  }
}
export default navList;