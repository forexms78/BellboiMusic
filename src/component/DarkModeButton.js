import React, { useState } from 'react';
import { Button, IconButton } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';

function DarkModeButton() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Button
      sx={{ borderRadius: '50%', p: 0 }}
      onClick={toggleDarkMode}
    >
      <IconButton size="large">
        {darkMode ? <Brightness7 /> : <Brightness4 />}
      </IconButton>
    </Button>
  );
}

export default DarkModeButton;
