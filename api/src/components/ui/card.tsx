import { Grid, Paper, Button } from '@mui/material';
import { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import { SkeletonCard } from '../skeletonCard';
import { useNavigate } from 'react-router-dom';

export function GridCard() {
  const [characters, setCharacters] = useState<{ id: number, image: string, name: string }[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const baseUrl = 'https://dattebayo-api.onrender.com';

      try {
        const response = await fetch(`${baseUrl}/characters`);
        const data = await response.json();

        if (Array.isArray(data.characters)) {
          const arrayList = data.characters.map((char: any) => ({
            id: char.id || 0,
            image: char.images?.[0] || '/static/images/placeholder.jpg',
            name: char.name || 'Unknown',
          }));
          setCharacters(arrayList);
        }
        setLoading(false); // Data fetched successfully
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false); // Even on error, stop loading
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
        {loading
          ? Array(6)
              .fill(0)
              .map((_, index) => ( // the _ is a placeholder for the value that we don't need and index is the index of the array
                <Grid item xs={12} sm={6} md={4} key={index}> 
                  <SkeletonCard />
                </Grid>
              ))
          : characters.map((character, i) => (
              <Grid item xs={12} sm={6} md={4} key={character.id}>
                <Card sx={{ maxWidth: 250 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image={character.image}
                      alt={`Character ${i + 1}`}
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{ fontFamily: 'Ninja Naruto, sans-serif' }}
                      >
                        {character.name}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Description for character {i + 1}.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button
                      size="small"
                      color="primary"
                      onClick={() => navigate(`/character/${character.id}`)} 
                    >
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
