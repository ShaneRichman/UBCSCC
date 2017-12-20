import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import './App.css';

class topHeader extends Component {

  render() {
    // const search = (
    //   <Navbar.Form pullRight>
    //     <FormGroup>
    //       <FormControl type="text" placeholder="Search" />
    //     </FormGroup>
    //     <Button type="submit">Submit</Button>
    //   </Navbar.Form>
    // )
    const clubName = (
      <div className="logo-bar" >
        <img className="logo" src='http://dl.motorsportreg.com/1b66765b-88dc-4a78-b8a9-ea51ec28d837/-/progressive/yes/-/overlay/02fca2a5-3394-4759-9dc9-53a55a2cc306/20%25x20%25/20,20/-/scale_crop/1200x630/center/-/format/png/msr.png' alt="Logo" />
        <span id="company-name">
          <Link to='/'>
            <h2 >
              UBCSCC
            </h2>
          </Link>
          <h3>
            UBC
          </h3>
        </span>
      </div>
    )
    const jumbotron = (
      <div className="jumbotron" >
        <Link to='/'>
          <img src='http://www.ubcscc.com/wordpress/wp-content/uploads/2014/09/cropped-IMG_2126-22.jpg' alt="Demo" />
        </Link>
      </div>
    )

    return (
      <div className="top-section">
        {clubName}
        {jumbotron}
      </div>
    );
  }
}
export default topHeader;