import profileImage from './portfolioImage.png';
import simLogo from './simcoachlogo.png';
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
      <img src={simLogo}></img>
      <div className="Simcoach-Games-projs">
        <p>
        <span class="SimprojectName">First Stop</span> - Pilot project into educating neurodivergent/ASD individuals in collaboration with Step One for consultation with ASD specialization therapists. Educational game teaching autistic individuals how to utilize public transportation. One of two artists in charge of art for the game, I primarily headed character design, splash art, and UI/UX. Officially released on App Store and Google Play.
        </p>
        <p>
        <span class="SimprojectName">Magician Match</span> - Educational game to teach those with ASD about sequencing through an engaging narrative story about a magician's apprentice. Emphasis of art development on 2D puppetry, end of level in-game cut-scenes, and UI/UX. In charge of all art for this professional project. Release date TBD.
        </p>
        <p>
        <span class="SimprojectName">Money Mitch</span> - Educational game focused on engaging players in developing financial identification fluency. I was in charge of all concept art for this project, and the first iterations of UI. Release date TBD.
        </p>
      </div>
    </div>
  );
}

export default App;
