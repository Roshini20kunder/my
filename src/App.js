import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg fixed-top navbarScroll">
        <div class="container">
          <a class="navbar-brand" href="#">Rosh</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#home">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#about">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#services">Resume</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#portfolio">Projects</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#contact">Contact me</a>
              </li>
            </ul>

          </div>
        </div>
      </nav>
      <section class="bgimage" id="home">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 hero-text">
              <h2 class="hero_title">Hi, it's me Roshini</h2>
              <p class="hero_desc">I am 3rd year Student of Artificial intelligence and data Science </p>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}

export default App;
