import React from 'react';
import Footer from './Footer';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';
// import Room from './Room';
import Locations from './Locations';
// import Outside from './Outside';
import Inventory from './Inventory';
//import { render } from '@testing-library/react';

function App() {
  return (
    <div>
      <Locations />
      <Switch>
        <Route component={Error404} />
      </Switch>
      <Inventory />
      <Footer />
    </div>
  );
}

export default App;