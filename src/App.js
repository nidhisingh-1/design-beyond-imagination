import React, { useEffect } from 'react';
import './App.css';

const App = () => {
  useEffect(() => {
    // Initialize UnicornStudio script - exact implementation from provided code
    !function(){
      if(!window.UnicornStudio){
        window.UnicornStudio={isInitialized:!1};
        var i=document.createElement("script");
        i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js";
        i.onload=function(){
          window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)
        };
        (document.head || document.body).appendChild(i)
      }
    }();
  }, []);

  return (
    <div className="App">
      {/* First Viewport - UnicornStudio Animation */}
      <section className="hero-section">
        <div className="unicorn-container">
          <div 
            data-us-project="sOqc59bcWr9Pb7jcrFZ2" 
            style={{ width: '1440px', height: '100%' }}
          />
        </div>
      </section>

      {/* Additional content sections */}
      <section className="content-section">
        <div className="container">
          <h2>Welcome to Our Interactive Experience</h2>
          <p>
            Experience the magic of UnicornStudio animations in this beautiful React application.
            The animation above showcases the power of interactive web experiences.
          </p>
        </div>
      </section>

      <section className="features-section">
        <div className="container">
          <h2>Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>Interactive Animations</h3>
              <p>Powered by UnicornStudio for smooth, engaging experiences</p>
            </div>
            <div className="feature-card">
              <h3>Responsive Design</h3>
              <p>Optimized for all devices and screen sizes</p>
            </div>
            <div className="feature-card">
              <h3>Modern UI</h3>
              <p>Clean, contemporary design with beautiful aesthetics</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 UnicornStudio React App. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
