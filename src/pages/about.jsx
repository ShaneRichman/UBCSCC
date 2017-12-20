import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import '../App.css';
class about extends Component {
  render() {

    return (
      <div>
        <article>
          <header>
            <h1 className="entry-title">About Us</h1>
          </header>

          <div className="entry-content">
            <p>
              The University of British Columbia Sports Car Club is a student-executive club based out of the University of British Columbia. We are part of the Alma Mater Society, the Student Society of UBC.
            </p>
            <p>
              Our club was established in 1956. Over the years, our club has hosted and participated in motorsports activities, namely in the areas of
              <Link to="/racing/autoX">AutoX</Link>,<Link to="/racing/TSDRally">TSD Rally</Link>, and <Link to="/racing/trackDays">Track days</Link>.
            </p>
            <p>

            </p>
            <p>

            </p>
            <p>

            </p>
          </div>

          <footer>
            <span>
              <span></span>
              <a href="#"></a>
            </span>
          </footer>
        </article>
      </div>
    );
  }
}
export default about;