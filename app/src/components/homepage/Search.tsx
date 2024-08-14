import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import InputAdornment from "@mui/material/InputAdornment";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import DialogContent from "@mui/material/DialogContent";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useMediaQuery } from "@mui/material";
import { moviesData } from '../../data/moviespage/movieslist';
import { theaters } from '../../data/dummyData';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

interface ModalProps {
  open: boolean;
  handleModal: () => void;
}

const Search = ({ open, handleModal }: ModalProps) => {
  const [search, setSearch] = useState<string>("");
  const [isMovies, setIsMovies] = useState<boolean>(true);

  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const navigate = useNavigate(); // Initialize useNavigate

  const onChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleSearch = () => {
    // dispatch(searchThunk();
  };

  const handleMovies = () => {
    setIsMovies(true);
  };

  const handleTheaters = () => {
    setIsMovies(false);
  };

  // Filter the list based on the search query and selected category (movies or theaters)
  const filteredMovies = moviesData.filter(movie =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  const filteredTheaters = theaters.filter(theater =>
    theater.name.toLowerCase().includes(search.toLowerCase())
  );

  // Handle click for movie or theater
  const handleClickMovie = (id: string) => {
    navigate(`/movie/${id}`); // Navigate to movie/:id
  };

  const handleClickTheater = (id: number) => {
    navigate(`/theater/${id.toString()}`); // Convert id to string before navigating
  };

  return (
    <Dialog
      onClose={handleModal}
      open={open}
      fullWidth
      maxWidth={isDesktop ? "lg" : "xs"} // Increase width in desktop view
      PaperProps={{
        sx: {
          width: isDesktop ? '50%' : '100%', // Adjust width for desktop
          height: isDesktop ? '80%' : '100%', // Adjust height for desktop
          maxWidth: '100%',
          maxHeight: '100%',
          margin: 0,
          padding: 0,
          display: 'flex',
          flexDirection: 'column',
        },
      }}
    >
      <DialogTitle
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          p: 2,
          bgcolor: '#fff',
          borderBottom: '1px solid #ddd',
        }}
      >
        <ArrowBackIcon
          onClick={handleModal}
          sx={{ cursor: 'pointer', color: '#48cfad', fontWeight: 'bold' }}
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
                handleSearch();
              }
            },
            startAdornment: (
              <InputAdornment position="start">
                <SearchRoundedIcon />
              </InputAdornment>
            ),
          }}
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#48cfad !important', // Default border color
              },
              '&:hover fieldset': {
                borderColor: '#48cfad !important', // Border color on hover
              },
              '&.Mui-focused fieldset': {
                borderColor: '#48cfad !important', // Border color when focused
              },
            },
            '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#48cfad !important', // Ensure teal border when focused
            },
          }}
        />
      </DialogTitle>
      <DialogContent
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          p: 2,
        }}
      >
        <ButtonGroup aria-label="Basic button group" sx={{ width: '100%', mb: 2 }}>
          <Button
            sx={{
              flex: 1,
              color: isMovies ? 'white' : '#48cfad',
              borderColor: '#48cfad',
              backgroundColor: isMovies ? '#48cfad' : 'transparent',
              '&:hover': {
                backgroundColor: isMovies ? '#48cfad' : 'transparent', // Maintain color consistency on hover
                borderColor: '#48cfad',
              },
            }}
            variant={isMovies ? 'contained' : 'outlined'}
            onClick={handleMovies}
          >
            Movies
          </Button>
          <Button
            sx={{
              flex: 1,
              color: !isMovies ? 'white' : '#48cfad',
              borderColor: '#48cfad',
              backgroundColor: !isMovies ? '#48cfad' : 'transparent',
              '&:hover': {
                backgroundColor: !isMovies ? '#48cfad' : 'transparent', // Maintain color consistency on hover
                borderColor: '#48cfad',
              },
            }}
            variant={!isMovies ? 'contained' : 'outlined'}
            onClick={handleTheaters}
          >
            Theaters
          </Button>
        </ButtonGroup>
        <Box
          sx={{
            overflowY: 'auto',
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}
        >
          {isMovies
            ? filteredMovies.map((movie) => (
                <Box
                  key={movie.id}
                  sx={{ display: 'flex', gap: 2, cursor: 'pointer', alignItems: 'center' }}
                  onClick={() => handleClickMovie(movie.id)} // Handle movie click
                >
                  <img
                    src={movie.image}
                    alt={movie.title}
                    style={{ width: 70, height: 70, objectFit: 'contain' }}
                  />
                  <Box>
                    <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                      {movie.title}
                    </Typography>
                  </Box>
                </Box>
              ))
            : filteredTheaters.map((theater) => (
                <Box
                  key={theater.id}
                  sx={{ display: 'flex', gap: 2, cursor: 'pointer', alignItems: 'center' }}
                  onClick={() => handleClickTheater(theater.id)} // Handle theater click
                >
                  <img
                    src={theater.image}
                    alt={theater.name}
                    style={{ width: 70, height: 70, objectFit: 'contain' }}
                  />
                  <Box>
                    <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                      {theater.name}
                    </Typography>
                  </Box>
                </Box>
              ))}
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default Search;
