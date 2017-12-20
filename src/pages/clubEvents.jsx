import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import '../App.css';
class clubEvents extends Component {
  render() {

    return (
      <div>
        <article>
          <header>
            <h1 className="entry-title">
              <Link to="/2017">UBC Sports Car Club 2017/2018</Link>
            </h1>
            <div>
              <span>Posted on </span>
              <Link to="#">February 13, 2017</Link>
              <span className="by-author"></span>
            </div>
          </header>

          <div>
            <p>We look forward to hosting the following events</p>
            <p>
              Slush 1 – October 22nd, 2017
              <br/>
              Slush 2 – November 12th, 2017
              <br/>
              Slush 3 – December 3rd, 2017
              <br/>
              Slush 4 – January 14th, 2018
              <br/>
              Slush 5 – February 4th, 2018
              <br/>
              Slush 6 – March 4th, 2018
              <br/>
              Slush 7 – March 25th, 2018
            </p>
          </div>

          <footer>
            <span>
              <span>Posted in </span>
              <Link to="/">Uncategorized</Link>
            </span>
          </footer>
        </article>
      </div>
    );
  }
}
export default clubEvents;