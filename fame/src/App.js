import React from 'react';
import logo from './fame.png';

function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} alt="Logo" />
        <h1>Fame</h1>
      </header>
      <main>
        <div className="description">
          <p>Making the global stage your platform - the next generation of social media.</p>
        </div>
        <div className="mid">
          <h1>Meet Our Co-Founders</h1>
        </div>
        <div className="container">
          <div className="row justify-content-center"> {/* Added justify-content-center class */}
            <div className="col-md-6">
              <div className="image">
                <img src={logo} alt="Image 1" />
                <p>Charles Grill</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="image">
                <img src={logo} alt="Image 2" />
                <p>Rishabh Ganesh</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
