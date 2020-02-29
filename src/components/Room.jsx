import React from 'react';
// import Locations from './Locations';
import Text from './Text';
import Actions from './Actions';
import Invintory from './Inventory';
import Footer from './Footer';

function Room() {
  return (
    <div>
      <Text />
      <Actions />
      <Invintory />
      <Footer />
    </div>
    //later come in and actually arrange them around in the correct order.

      
  );
}

export default Room;