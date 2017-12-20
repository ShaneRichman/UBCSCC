import React, {Component} from 'react';
import '../App.css';
class contactUs extends Component {
  render() {

    return (
      <div>
        <article>
          <header>
            <h1 className="entry-title">Contact Us</h1>
          </header>

          <div className="entry-content">
            <p>
              Our mailing address is:
            </p>
            <p>
              UBC Sports Car Club<br/>
              Box 84 – 6138 SUB Blvd<br/>
              Vancouver, BC<br/>
              V6T 1Z1
            </p>
            <p>
              Our autocross races are helt at
            </p>
            <p>
              YPK Integrated Training Centre (18200 Ford Road, Pitt Meadows, BC)<br/>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2605.848521972465!2d-122.71918014857214!3d49.22239978285925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485d4292a0c4ffd%3A0x88f0a259039bad2c!2s18200+Ford+Rd%2C+Pitt+Meadows%2C+BC+V3Y+2K5!5e0!3m2!1sen!2sca!4v1504906382511">
              </iframe>
            </p>
            <p>
              and our track lapping days are helt at
            </p>
            <p>
              Mission Raceway (32670 Dyke Rd, Mission, BC)<br/>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2610.9527782461632!2d-122.32534324857478!3d49.12553198971172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548436d739fa2f73%3A0x86cf49d4b81f65c5!2sMission+Race+Ways!5e0!3m2!1sen!2sca!4v1504906607927">
              </iframe>
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
export default contactUs;