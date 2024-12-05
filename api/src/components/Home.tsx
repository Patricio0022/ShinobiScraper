import { Grid, Paper, Button, Pagination } from '@mui/material';
import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import { SkeletonCard } from './skeletonCard';
import walpaper from "@/assets/Profile_Jiraiya.PNG.webp";

export function GridCard() {
  const [characters, setCharacters] = useState<{ id: number, image: string, name: string }[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const navigate = useNavigate();

  const fetchData = useCallback(async () => {
    setLoading(true);
    const baseUrl = 'https://dattebayo-api.onrender.com';
    const limit = 20;

    try {
      const response = await fetch(`${baseUrl}/characters?page=${page}&limit=${limit}`);
      const data = await response.json();

      if (Array.isArray(data.characters)) {
        const arrayList = data.characters.map((char: any) => ({
          id: char.id || 0,
          image: char.images?.[1] || char.images?.[0] || walpaper,
          name: char.name || 'Unknown',
        }));
        setCharacters(arrayList);
        setTotalPages(Math.ceil(data.total / limit)); 
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  }, [page]);

  useEffect(() => {
    fetchData();
  }, [fetchData, page]);

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Paper sx={(theme) => ({
      p: 4,
      margin: 'auto',
      maxWidth: '75%',
      backgroundColor: '#fff',
      ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
      }),
    })}>
      <Grid container spacing={2}>
        {loading
          ? Array(6).fill(0).map((_, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <SkeletonCard />
            </Grid>
          ))
          : characters.map((character) => (
            <Grid item xs={12} sm={6} md={4} key={character.id}>
              <Card sx={{ maxWidth: 250 }}>
                <CardActionArea onClick={() => navigate(`/character/${character.id}/${encodeURIComponent(character.name.replace(/\s+/g, '_'))}`)}>
                  <CardMedia component="img" height="140" image={character.image} alt={`Character ${character.name}`} />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: 'Ninja Naruto, sans-serif' }}>
                      {character.name}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" sx={{ color: 'black' }} onClick={() => navigate(`/character/${character.id}/${encodeURIComponent(character.name.replace(/\s+/g, '_'))}`)}>
                    More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
      </Grid>
      <Pagination 
        count={totalPages} 
        page={page} 
        onChange={handlePageChange} 
        color="primary" 
        sx={{ marginTop: 2, display: 'flex', justifyContent: 'center' }} 
      />
    </Paper>
  );
}
