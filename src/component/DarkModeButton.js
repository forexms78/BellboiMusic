import React, { useState } from 'react';
import { Button, IconButton } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';

function DarkModeButton() {
  
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    console.log("외부")
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Button
      sx={{ borderRadius: '50%', p: 0 }}
      onClick={toggleDarkMode}
    >
      <IconButton size="large">
        {isDarkMode ? <Brightness7 /> : <Brightness4 />}
      </IconButton>
    </Button>
  );
}

export default DarkModeButton;
