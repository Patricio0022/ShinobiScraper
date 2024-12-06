
import { useNavigate } from 'react-router-dom'; 
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export function DenseAppBar() {
  const navigate = useNavigate(); 

  const handleHomeClick = () => {
    navigate("/"); 
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ transition: 'background-color 0.5s ease', bgcolor: 'transparent' }}>
        <Toolbar variant="dense" sx={{ bgcolor: 'transparent', color: 'white' }}>
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>

          <Typography 
            variant="h6" 
            color="inherit" 
            component="div" 
            sx={{ fontFamily: 'Ninja Naruto, sans-serif', cursor: 'pointer' }} 
            onClick={handleHomeClick} 
          >
            Home
          </Typography>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}
