import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import '../App.css';
class home extends Component {
  render() {

    return (
      <div>
        <article>
          <header>
            <h1 className="entry-title">TSD Rally</h1>
          </header>
          <div className="entry-content">
            <p>
              UBCSCC occasionally holds TSD Rallies from time to time, a tradition stemming back to the 1950’s. Our members often represent UBCSCC when they participate in TSD Rallies held by local clubs, such as <Link to="http://www.rallybc.com/wcra/wcra.html">West Coast Rally Association (WCRA)</Link> (WCRA membership required).
            </p>
            <h2>TSD = Time Speed Distance</h2>
            <p>
              A Time Speed Distance Rally can be summarized by the following:
            </p>
            <p>
              -Competitors consist of teams of two; One driver and one navigator<br/>
              -A routebook is given to each team with a prescribed route at designated speeds to follow<br/>
              -Checkpoints (hidden and unknown to competitors) are placed along the route<br/>
              -Objective is to cross each Checkpoint at exactly the right time by using the designated speeds and distance travelled<br/>
              -Scoring is based on arriving early or late at each Checkpoint (1 point = 1 second). Accumulation of the least points wins<br/>
              -Stages are held on public roads as well as private roads. Designated speeds do not exceed local speed limits
            </p>
          </div>
        </article>
      </div>
    );
  }
}
export default home;