import React from 'react';
import { Button, Grid, Typography, Paper} from '@mui/material';

const GameUI = ({ choices, handlePlayerChoice, playerChoice, computerChoice, result }) => {
  return (
    <div style={{display: 'flex', flexDirection: 'column' ,justifyContent: 'center', alignItems: 'Center'}}>
        <Grid container spacing={2} justifyContent="center">
            {choices.map((choice) => (
            <Grid item key={choice}>
                <Button variant="contained" color="primary" onClick={() => handlePlayerChoice(choice)}>
                {choice}
                </Button>
            </Grid>
            ))}
        </Grid>
        <Grid container justifyContent="space-between">
          <Grid item xs={6}>
            <Paper elevation={3} sx={{ display: 'flex', flexDirection: 'column',justifyContent: 'center', alignItems: 'center', boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)', width: '70%', marginRight: 'auto' }}>
              <Typography variant="h2">Player (YOU)  : </Typography>
              <img src={`../assets/${playerChoice}.svg`} height="30%" width="30%" alt="actionImage" />    
              <Typography variant="h4">{playerChoice}</Typography> 
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper elevation={3} sx={{  display: 'flex', flexDirection: 'column',justifyContent: 'center', alignItems: 'center', boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)', width: '70%', marginLeft: 'auto' }}>
              <Typography variant="h2">Computer:</Typography>
              <img src={`../assets/${computerChoice}.svg`} height="30%" width="30%" alt="actionImage" />
              <Typography variant="h4">{computerChoice}</Typography>
            </Paper>
          </Grid>
        </Grid>
        <Typography variant="h2">Result: {result}</Typography>
    </div>
  );
};

export default GameUI;
