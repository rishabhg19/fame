import React from 'react';
import famelogo from './famelogo.JPEG';
import ris from './ris.jpg';

function App() {
  return (
    <div className="App">
      <header>
        <img src={famelogo} alt="Logo" style={{ width: '100%', maxWidth: '340px' }}/>
      </header>
      <main>
        <div className="description">
          <h4>Connecting the social media world with the global stage.</h4>
        </div>
        <div className="mid">
          <h3>Fame is the platform set to revolutionize mainstream social media through its <br></br>World Page 🌎 and Profile Video 🎥 features.</h3>
        </div>
        <br></br>
        <p></p>
        <div className="mid">
          <h1>Meet Our Co-Founders</h1>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="image d-flex justify-content-center align-items-center flex-column">
                <img src={famelogo} alt="Image 1" style={{ width: '100%', maxWidth: '340px' }} />
                <h3 className="text-center">Charles Grill</h3>
                <div>
                  <p className="text-left">Charlie is an entrepreneur with a background in applied physics and mathematics who is working on building Fame full-time. He enjoys making music, swimming, and cryptocurrency trading. His passion for idea generation, his expertise in composing music, and his experience developing pet projects laid the foundation for Fame.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="image d-flex justify-content-center align-items-center flex-column">
                <img src={ris} alt="Image 2" style={{ width: '100%', maxWidth: '280px' }} />
                <h3 className="text-center">Rishabh Ganesh</h3> 
                <div>
                  <p className="text-left">Rishabh is an innovator with a background in computer science and applied mathematics dedicated to building the technical side of Fame. In his free time, he can be found shuffling cards, running, and creating content. As one of the pioneers for Fame, he is passionate about making a modern, cutting-edge platform focused on its users.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p></p>
        <div className="mid">
          <h1>Contact Us</h1>
          <p><a href="mailto:rishabh.ganesh@columbia.edu">rishabh.ganesh@columbia.edu</a><br></br><a href="mailto:cwg2120@columbia.edu">cwg2120@columbia.edu</a></p>
          <p></p>
        </div>
      </main>
      <footer className="footer mid">
        <p>Copyright &copy; 2024</p>
      </footer>
    </div>
  );
}

export default App;
