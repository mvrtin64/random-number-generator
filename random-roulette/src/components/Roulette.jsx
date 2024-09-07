import React, { useState } from 'react';
import { Button, Box, Typography } from '@mui/material';

const Roulette = () => {
  const [currentNumber, setCurrentNumber] = useState(null); 
  const [isSpinning, setIsSpinning] = useState(false); 
  const [spinInterval, setSpinInterval] = useState(null); 
  
  const spinRoulette = async () => {
    setIsSpinning(true); 

    const spinNumbers = [];
    for (let i = 0; i < 100; i++) {
      const random = Math.floor(Math.random() * 100) + 1;
      spinNumbers.push(random);
    }
    
    let index = 0;
    const intervalId = setInterval(() => {
      setCurrentNumber(spinNumbers[index]);
      index = (index + 1) % spinNumbers.length;
    }, 50);

    const generatedNumber = await fetchRandomNumber(); 

    setTimeout(() => {
      clearInterval(intervalId); 
      setIsSpinning(false); 
    }, 3000); 
  };

  const fetchRandomNumber = async () => {
    try {
      const response = await fetch('http://localhost:3000/random', { method: 'POST' });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data.value;

    } catch (error) {
      console.error('error fetching random number:', error);
      return null;
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        height: '100vh',
        width: '100vw',
        backgroundColor: '#f5f5f5', // Light grey background for a soft look
        padding: 2,
      }}
    >
      <Typography
        variant="h3"
        sx={{
          mb: 3,
          color: '#3f51b5', // Primary color
          fontWeight: 'bold',
          textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)', // Subtle shadow for text
        }}
      >
        Random Roulette
      </Typography>

      <Box
        sx={{
          width: { xs: '60vw', md: '40vw' },
          height: { xs: '60vw', md: '40vw' },
          borderRadius: '50%',
          border: '8px solid #3f51b5',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#ffffff',
          mb: 3,
          fontSize: { xs: '2rem', md: '4rem' },
          color: '#3f51b5',
          boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.2)',
          transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
          '&:hover': {
            backgroundColor: '#e0e0e0', // Slightly darker background on hover
            boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.3)',
          },
        }}
      >
        {isSpinning ? currentNumber : currentNumber || '--'}
      </Box>

      <Button
        variant="contained"
        color="primary"
        onClick={spinRoulette}
        disabled={isSpinning}
        sx={{
          fontSize: '1.2rem',
          padding: '12px 24px',
          borderRadius: '8px', // Rounded corners
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
          transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
          '&:hover': {
            backgroundColor: '#303f9f', // Darker primary color on hover
            boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.3)',
          },
        }}
      >
        Spin
      </Button>
    </Box>
  );
};

export default Roulette;
