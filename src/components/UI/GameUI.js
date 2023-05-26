import React from 'react';
import { Button, Box, Container, Typography, Paper } from '@mui/material';

const GameUI = ({ choices, handlePlayerChoice, playerChoice, computerChoice, result }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        {choices.map((choice) => (
          <Button key={choice} variant="contained" color="primary" onClick={() => handlePlayerChoice(choice)} sx={{ margin: '1rem' }}>
            {choice}
          </Button>
        ))}
      </Box>
      <Container sx={{ marginTop: '1rem', display: 'flex', gap: '2rem' }}>
        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
          <Box elevation={3} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)', height: '100%', width: '60%' }}>
            <Typography variant="h2">Player (YOU):</Typography>
            <img src={`../assets/${playerChoice}.svg`} height="100%" width="100%" alt="actionImage" />
            <Typography variant="h4">{playerChoice}</Typography>
          </Box>
          <Box sx={{ marginLeft: '15px' }}>
            <img src="../assets/vs.svg" height="90%" width="90%" alt="vs" />
          </Box>
          <Box elevation={3} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)', height: '100%', width: '60%' }}>
            <Typography variant="h2">Computer:</Typography>
            <img src={`../assets/${computerChoice}.svg`} height="100%" width="100%" style={{ transform: 'scaleX(-1)' }} alt="actionImage" />
            <Typography variant="h4">{computerChoice}</Typography>
          </Box>
        </Box>
      </Container>

      <Typography variant="h2">Result: {result}</Typography>
    </div>
  );
};

export default GameUI;