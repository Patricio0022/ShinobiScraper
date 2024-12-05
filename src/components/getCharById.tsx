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
import { SkeletonCard } from "./skeletonCard";
import { Debut } from "@/model/Debut";
import { Family } from "@/model/Family";
import { Age } from "@/model/Age";
import { Height } from "@/model/Height";
import { Weight } from "@/model/Weight";
import { VoiceActors } from "@/model/VoiceActors";
import { Rank } from "@/model/Rank";
import { Tools } from "@/model/Tools";
import { ScraperData } from "./scraper";


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
  rank: Rank;
  tools: Tools;
  voiceActors: VoiceActors;
}

interface ScraperDataProps {
  characterName: string | undefined; 
}

export function CharacterDetails() {
  const navigate = useNavigate();

  const [character, setCharacter] = useState< Characters | null>(null);
  const [isVoiceActorsVisible, setVoiceActorsVisible] = useState(false);
  const [isTeamVisible, setTeamVisible] = useState(false);
  const [isRankVisible, setRankVisible] = useState(false);
  const [isFamilyVisible, setFamilyVisible] = useState(false);
  const [loading, setLoading] = useState(true);

  const { id, name } = useParams<{ id: string; name: string }>();

  const toggleTeamVisibility = () => setTeamVisible(!isTeamVisible);
  const toggleRankVisibility = () => setRankVisible(!isRankVisible);
  const toggleFamilyVisibility = () => setFamilyVisible(!isFamilyVisible);
  const toggleVoiceActorsVisibility = () => setVoiceActorsVisible(!isVoiceActorsVisible);



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
          debut: data.debut || {
            manga: "Not available", 
            anime: "Not available", 
            novel: "Not available", 
            movie: "Not available", 
            ova: "Not available", 
            appearsIn: "Not available" },

          family: data.family || { 
            father: "Not available", 
            mother: "Not available", 
            wife: "Not available" },

          jutsu: data.jutsu || [],
          natureType: data.natureType || [],
          personal: data.personal || undefined,
          rank: data.rank,
          tools: data.tools,
          voiceActors: data.voiceActors
        };

        console.log("personal voiceActors:", data.voiceActors);

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
          p: 3,
          margin: "auto",
          maxWidth: "80%",
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
        <Typography variant="h5" color="text.secondary"  >
          Character not found.
        </Typography>
      </Paper>
    );
  }

  return (
    <>
     <div className="flex ">
    <Paper sx={{ display: 'flex', flexDirection: 'row-reverse', flexGrow: 1 }}>

      <div className="h-[1600px]">
      <Paper
      sx={(theme) => ({
        p: 3,
        margin: "none",
        maxWidth: "100%",
        maxHeight: "100%",
        backgroundColor: "#fff",
        ...theme.applyStyles("dark", { backgroundColor: "#1A2027" }),
      })}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Card sx={{ maxWidth: 260}} key={character.id}>
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
                sx={{ fontFamily: "Ninja Naruto, sans-serif" ,fontSize: '20px' }}
              >
                {character.name}
              </Typography>
  
              <Typography variant="body1" color="text.secondary">

              <div  style={{fontSize: '2px'}} >

              <Table size="small">
                  <TableBody>

                    <TableRow>
                      <TableCell sx={{ fontSize: '0.75rem', fontWeight: 'bold', textAlign: 'center' }} 
                      colSpan={2}>Debut
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell sx={{ fontSize: '0.75rem' }}>Manga:</TableCell>
                      <TableCell sx={{ fontSize: '0.75rem' }}>{character.debut?.manga || "Not available"}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell sx={{ fontSize: '0.75rem' }}>Anime:</TableCell>
                      <TableCell sx={{ fontSize: '0.75rem' }}>{character.debut?.anime || "Not available"}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell sx={{ fontSize: '0.75rem' }}>Novel:</TableCell>
                      <TableCell sx={{ fontSize: '0.75rem' }}>{character.debut?.novel || "Not available"}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell sx={{ fontSize: '0.75rem' }}>Movie:</TableCell>
                      <TableCell sx={{ fontSize: '0.75rem' }}>{character.debut?.movie || "Not available"}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell sx={{ fontSize: '0.75rem' }}>OVA:</TableCell>
                      <TableCell sx={{ fontSize: '0.75rem' }}>{character.debut?.ova || "Not available"}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell sx={{ fontSize: '0.75rem' }}>Appears in:</TableCell>
                      <TableCell sx={{ fontSize: '0.75rem' }}>{character.debut?.appearsIn || "Not available"}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell sx={{ fontSize: '0.75rem' }}>Age</TableCell>

                      <TableCell sx={{ fontSize: '0.75rem' }}>
                        {character.personal?.age ? (
                          <>
                            <div>Part I: {character.personal.age["Part I"] || "Not available"}</div>
                            <div>Part II: {character.personal.age["Part II"] || "Not available"}</div>
                            <div>Academy Graduate: {character.personal.age["Academy Graduate"] || "Not available"}</div>
                          </>
                        ) : (
                          "Not available"
                        )}
                      </TableCell>
                      </TableRow>

                      <TableRow>
        <TableCell sx={{ fontSize: '0.75rem', fontWeight: 'bold', textAlign: 'center' }} colSpan={2}>
          Voice Actors
        </TableCell>
      </TableRow>

      <TableRow>
        <TableCell sx={{ fontSize: '0.75rem', textAlign: 'center' }} colSpan={2}>
          <div
            style={{ cursor: 'pointer', textDecoration: 'underline', color: 'red' }}
            onClick={toggleVoiceActorsVisibility}
          > 
            {isVoiceActorsVisible ? 'Hide Voice Actors' : 'Show Voice Actors'}
          </div>
        </TableCell>
      </TableRow>
{isVoiceActorsVisible && (
  <TableRow>
    <TableCell sx={{ fontSize: '0.75rem', textAlign: 'center' }} colSpan={2}>
      {character.voiceActors ? (
        <>
          <div>
            <strong>Japanese:</strong>
            {character.voiceActors.japanese ? (
              character.voiceActors.japanese.map((actor, index) => (
                <div key={index}>{actor.trim()}</div>
              ))
            ) : (
              "Not available"
            )}
          </div>
          <div>
            <strong>English:</strong>
            {character.voiceActors.english ? (
              character.voiceActors.english.map((actor, index) => (
                <div key={index}>{actor.trim()}</div>
              ))
            ) : (
              "Not available"
            )}
          </div>
        </>
      ) : (
        "Not available"
      )}
    </TableCell>
  </TableRow>
)}
      
                  
    <TableRow>
      <TableCell sx={{ fontSize: '0.75rem', fontWeight: 'bold', textAlign: 'center' }} colSpan={2}>Personal</TableCell>
    </TableRow>
    <TableRow>
      <TableCell sx={{ fontSize: '0.75rem' }}>Birthdate:</TableCell>
      <TableCell sx={{ fontSize: '0.75rem' }}>{character.personal?.birthdate || "Not available"}</TableCell>
    </TableRow>
   

    <TableRow>
      <TableCell sx={{ fontSize: '0.75rem' }}>Sex:</TableCell>
      <TableCell sx={{ fontSize: '0.75rem' }}>{character.personal?.sex || "Not available"}</TableCell>
    </TableRow>
    <TableRow>
      <TableCell sx={{ fontSize: '0.75rem' }}>Age:</TableCell>
      <TableCell sx={{ fontSize: '0.75rem' }}>
        {character.personal?.age ? (
          <>
            <div>Part I: {character.personal.age["Part I"] || "Not available"}</div>
            <div>Part II: {character.personal.age["Part II"] || "Not available"}</div>
          </>
        ) : (
          "Not available"
        )}
      </TableCell>
    </TableRow>
    

    <TableRow>
      <TableCell sx={{ fontSize: '0.75rem' }}>Height:</TableCell>

      <TableCell sx={{ fontSize: '0.75rem' }}>

        {character.personal?.height ? (

          <>

            <div>Part I: { character.personal.height["Part I"] || "Not available"}</div>
            <div>Part II: { character.personal.height["Part II"] || "Not available"}</div>
            <div>Blank Period: { character.personal.height["Blank Period"] || "Not available"}</div>

          </>
        ) : (
          "Not available"
        )}
      </TableCell>


    </TableRow>
    <TableRow>
      <TableCell sx={{ fontSize: '0.75rem' }}>Weight:</TableCell>
      <TableCell sx={{ fontSize: '0.75rem' }}>
        {character.personal?.weight ? (
          <>
            <div>Part I: {character.personal.weight.partI || "Not available"}
           
            </div>
          </>
        ) : (
          "Not available"
        )}
      </TableCell>
    </TableRow>
    <TableRow>
      <TableCell sx={{ fontSize: '0.75rem' }}>Blood Type:</TableCell>
      <TableCell sx={{ fontSize: '0.75rem' }}>{character.personal?.bloodType || "Not available"}</TableCell>
    </TableRow>
    <TableRow>
      <TableCell sx={{ fontSize: '0.75rem' }}>Classification:</TableCell>
      <TableCell sx={{ fontSize: '0.75rem' }}>{character.personal?.classification || "Not available"}</TableCell>
    </TableRow>
    <TableRow>
      <TableCell sx={{ fontSize: '0.75rem' }}>Occupation:</TableCell>
      <TableCell sx={{ fontSize: '0.75rem' }}>{character.personal?.occupation || "Not available"}</TableCell>
    </TableRow>
    <TableRow>
      <TableCell sx={{ fontSize: '0.75rem' }}>Affiliation:</TableCell>
      <TableCell sx={{ fontSize: '0.75rem' }}>{character.personal?.affiliation || "Not available"}</TableCell>
    </TableRow>

    {/* Team */}
      <TableRow>
        <TableCell sx={{ fontSize: '0.75rem', fontWeight: 'bold', textAlign: 'center' }} colSpan={2}>
          Team
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell sx={{ fontSize: '0.75rem', textAlign: 'center' }} colSpan={2}>
          <div
            style={{ cursor: 'pointer', textDecoration: 'underline', color: 'red' }}
            onClick={toggleTeamVisibility}
          >
            {isTeamVisible ? 'Hide Team' : 'Show Team'}
          </div>
        </TableCell>
      </TableRow>
      {isTeamVisible && (
        <TableRow>
          <TableCell sx={{ fontSize: '0.75rem' }}>Team:</TableCell>
          <TableCell sx={{ fontSize: '0.75rem' }}>
            {character.personal?.team || "Not available"}
          </TableCell>
        </TableRow>
      )}

      {/* Rank */}
      <TableRow>
        <TableCell sx={{ fontSize: '0.75rem', fontWeight: 'bold', textAlign: 'center' }} colSpan={2}>
          Rank
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell sx={{ fontSize: '0.75rem', textAlign: 'center' }} colSpan={2}>
          <div
            style={{ cursor: 'pointer', textDecoration: 'underline', color: 'red' }}
            onClick={toggleRankVisibility}
          >
            {isRankVisible ? 'Hide Rank' : 'Show Rank'}
          </div>
        </TableCell>
      </TableRow>
      {isRankVisible && (
        <>
          <TableRow>
            <TableCell sx={{ fontSize: '0.75rem' }}>Ninja Rank:</TableCell>
            <TableCell sx={{ fontSize: '0.75rem' }}>
              {character.rank?.ninjaRank["Part I"] || "Not available"}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell sx={{ fontSize: '0.75rem' }}>Ninja Registration:</TableCell>
            <TableCell sx={{ fontSize: '0.75rem' }}>
              {character.rank?.ninjaRegistration || "Not available"}
            </TableCell>
          </TableRow>
          
        </>
      )}

      {/* Family */}
      <TableRow>
        <TableCell sx={{ fontSize: '0.75rem', fontWeight: 'bold', textAlign: 'center' }} colSpan={2}>
          Family
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell sx={{ fontSize: '0.75rem', textAlign: 'center' }} colSpan={2}>
          <div
            style={{ cursor: 'pointer', textDecoration: 'underline', color: 'red' }}
            onClick={toggleFamilyVisibility}
          >
            {isFamilyVisible ? 'Hide Family' : 'Show Family'}
          </div>
        </TableCell>
      </TableRow>
      {isFamilyVisible && (
        <>
          <TableRow>
            <TableCell sx={{ fontSize: '0.75rem' }}>Father:</TableCell>
            <TableCell sx={{ fontSize: '0.75rem' }}>
              {character.family?.father || "Not available"}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell sx={{ fontSize: '0.75rem' }}>Mother:</TableCell>
            <TableCell sx={{ fontSize: '0.75rem' }}>
              {character.family?.mother || "Not available"}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell sx={{ fontSize: '0.75rem' }}>Wife:</TableCell>
            <TableCell sx={{ fontSize: '0.75rem' }}>
              {character.family?.wife || "Not available"}
            </TableCell>
          </TableRow>
        </>
      )}
                    </TableBody>
                  </Table>
                  </div>
                </Typography>
              </CardContent>
            </Card>

          </Grid>
        </Grid>
      </Paper>
          </div>    
          <div className="flex ml-4">
            {name && <ScraperData characterName={name} />} 
          </div>
    </Paper>
    </div>

    </>
  );
}  