import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import LogoutIcon from '@mui/icons-material/Logout';
import Typography from '@mui/material/Typography';
import { authService } from '../services/authService';
import { useTheme } from '@mui/material/styles';

const SubHeader: React.FC<{ title: string }> = ({ title }) => {
  const theme = useTheme();

  return (
    <div>
      <AppBar sx={{ backgroundColor: '#f5f5f5', color: '#000' }} position="static">
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            { title }
          </Typography>
          <IconButton color="inherit" onClick={authService.logout}>
            <LogoutIcon sx={{'&:hover': {color: theme.palette.secondary.dark}}} />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default SubHeader;
