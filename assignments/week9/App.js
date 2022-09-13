import React from 'react';
import NavBar from './NavBar';

const App = () => {

  const tags = ['All','National','Business','Sports','World','Politics','Technology','Startup','Entertainment','Miscellaneous','Hatke','Science','Automobile'];
  return (
    <div>
      <NavBar tags={tags}/>
    </div>
  )
};

export default App;
