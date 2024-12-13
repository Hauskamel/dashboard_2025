import React, { useEffect, useState } from 'react';
import Clock from "./components/Clock";

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/message')
        .then((response) => response.json())
        .then((data) => setMessage(data.message));
  }, []);

  return (
      <Clock/>
  );
}

export default App;