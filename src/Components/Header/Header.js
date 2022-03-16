import React from 'react';
import head from '../../Assets/Layer 1.png'

const Header = () => {
      return (
            <div>
                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#242526', color: 'white' }}>
                        <img src={head} alt="" />
                        <h2>HootStory</h2>
                  </div>
            </div>
      );
};

export default Header;