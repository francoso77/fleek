import React from 'react'
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';


export default function Footer() {


  const [value, setValue] = React.useState(0);

  return (
    <Box className='footer'>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Cliente" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Fornecedor" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Escola" icon={<LocationOnIcon />} />
      </BottomNavigation>
    </Box>
  );
}