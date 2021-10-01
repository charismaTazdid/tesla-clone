import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const card = (
  <React.Fragment>
    <CardContent>
      
      <Typography variant="h5" component="div">
      5-Star Overall Rating
      </Typography>
      
      <Typography variant="body2">
      DriverFrontal          ★ ★ ★ ★ ★
        <br />
        
      </Typography>
      <Typography variant="body2">
      Passenger Frontal    ★ ★ ★ ★ ★
        <br />
        
      </Typography>
      <Typography variant="body2">
      Rear SeatSide       ★ ★ ★ ★ ★
        <br />
        
      </Typography>
      <Typography variant="body2">
      Front Seat Side        ★ ★ ★ ★ ★
        <br />
       
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Order now</Button>
    </CardActions>
  </React.Fragment>
);

export default function OutlinedCard() {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}