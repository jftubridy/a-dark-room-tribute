//will have newgame, and pause buttons
import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  const FooterStyle = {
    textAlign: 'center',
    fontSize: '12px'
  };
  return (
    <div style={FooterStyle}>
      <Link to="/">New Game</Link> | <Link to="/AboutADarkRoom">About A Dark Room</Link>
    </div>
  );
}

export default Footer;