import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useTheme } from '@mui/material/styles';

interface BackButtonProps {
    navigateTo?: string;
}

const BackButton: React.FC<BackButtonProps> = ({navigateTo}) => {
  const navigate = useNavigate(); 
 const theme = useTheme();

 const handleBackClick = () => {
    if (navigateTo) {
      navigate(navigateTo);
    } else {
      navigate(-1); 
    }
};

  return (
    <Button
      color="primary"
      startIcon={<ArrowBackIcon />}
      onClick={handleBackClick} 
      sx={{
        marginBottom: '20px',
        fontWeight: 'bold',
        textTransform: 'none',
      }}
    >
        <Typography    
        sx={{
          fontFamily: 'Roboto', 
          transition: 'color 0.3s ease',
          '&:hover': {
            color: theme.palette.secondary.dark,
          },
        }}>
            Retour
        </Typography>
    </Button>
  );
};

export default BackButton;
