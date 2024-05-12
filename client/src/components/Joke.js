import React, { useEffect, useState } from 'react';
import { Card, Typography } from '@mui/material';
import CustomButton from '../components/Button.js';

export const Joke = () => {
  const [joke, setJoke] = useState(null);

  useEffect(() => {
    fetchJoke();
  },[]);

  const handleReload = () => {
    fetchJoke();
  };

  const fetchJoke = async () => {
    try{
      const response = await fetch('http://localhost:5000/api/random');
      const data = await response.json();
      setJoke(data);
    } catch(error) {
      console.error('Error fetching joke:', error);
    }
  };

  return (
    <div className=' flex justify-center items-center h-screen '>
      <Card className='w-1/3 h-96 ' sx={{ padding:'20px', backgroundColor: '#403d39', borderRadius: '18px' }}>
        { joke && (
          <>
            <Typography sx={{ marginTop: '30px', color: '#eb5e28', letterSpacing: '5px'}}>
              ADVICE #{joke.id}
            </Typography>
            <div className=' min-h-[100px] '>
              <Typography sx={{ marginTop: '30px', color: '#fff', fontSize: '30px' }}>
                {joke.setup}
              </Typography>
              <Typography sx={{marginTop: '10px', color: '#fff', fontSize: '30px' }}>
                {joke.punchline} 
              </Typography>
            </div>
            {/* <Typography sx={{marginTop: '15px', color: '#deb09d', fontWeight: '100'}}>
              ___________________________||___________________________
            </Typography> */}
          </>
        )}
        <CustomButton onClick={handleReload} />
      </Card>
    </div>
  )
}
