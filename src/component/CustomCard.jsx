import React from 'react';
import { Card, CardContent, Box, Typography } from '@mui/material';


const CustomCard = ({iconSrc, title, onClick, borderRadius}) => {
  return (
    <div className='customCard'>
      <Box
        width="50%"
        height="100%"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        onClick ={onClick}
        borderRadius={borderRadius}
      >

        <img src={iconSrc} alt={title} style={{  height: 'calc(2.5rem + 1vw)' }} />
        <Typography variant="h6" component="div" sx={{ color: 'white',     fontSize: 'calc(0.5rem + 1vw)'}}>
          {title}
        </Typography>
      </Box>
    </div>
  );
};

export default CustomCard;
