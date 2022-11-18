import React, {useState, useEffect} from 'react';

import './App.css';

function App() {
  const [joke, setJoke] = useState({})

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'X-API-Key': 'Pz5s/PcmYDE3PqSzPpfvNA==Ome2rxMJlOQOmk81',
        
      }
    };
    
    fetch('https://api.api-ninjas.com/v1/chucknorris?', options)
      .then(response => response.json())
	.then(response => setJoke(response))
	.catch(err => console.error(err));
  }, [])

const newJoke = (event) => {
  const options = {
    method: 'GET',
    headers: {
      'X-API-Key': 'Pz5s/PcmYDE3PqSzPpfvNA==Ome2rxMJlOQOmk81',
      
    }
  };
  
  fetch('https://api.api-ninjas.com/v1/chucknorris?', options)
    .then(response => response.json())
    .then(response => setJoke(response))
    .catch(err => console.error(err));
}  

return (
  <div className='App'>
    <h3 className='title'>chuckdogz</h3>
    <div className='riddle-container'>
    <h2>{joke.joke}</h2>
    
    <button className='button-17' onClick={newJoke}>GIMME ANOTHER!</button>
    </div>
    </div>
)
}

export default App;
