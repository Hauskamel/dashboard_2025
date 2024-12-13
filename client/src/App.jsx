import React, { useEffect, useState } from 'react';
import Clock from "./components/Clock";

import './style/dashboard-left.css';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/message')
        .then((response) => response.json())
        .then((data) => setMessage(data.message));
  }, []);

  return (
      <div className="dashboard-container">
          <div className="dashboard-left">
              <div className="clock digital">
                  <Clock/>
              </div>

          </div>
          <div className="dashboard-right">

          </div>
      </div>
  );
}

export default App;