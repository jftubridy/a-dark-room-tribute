import React from 'react';
// import Room from './Room';
// import Outside from './Outside';
import { Link } from 'react-router-dom';

function Locations() {
  return (
    <div>
      <Link to='./Room'>Room</Link> | <Link to='./Outside'>Outside</Link>
    </div>
  );
}

export default Locations;