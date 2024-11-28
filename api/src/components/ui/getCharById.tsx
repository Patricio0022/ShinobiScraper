import { Paper, Grid, Card, CardMedia, CardContent, Typography, CardActions, Button } from "@mui/material";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { SkeletonCard } from '../skeletonCard';
import { Characters } from "@/model/Characters";

export function CharacterDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [character, setCharacter] = useState<Characters | null>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await fetch(`https://dattebayo-api.onrender.com/characters/${id}`);
        const data = await response.json();

        const person = new Characters({
            id: data.id,
            name: data.name,
            images: data.images || [],
            debut: data.debut,
            family: data.family,
            jutsu: data.jutsu,
            natureType: data.natureType,
            personal: data.personal, 
          });

          setCharacter(person);
          
          
        setLoading(false); // Finished loading
      } catch (error) {
        console.error("Failed to fetch character:", error);
        setLoading(false);
      }
    };

    fetchCharacter();
  }, [id]);

  if (loading) {
    return (
      <Paper
        sx={(theme) => ({
          p: 4,
          margin: "auto",
          maxWidth: "75%",
          backgroundColor: "#fff",
          ...theme.applyStyles("dark", {
            backgroundColor: "#1A2027",
          }),
        })}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
          <SkeletonCard />
          </Grid>
        </Grid>
      </Paper>
    );
  }

  return (
    <Paper
      sx={(theme) => ({
        p: 4,
        margin: "auto",
        maxWidth: "75%",
        backgroundColor: "#fff",
        ...theme.applyStyles("dark", {
          backgroundColor: "#1A2027",
        }),
      })}
    >
      <Grid container spacing={2}>
            <Grid item xs={12}>
              <Card sx={{ maxWidth: 250 }}>
                <CardMedia
                  component="img"
                  height="300"
                  image={character?.getImages()?.[0] }
                  alt={character?.getName()}
                />
                <CardContent>
                  <Typography variant="h4" gutterBottom sx={{ fontFamily: 'Ninja Naruto, sans-serif' }}>
                    {character?.getName()}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                  {JSON.stringify(character?.getPersonal() || '')}
                  </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color="primary" onClick={() => navigate("/")}>
                        Back
                    </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Paper>
      );
    }
