import profileImage from './SelfImage-Smaller.png';
import simLogo from './simcoachlogo.png';
import pittLogo from './UPittLogo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div id="profile-picture">
        <img src={profileImage} className="Profile-picture" alt="myProfileImage" />
      </div>
        <p>
          Welcome to Sean Kirby O'Rourke's portfolio!
        </p>
        <a
          className="App-link"
          href="https://seankirbyorourke.itch.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          my itch.io
        </a>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/seán-o-rourke-521290246/"
          target="_blank"
          rel="noopener noreferrer"
        >
          my linkedin
        </a>
        <a
          className="App-link"
          href="https://github.com/Sean-K-ORourke-portfolio"
          target="_blank"
          rel="noopener noreferrer"
        >
          my github
        </a>
      </header>
      
      <div className="Simcoach-Games-projs">
      <img className = "Logo" src={simLogo} alt="Simcoach Games Logo" />
        <p>
        <span class="SimprojName">First Stop</span> - Pilot project into educating neurodivergent/ASD individuals in collaboration with Step One for consultation with ASD specialization therapists. Educational game teaching autistic individuals how to utilize public transportation. One of two artists in charge of art for the game, I primarily headed character design, splash art, and UI/UX. Officially released on App Store and Google Play.
        </p>
        <p>
        <span class="SimprojName">Magician Match</span> - Educational game to teach those with ASD about sequencing through an engaging narrative story about a magician's apprentice. Emphasis of art development on 2D puppetry, end of level in-game cut-scenes, and UI/UX. In charge of all art for this professional project. Release date TBD.
        </p>
        <p>
        <span class="SimprojName">Money Mitch</span> - Educational game focused on engaging players in developing financial identification fluency. I was in charge of all concept art for this project, and the first iterations of UI. Release date TBD.
        </p>
      </div>

      <div className="Academic-projs">
      <img className = "Logo" src={pittLogo} alt="University of Pittsburgh Logo" />
      <p>
      <span class="AcaprojName">Pittscord</span> - Discord bot and website design project in collaboration with Dr. Luis de Oliveira. Canvas integration for a seamless experience. Designed with extensive documenting to be built upon by future programmers. Released to be used by future teachers.
      </p>
      <p>
      <span class="AcaprojName">What do You Do when your History becomes a Point of Argument?</span> - Data story explaining the issues with societal bias based on statistical figures, as it pertains to ASD, from a personal angle. Created scatter-plots, relationship plots, and bar graphs from CDC "Autism Prevalence Studies" dataset.
      </p>
      <p>
      <span class="AcaprojName">Parametric Equation and Bézier Curve Simulator</span> - Educational simulator and sandbox with an emphasis on tutorializing difficult calculus concepts through UI/UX for a beginner to understand. 
      </p>
      <p>
      <span class="AcaprojName">Dragon's Escape</span> - Solo developed game, with a focus on level design, visual narrative, and graphics.
      </p>
      </div>
    </div>
  );
}

export default App;
