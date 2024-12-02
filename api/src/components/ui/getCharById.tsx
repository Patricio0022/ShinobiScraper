import {
  Paper,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";

import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { SkeletonCard } from "../skeletonCard";
import { Debut } from "@/model/Debut";
import { Family } from "@/model/Family";
import { Age } from "@/model/Age";
import { Height } from "@/model/Height";
import { Weight } from "@/model/Weight";
import { VoiceActors } from "@/model/VoiceActors";


interface Personal {
  birthdate: string;
  sex: string;
  age?: Age;
  height?: Height;
  weight?: Weight;
  bloodType?: string;
  kekkeiGenkai?: string[];
  classification?: string[];
  tailedBeast?: string;
  occupation?: string[];
  affiliation?: string[];
  team?: string[];
  clan?: string;
  titles?: string[];
  rank?: string;
  tools?: string[];
  voiceActors?: VoiceActors;
}

interface Characters {
  id: string;
  name: string;
  images: string[];
  debut: Debut;
  family: Family;
  jutsu: string[];
  natureType: string[];
  personal?: Personal;
}

export function CharacterDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [character, setCharacter] = useState< Characters | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await fetch(
          `https://dattebayo-api.onrender.com/characters/${id}`
        );

        if (!response.ok) {
          console.error("Failed to fetch data");
          setLoading(false);
          return;
        }

        const data: Characters = await response.json();
        console.log(data);
 
        const person: Characters = {
          id: data.id,
          name: data.name,
          images: data.images || [],
          debut: data.debut || "error to fetch",
          family: data.family || "",
          jutsu: data.jutsu || [],
          natureType: data.natureType || [],
          personal: data.personal || undefined,
        };

        setCharacter(person);
        setLoading(false);
      } catch (error) {
        console.error("error to fetch", error);
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
          ...theme.applyStyles("dark", { backgroundColor: "#1A2027" }),
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

  if (!character) {
    return (
      <Paper
        sx={(theme) => ({
          p: 4,
          margin: "auto",
          maxWidth: "75%",
          backgroundColor: "#fff",
          ...theme.applyStyles("dark", { backgroundColor: "#1A2027" }),
        })}
      >
        <Typography variant="h5" color="text.secondary">
          Character not found.
        </Typography>
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
        ...theme.applyStyles("dark", { backgroundColor: "#1A2027" }),
      })}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Card sx={{ maxWidth: 250 }} key={character.id}>
            <CardMedia
              component="img"
              height="300"
              image={character?.images?.[0] || "default_image_url.jpg"}
              alt={character?.name}
            />
              <CardContent>
                  <Typography
                    variant="h4"
                    gutterBottom
                    sx={{ fontFamily: "Ninja Naruto, sans-serif" }}
                  >
                    {character.name}
                  </Typography>

                  <Typography variant="body1" color="text.secondary">

                    <Table size="small">
                      <TableBody>
                      <TableRow>
                        <TableCell><strong>Debut:</strong></TableCell>
                        <TableCell></TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Manga:</TableCell>
                        <TableCell>{character.debut?.manga || "Not available"}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Anime:</TableCell>
                        <TableCell>{character.debut?.anime || "Not available"}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Novel:</TableCell>
                        <TableCell>{character.debut?.novel || "Not available"}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Movie:</TableCell>
                        <TableCell>{character.debut?.movie || "Not available"}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell><strong>Family:</strong></TableCell>
                        <TableCell></TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Father:</TableCell>
                        <TableCell>{character.family?.father || "Not available"}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Mother:</TableCell>
                        <TableCell>{character.family?.mother || "Not available"}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Wife:</TableCell>
                        <TableCell>{character.family?.wife || "Not available"}</TableCell>
                      </TableRow>
                      </TableBody>
                    </Table>
                    <br />

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
