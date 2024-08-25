import profileImage from './portfolioImage.png';
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
    </div>
  );
}

export default App;
