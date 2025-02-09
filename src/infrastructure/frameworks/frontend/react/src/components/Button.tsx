import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button as MuiButton, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

interface CustomButtonProps {
  text?: string;
  navigateTo?: string;
  icon?: React.ReactNode;
}

const CustomButton: React.FC<CustomButtonProps> = ({ text, navigateTo, icon }) => {
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <MuiButton
      startIcon={icon} 
      onClick={() => navigateTo ? navigate(navigateTo) : navigate('')} 
      sx={{
        backgroundColor: theme.palette.primary.dark,
        marginBottom: '20px',
        padding: '10px',
        fontWeight: 'bold',
      }}
    >
      { text 
        && <Typography
            sx={{
            color: theme.palette.primary.contrastText,
            fontFamily: 'sans-serif',
            transition: 'color 0.3s ease',
            }}
        >
            {text}
        </Typography> 
      }
    </MuiButton>
  );
};

export default CustomButton;
