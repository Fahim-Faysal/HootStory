import React, { useEffect, useState } from 'react';
import stories from '../../data/data.json'
import Navbar from '../Navbar/Navbar';
// "image": "https://photos.travelblog.net/165444/1065617/f/10356583-220307-valencia-16-0.jpg",

const Stories = () => {
      const [data, setData] = useState(stories)

      const [longlen, setLonglen] = useState(4)

      const [shortlen, setshortShortlen] = useState(2)

      const [longtoggle, setToggle] = useState(true)

      const [shorttoggle, setshortToggle] = useState(true)

      const [recent, setRecent] = useState([])
      console.log(recent);


      const handle = () => {
            setToggle(previousState => !previousState)
            if (longtoggle) {
                  const longres = stories.filter(s => {
                        return s?.type === 'short'
                  })
                  setData(longres)
                  setLonglen(0)

            }
            else {
                  const shortres = stories.filter(s => {
                        return s?.type === 'long'
                  })
                  setData(shortres)
                  setLonglen(0)
            }

      }


      const handleShort = () => {
            setshortToggle(previousState => !previousState)
            if (shorttoggle) {
                  const longres = stories.filter(s => {
                        return s?.type === 'long'
                  })
                  setData(longres)
                  setshortShortlen(0)

            }
            else {
                  const shortres = stories.filter(s => {
                        return s?.type === 'short'
                  })
                  setData(shortres)
                  setshortShortlen(0)
            }
      }

      const deleteAll = () => {
            setData([])
      }

      useEffect(() => {
            const recent = stories.filter(storie => storie?.datetime.slice(0, 4) < '2022')
            setRecent(recent)
      }, [])


      return (
            <>
                  <Navbar toggle={longtoggle} setToggle={setToggle} handle={handle} handleShort={handleShort} longlen={longlen} deleteAll={deleteAll} shortlen={shortlen} ></Navbar>


                  <div style={{ backgroundColor: 'black', display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gridGap: '10px', justifyItems: 'center', alignItems: 'center' }}>


                        {
                              data.map(storie => (
                                    <div key={storie?.id} style={{ width: '606px', height: '220px', backgroundColor: '#242526', display: 'flex', alignItems: 'center', marginTop: '50px' }}>


                                          {
                                                longtoggle && (storie?.type === 'long') ?

                                                      < div style={{ width: '606px', height: '220px', backgroundColor: '#242526', display: 'flex', alignItems: 'center', marginTop: '50px' }} >
                                                            <div>
                                                                  <h3 style={{ color: '#4392f1' }}>{storie?.title}</h3>
                                                                  <p style={{ color: 'white' }}>{storie?.body}</p>
                                                                  <p style={{ color: '#bcb8b1' }}>{storie?.datetime}</p>

                                                            </div>
                                                            <div>
                                                                  <img style={{ width: '100px', height: '90px' }} src={storie?.image} alt="" />
                                                            </div>
                                                      </div>
                                                      :
                                                      shorttoggle && storie?.type === 'short' &&
                                                      < div style={{ width: '606px', height: '220px', backgroundColor: '#242526', marginTop: '50px' }} >
                                                            <div>
                                                                  <p style={{ color: 'white' }}>{storie?.body}</p>
                                                                  <p style={{ color: '#bcb8b1' }}>{storie?.datetime}</p>

                                                            </div>
                                                      </div>
                                          }

                                    </div>
                              ))
                        }
                  </div>
            </>
      );
};

export default Stories;