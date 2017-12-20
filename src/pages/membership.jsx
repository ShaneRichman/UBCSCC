import React, {Component} from 'react';
import '../App.css';
class membership extends Component {
  render() {

    return (
      <div>
        <article>
          <header>
            <h1 className="entry-title">Membership</h1>
          </header>
          <div className="entry-content">
            <p>
              A common misconception is “you need to be a UBC student to participate in events”. This is 100% untrue, anybody with a valid drivers licence can participate.
            </p>
            <p>
              We have carried this theory onwards to our membership. We love you guys and girls so much, we want to pay for your yearly membership when you sign up for your first event of the year. This means, after your first event, you no longer need to worry about a daily membership fee.
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
export default membership;