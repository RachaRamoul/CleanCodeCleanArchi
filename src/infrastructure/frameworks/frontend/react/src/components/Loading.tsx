import React from "react";
import './Loading.css';
import { Box, Typography, CircularProgress } from "@mui/material";

const Loading: React.FC = () => {
  return (
    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" minHeight="80vh">
       <CircularProgress sx={{ color: '#d22424' }} />
      <Typography sx={{ marginTop: '20px' }}>
        Loading...
      </Typography>
    </Box>
  );
};

export default Loading;
