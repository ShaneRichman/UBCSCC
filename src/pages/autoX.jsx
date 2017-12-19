import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import '../App.css';
class autoX extends Component {
  render() {

    return (
      <div>
        <header>
          <h1 className="entry-title">
            AutoX
          </h1>
        </header>
        <div className="entry-content">
          <p>UBCSCC has been holding Autocross (AutoX) events since its inception in the 1950’s. Students and alumnis back then started racing in parking lots on campus, namely The Barn, and other venues in the Lower Mainland. AutoX is the lifeblood of this club, bringing in many racers which forms the majority of our membership base. Every year, we continue to accept racers guys and girls, young and old, UBC students and not.</p>
          <h2>Autoslalom aka Autocross / AutoX</h2>
          <p>From a grassroot level, this is the least expensive organized form of motorsport where most begin when they get into racing. The basic concepts of this sport can be summarized by the following:</p>
          <p>
            -A race against time; One car on course
            <br/>
            -Manueover a road course made up of traffic cones as quickly as you can
            <br/>
            -Cars of different performance potential and modifications are divided into classes
            <br/>
            -Each class has a multiplier for indexing times between classes for equal competition
            <br/>
            -AutoX is a volunteer sport; You race, and then you work. No work, no times
          </p>
          <p>For our current list of AutoX events and other club happenings, please see the right side bar calendar or our <Link to="/clubEvents">Club Events</Link> page.</p>
          <h2>UBCSCC AutoX FAQ</h2>
          <h3>What is AutoX, aka Autoslalom/Autocross?</h3>
          <p>
          Autoslalom, sometimes referred to as Solo II or more commonly Autocross (AutoX), is a time trial event where one car at a time completes a road course, usually set up at an unused airport runway or parking lot. The layout of the course is defined using traffic cones, while the goal is to finish the course quickly without disturbing the cones and assessing penalties.
          <br/>
          <br/>
          The sport is also the safest form of motorsport because competitors are racing against the clock rather than against other cars. These events are also a test of driver skill and handling rather than all out speed (top speed on course is around 100km/h), thus keeping event insurance costs low (where part of your entry fee goes towards).</p>
          <h3>What does a course consist of?</h3>
          <p>An AutoX course is typically made up of (but not limited to) 3 basic elements: Slalom, offset gates, and sweeper, all of which are implemented using traffic cones. Course maps are provided at the beginning of each event for drivers to walk and familiarize themselves with the day’s course.</p>
          <h3>Do I need special training or prior racing experience to join?</h3>
          <p>No, not at all, because AutoX is a form of driver training in itself. You can learn the limits of whatever car you have in a safe and controlled environment. Most important of all is that it is legal to participate in. AutoX is an inexpensive sport to get into, and it is typically the first form of motorsport many people start with when they get into racing. As long as you hold a valid driver’s license and have a car to drive, you are set.</p>
          <h3>How is it scored?</h3>
          <p>The name of the game is to drive as fast as you can through the course. If a car knocks a cone out of its chalk-lined “box” or tips it over as it goes by it, that adds 2 seconds to their total time for that run. If the driver fails to drive the course as instructed by the course map, they automatically receive a DNF (Did Not Finish; no time) for their run.</p>
          <h3>Do I need a fast or a modified car to enter?</h3>
          <p>
          No, you do not. The truth is, you will have fun either way, guaranteed! Imagine how much MORE fun it would be to do an event and set a baseline for your bone stock car first. Then, put on those new goodies an event at a time and actually feel the difference at your car’s new found limit!
          <br/>
          <br/>
          But remember, at the end of the day, it doesn’t matter what car you drive or the modifications you have – It is all on you and your driving skills to pilot your car to the top of the standings!
          </p>
          <h3>What are the rules for AutoX?</h3>
          <p>
          For general competition rules, we use the CACC General Competition Rules. The most current version can be found <Link to="http://www.caccautosport.org/rules/">here.</Link>
          <br/>
          <br/>
          For car classing, please see the next topic.
          </p>
          <h3>Competition, Car Classing</h3>
          <p>Cars are split up into different classes based on performance potential and modifications. The competition is based on the fastest time each competitor runs on course, with the fastest time in each class winning.</p>
          <h3>Example: I drive a completely stock car. How will my time be compared to my friend’s *enter fast car here*?</h3>
          <p>
          Classing: We run a set of car preparation classing adopted from the <Link to="https://www.scca.com/">SCCA</Link> Solo II rulebook, which is updated every year. If you are a beginner, please take a moment and look at our <Link to="http://forum.ubcscc.com/viewforum.php?f=6">Car Classification</Link> forum for more details on how to class your car.
          <br/>
          <br/>
          Indexing: Each class has an Index tied to it. This allows you to compare your stock Honda Civic, for example, to a stock Porsche 911. So depending on the driver, after multiplying your raw time by your class’ index, you may actually come out ahead of the 911. (See <Link to="https://my.xfinity.com/~paxrtp/rtp2015.html">PAX/PTP TAble,</Link> updated annually)
          </p>
          <h3>Your club is called *UBC*SCC. Do I need to have any affiliation with the university to join, such as a student or an alumni?</h3>
          <p>Don’t let them name fool you… anybody from anywhere can join and race with us. Guy or girl, young or old, beginner to expert; As long as you hold a valid driver’s license, access to a car, and an interest in the sport, you have met all the minimum requirements! (A lil’ bit of money to cover the entry fees help too!)</p>
          <h3>OK great! Where do I sign up for a UBCSCC AutoX event?</h3>
          <p>
          There are two things you will need:
          <br/>
          1. Valid UBCSCC Membership, which is now included with the purchase of your first event of the year.
          2. Online-only Event Registration: We open up registration online a week or two before the event on our <Link to="http://forum.ubcscc.com/">Forum.</Link> Typical UBCSCC AutoX entry fees range from $35.00 to $55.00 depending on the size of the lot we are renting. Our events are optimized for maximum seat time and therefore, attendance is capped… so sign up early!
          <br/>
          <br/>
          **As of recent years, UBCSCC DO NOT accept in-person registrations in the morning of the event anymore. Please use our online event registration.
          </p>
          <h3>What should I bring to an AutoX event?</h3>
          <p>
          Most important thing: DRESS FOR THE WEATHER. Remember, not only will you be driving, but you will be working out on course as well. If there is a chance of showers, bring a rain jacket and boots. If it’s supposed to be bitterly cold, bring gloves and headgear. If it’s going to be brutally hot, clothes that wont overheat you are important. It is much better to bring a few extra pieces of clothing and not need them than to either shiver or sweat all day. Besides bringing yourself and your car, there are a few other things you might find convenient to bring with you to an event.
          <br/>
          <br/>
          Some basic items that are nice to have are:
          <br/>
          <br/>
          -Your own helmet (if not, we have loaners available)<br/>
          -Tire pressure gauge<br/>
          -A hat<br/>
          -A pair of gloves<br/>
          -Sunscreen<br/>
          -Workshop towels<br/>
          -Motor oil<br/>
          -Garbage bags or tarp (useful for rainy days)<br/>
          -A box to put everything in
          </p>
          <h3>What to do when I get to the event? **Newbies please read!**</h3>
          <p>
          Usually the venue is open at approximately 7:45am, from then on:
          <br/>
          <br/>
          -Sign the waivers at the gate upon entering and park your car in the pits<br/>
          -Prep it for tech inspection: Empty trunk and remove all loose objects in cabin area, etc.<br/>
          -Check-in at registration and grab a course map<br/>
          -Walk the course (join our Novice Coursewalk)<br/>
          -Attend the mandatory Driver’s Meeting when instructed<br/>
          -For newbies: Novice Driver’s meeting where beginner AutoX Need-To-Know things are covered
          </p>
          <h3>Work Assignments</h3>
          <p>AutoX is a volunteer sport – You race, and then you work. After you come back from your last run, park your car and find the Chief of Workers and check-in. If you do not work an assignment, your times will not be included in the results.</p>
          <h3>What is inspected at the Tech Inspection?</h3>
          <p>
          The Chief of Tech will quickly check a few things, such as:
          <br/>
          <br/>
          -Battery is tied down securely<br/>
          -Cabin and Trunk free of loose objects<br/>
          -Helmet, if you have one (Snell M2005/2010, SA2005/2010)
          <br/>
          <br/>
          Things you should check yourself:
          <br/>
          <br/>
          -Removal of driver’s carpet/mat<br/>
          -All fluids are fresh and topped up, nothing leaking<br/>
          -Good amount of brake pads left<br/>
          -Seat belts in good working order<br/>
          -Cracks in the windshield<br/>
          -Wheels/Tires (grab and shake them, tighten them down with torque wrench)
          <br/>
          <br/>
          If your car is in any way not safe on the street or poorly maintained, you should have it repaired and tuned up before racing it and taking it to its limits. You will not only be jeopardizing the safety of yourself but of those around you as well.
          <br/>
          <br/>
          ** The venue (BC Driving Centre) we have the privilege of renting has a strict sound limit of 92db in which we must abide by. We accomplish that by using a decibel meter to continually measure each car’s sound level on-course. For the living enjoyment of our Pitt Meadows neighbours, any car that comes close to the limit will immediately receive a warning and may even be asked to park their car for the rest of the day.
          </p>
          <h3>What is the UBCSCC Slush Series?</h3>
          <p>For information on our annual Slush Series, check out <Link to="/racing/autox/slush-series">UBCSCC Slush Series Information Page</Link></p>
        </div>
        <footer className="entry-meta">
        </footer>

      </div>
    );
  }
}
export default autoX;