import React from 'react';

function Actions() {

  const [fire, stokeFire] = useState(0);

  return (
    <div id='inside'>
      <button onClick={() => stokeFire(fire + 100)}>stoke fire</button>
    </div>
    // <div>
    //   <h4>build:</h4>
    //   <button onClick={}>trap</button>
    //   <button onClick={}>cart</button>
    //   <button onClick={}>hut</button>
    //   <button onClick={}>lodge</button>
    // </div>
    // <div>
    //   <h4>craft:</h4>
    //   <button onClick={}>torch</button>
    //   <button onClick={}>waterskin</button>
    //   <button onClick={}>spear</button>
    //   <button onClick={}>pack</button>
    // </div>
    // <div>
    //   <h4>buy:</h4>
    //   <button onClick={}>scales</button>
    //   <button onClick={}>teeth</button>
    //   <button onClick={}>compass</button>
    //   <button onClick={}>medicine</button>
    // </div>
    // <div id='outside'>
    //   <button onClick={}>gather wood</button>
    //   <button onClick={}>check traps</button>
    // </div>
  );
}

export default Actions;