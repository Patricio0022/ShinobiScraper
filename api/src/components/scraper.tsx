import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import walpaper from "@/assets/Profile_Jiraiya.PNG.webp"; 

export function ScraperData() {
  const { id } = useParams(); 
  const [character, setCharacter] = useState<{ name: string; image: string; description: string } | null>(null);
  const [scrapedData, setScrapedData] = useState<string[]>([]); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCharacterDetails = async () => {
      const baseUrl = 'https://dattebayo-api.onrender.com'; 
      try {
        const response = await fetch(`${baseUrl}/characters/${id}`);
        const data = await response.json();
        setCharacter({
          name: data.name || 'Unknown',
          image: data.images?.[0] || walpaper,  
          description: data.description || 'No description available.',
        });
        setLoading(false);
      } catch (error) {
        console.error('Erro ao buscar detalhes do personagem:', error);
        setLoading(false);
      }
    };

    const fetchScrapedData = async () => {
      const baseUrl = 'http://localhost:5000/scrape'; 
      try {
        const response = await fetch(`${baseUrl}?name=${encodeURIComponent(id || '')}`);
        const data = await response.json();
        setScrapedData(data.items); 
      } catch (error) {
        console.error('Erro ao buscar dados do scraper:', error);
      }
    };

    fetchCharacterDetails();
    fetchScrapedData(); 
  }, [id]);  

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!character) {
    return <div>Character not found</div>;
  }

  return (
    <Card sx={{ maxWidth: 600, margin: 'auto' }}>
      <CardMedia
        component="img"
        height="300"
        image={character.image}
        alt={character.name}
      />
      <CardContent>
        <Typography variant="h4" gutterBottom>
          {character.name}
        </Typography>
        <Typography variant="body1">{character.description}</Typography>

        <Typography variant="h6" gutterBottom>
          Scraped Data:
        </Typography>
        {scrapedData.length > 0 ? (
          <ul>
            {scrapedData.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <Typography variant="body2">No scraped data available.</Typography>
        )}
      </CardContent>
    </Card>
  );
}
