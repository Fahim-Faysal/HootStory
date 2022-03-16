import { Switch } from '@mui/material';
import React, { useState } from 'react';
import stories from '../../data/data.json'
import blog from '../../Assets/Subtraction 10.png'

const Navbar = ({ handle, handleShort, longlen, shortlen, deleteAll }) => {

      return (
            <div style={{ marginTop: '100px', backgroundColor: '#242526', }}>
                  <div style={{
                        width: '60%', display: 'flex', color: 'white', gap: '30px', alignItems: 'center',
                  }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                              <img style={{ width: '41px', height: '41px' }} src={blog} alt="" />
                              <h2>Blog</h2>
                        </div>
                        <p style={{ color: 'red' }} onClick={deleteAll}>Delete All</p>
                        <h3>Long Stories</h3>
                        <h6>{longlen}</h6>
                        <Switch onClick={handle} defaultChecked />
                        <h3>Short Stories</h3>
                        <h6>{shortlen}</h6>
                        <Switch onClick={handleShort} defaultChecked />
                  </div>

            </div>
      );
};

export default Navbar;


