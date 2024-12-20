import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import TextField from "@mui/material/TextField";
import { useState, useEffect } from "react";
import InputAdornment from "@mui/material/InputAdornment";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import DialogContent from "@mui/material/DialogContent";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useGetMoviesQuery } from "../../services/moviesApi";
import { useGetCinemahallsByCityQuery } from "../../services/cinemahallsApi";
import { useActiveCity } from "../../context/ActiveCityContext";
import ErrorMessage from "../mobileHomePage/ErrorMessage";
import image from '../../assets/theater-no.jpg'
interface ModalProps {
  open: boolean;
  handleModal: () => void;
}

const Search = ({ open, handleModal }: ModalProps) => {
  const [search, setSearch] = useState<string>("");
  const [isMovies, setIsMovies] = useState<boolean>(true);
  const [noMovies, setNoMovies] = useState<boolean>(false);

  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const navigate = useNavigate();
  const { activeCityId } = useActiveCity();

  // Fetch movies data
  const {
    data: moviesData = [],
    error: moviesError,
    isLoading: moviesLoading,
  } = useGetMoviesQuery(activeCityId.toString());

  // Fetch theaters data
  const {
    data: theatersResponse = { data: [] },
    isLoading: theatersLoading,
  } = useGetCinemahallsByCityQuery(activeCityId.toString());

  useEffect(() => {
    if (moviesError && "status" in moviesError && moviesError.status === 404) {
      setNoMovies(true);
    } else {
      setNoMovies(false);
    }
  }, [moviesError, activeCityId]);

  const onChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleMovies = () => {
    setIsMovies(true);
    setSearch(""); // Reset search text
  };

  const handleTheaters = () => {
    setIsMovies(false);
    setSearch(""); // Reset search text
  };

  // Safely filter the list based on the search query and selected category (movies or theaters)
  const filteredMovies = (moviesData || []).filter((movie: any) =>
    movie.title?.toLowerCase().includes(search.toLowerCase())
  );

  const filteredTheaters = (theatersResponse.data || []).filter((theater: any) =>
    theater.name?.toLowerCase().includes(search.toLowerCase())
  );

  // Handle click for movie or theater
  const handleClickMovie = (id: string) => {
    navigate(`/movie/${id}`);
  };

  const handleClickTheater = (theater: any) => {
    navigate(`/theater/${theater.id}`, { state: { theater } });
  };

  return (
    <Dialog
      onClose={handleModal}
      open={open}
      fullWidth
      maxWidth={isDesktop ? "lg" : "xs"}
      PaperProps={{
        sx: {
          width: isDesktop ? "50%" : "100%",
          height: isDesktop ? "80%" : "100%",
          maxWidth: "100%",
          maxHeight: "100%",
          margin: 0,
          padding: 0,
          display: "flex",
          flexDirection: "column",
        },
      }}
    >
      <DialogTitle
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          p: 2,
          bgcolor: "#fff",
          borderBottom: "1px solid #ddd",
        }}
      >
        <ArrowBackIcon
          onClick={handleModal}
          sx={{ cursor: "pointer", color: "#48cfad", fontWeight: "bold" }}
        />
        <TextField
          name="search"
          type="search"
          value={search}
          onChange={onChangeSearch}
          placeholder="Search Movies and Theaters"
          fullWidth
          InputProps={{
            onKeyPress: (event) => {
              if (event.key === "Enter") {
                // Optional: Trigger search on Enter key press
              }
            },
            startAdornment: (
              <InputAdornment position="start">
                <SearchRoundedIcon />
              </InputAdornment>
            ),
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#48cfad !important",
              },
              "&:hover fieldset": {
                borderColor: "#48cfad !important",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#48cfad !important",
              },
            },
            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "#48cfad !important",
            },
          }}
        />
      </DialogTitle>
      <DialogContent
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          p: 2,
        }}
      >
        <ButtonGroup aria-label="Basic button group" sx={{ width: "100%", mb: 2 }}>
          <Button
            sx={{
              flex: 1,
              color: isMovies ? "white" : "#48cfad",
              borderColor: "#48cfad",
              backgroundColor: isMovies ? "#48cfad" : "transparent",
              "&:hover": {
                backgroundColor: isMovies ? "#48cfad" : "transparent",
                borderColor: "#48cfad",
              },
            }}
            variant={isMovies ? "contained" : "outlined"}
            onClick={handleMovies}
          >
            Movies
          </Button>
          <Button
            sx={{
              flex: 1,
              color: !isMovies ? "white" : "#48cfad",
              borderColor: "#48cfad",
              backgroundColor: !isMovies ? "#48cfad" : "transparent",
              "&:hover": {
                backgroundColor: !isMovies ? "#48cfad" : "transparent",
                borderColor: "#48cfad",
              },
            }}
            variant={!isMovies ? "contained" : "outlined"}
            onClick={handleTheaters}
          >
            Theaters
          </Button>
        </ButtonGroup>
        <Box
          sx={{
            overflowY: "auto",
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          {moviesLoading && <Typography variant="body1">Loading movies...</Typography>}
          {theatersLoading && <Typography variant="body1">Loading theaters...</Typography>}

          {/* Movies Tab Content */}
          {isMovies && (
            <>
              {noMovies ? (
                <Typography variant="body1">No movies in the list</Typography>
              ) : (
                <>
                  {filteredMovies.length > 0 ? (
                    filteredMovies.map((movie: any) => (
                      <Box
                        key={movie.id}
                        sx={{ display: "flex", gap: 2, cursor: "pointer", alignItems: "center" }}
                        onClick={() => handleClickMovie(movie.id)}
                      >
                        <img
                          src={movie.posterUrl}
                          alt={movie.title}
                          style={{ width: 70, height: 70, objectFit: "contain" }}
                        />
                        <Box>
                          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                            {movie.title}
                          </Typography>
                        </Box>
                      </Box>
                    ))
                  ) : (
                    <ErrorMessage/>
                  )}
                </>
              )}
            </>
          )}

          {/* Theaters Tab Content */}
          {!isMovies && (
            <>
              {filteredTheaters.length > 0 ? (
                filteredTheaters.map((theater: any) => (
                  <Box
                    key={theater.id}
                    sx={{
                      display: "flex",
                      gap: 2,
                      cursor: "pointer",
                      alignItems: "center",
                      borderBottom: "1px solid #ddd",
                      boxShadow: "0 1px 2px rgba(0,0,0,0.1)",
                      paddingBottom: 1,
                    }}
                    onClick={() => handleClickTheater(theater)}
                  >
                    <img
                      src={theater.image || image}
                      alt={theater.name}
                      style={{ width: 110, height: 110, objectFit: "contain",}}
                    />
                    <Box>
                      <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                        {theater.name}
                      </Typography>
                    </Box>
                  </Box>
                ))
              ) : (
                <Typography variant="body1">No theaters match your search</Typography>
              )}
            </>
          )}
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default Search;
