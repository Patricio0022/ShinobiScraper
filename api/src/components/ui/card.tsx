import { Grid, Paper, Button } from '@mui/material';
import { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';

export function GridCard() {
  const [characters, setCharacters] = useState<{ image: string, name: string }[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const baseUrl = 'https://dattebayo-api.onrender.com';

      try {
        const response = await fetch(`${baseUrl}/characters`);
        const data = await response.json();
        console.log(data);

        if (Array.isArray(data.characters)) {
          const arrayList = data.characters.map((char: any) => ({
            image: char.images?.[0] || '/static/images/placeholder.jpg',
            name: char.name || 'Unknown'
          }));
          setCharacters(arrayList);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Paper
      sx={(theme) => ({
        p: 4,
        margin: 'auto',
        maxWidth: '75%',
        backgroundColor: '#fff',
        ...theme.applyStyles('dark', {
          backgroundColor: '#1A2027',
        }),
      })}
    >
      <Grid container spacing={2}>
        {characters.map((character, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <Card sx={{ maxWidth: 250 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={character.image}
                  alt={`Character ${i + 1}`}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: 'Ninja Naruto, sans-serif' }}>
                    {character.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Description for character {i + 1}.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
}
