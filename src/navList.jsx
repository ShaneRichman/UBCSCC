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
        <MenuItem >Auto X</MenuItem>
        <MenuItem >Track Days</MenuItem>
        <MenuItem >TSD Rally</MenuItem>
      </NavDropdown>
    )
    const clubEvents = (
      <LinkContainer to="/clubEvents">
        <NavItem href="/clubEvents">Club Events</NavItem>
      </LinkContainer>
    )
    const pictures = (
      <LinkContainer to="/pictures">
        <NavItem href="/pictures">Pictures and Videos</NavItem>
      </LinkContainer>
    )
    const register = (
      <LinkContainer to="/register">
        <NavItem href="/register">Register</NavItem>
      </LinkContainer>
    )
    const membership = (
       <LinkContainer to="/membership">
        <NavItem href="/membership">Membership</NavItem>
      </LinkContainer>
    )
    const rules = (
      <NavDropdown title="Rules" id="nav-dropdown-rules">
        <MenuItem >UBCSCC Supplemental Regulations</MenuItem>
        <MenuItem >Slush Series</MenuItem>
      </NavDropdown>
    )
    const about = (
      <LinkContainer to="/about">
        <NavItem >About</NavItem>
      </LinkContainer>
    )
    const contactUs = (
      <LinkContainer to="/contactUs">
        <NavItem href="/contactUs">Contact Us</NavItem>
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
      <div>
        {navInstance}
      </div>
    );
  }
}
export default navList;