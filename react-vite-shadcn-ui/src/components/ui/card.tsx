import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import { Characters } from '@/model/Characters';
import { useState, useEffect } from 'react';

export function CardList() {

const [characters, setCharacters] = useState<Characters[]>([]);

useEffect(() => {
  const fetchData = async () => {
      let baseUrl = 'https://dattebayo-api.onrender.com';

      try {
          const response = await fetch(`${baseUrl}/characters`);
          const data = await response.json();
          console.log(data);

          if (Array.isArray(data.characters)) {
              const arrayList = data.characters.map((char: any) => {
                  return char.images;
              });

             
              setCharacters(arrayList);
          }

      } catch (error) {
          console.error('Error fetching data:', error);
      }
  };

 fetchData();
}, []);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  );
}