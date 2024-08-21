import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

function Loader({color}) {
  return ( 
      <CircularProgress style={{ color:color?color: 'white' }} size={18}/> 
  );
}

export default Loader;