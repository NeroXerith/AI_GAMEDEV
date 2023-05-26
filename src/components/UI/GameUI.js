import React from 'react';
import { Button, Box, Container, Typography, Paper } from '@mui/material';
import Image from 'next/image';
import rockImage from '../assets/rock.svg';
import paperImage from '../assets/paper.svg';
import scissorsImage from '../assets/scissors.svg';
import vsImage from '../assets/vs.svg';

const images = {
  rock: rockImage,
  paper: paperImage,
  scissors: scissorsImage,
};

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
            <div style={{ height: '100%', width: '100%' }}>
              <Image src={images[playerChoice]} layout="responsive" objectFit="contain" alt="actionImage" />
            </div>
            <Typography variant="h4">{playerChoice}</Typography>
          </Box>
          <Box sx={{ marginLeft: '15px' }}>
            <div style={{ height: '90%', width: '90%' }}>
              <Image src={vsImage} layout="responsive" objectFit="contain" alt="vs" />
            </div>
          </Box>
          <Box elevation={3} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)', height: '100%', width: '60%' }}>
            <Typography variant="h2">Computer:</Typography>
            <div style={{ height: '100%', width: '100%', transform: 'scaleX(-1)' }}>
              <Image src={images[computerChoice]} layout="responsive" objectFit="contain" alt="actionImage" />
            </div>
            <Typography variant="h4">{computerChoice}</Typography>
          </Box>
        </Box>
      </Container>

      <Typography variant="h2">Result: {result}</Typography>
    </div>
  );
};

export default GameUI;
