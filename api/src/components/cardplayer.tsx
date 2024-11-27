import { CardMedia } from '@mui/material';

export function CardPlayer() {
  return (
    <CardMedia
    sx={{ width: '500px', height: '300px' }}
      component="video"
      controls
      src="https://www.w3schools.com/html/mov_bbb.mp4" />
        
    ); 
    
    }