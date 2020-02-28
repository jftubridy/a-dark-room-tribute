import React from 'react';
// import Locations from './Locations';
import Text from './Text';
import Actions from './Actions';
import Invintory from './Inventory';
import Footer from './Footer';
import RoleAssignment from './RoleAssignment';
import VillageInfo from './VillageInfo';

function Outside() {
  return (
    <div>
      <Text />
      <Actions />
      <RoleAssignment />
      <VillageInfo />
      <Invintory />
      <Footer />
    </div>
    //later come in and actually arrange them around in the correct order.

      
  );
}

export default Outside;