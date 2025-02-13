import HomePage from 'pages/HomePage';
import MovieDetails from 'pages/MovieDetails';
import Movies from 'pages/Movies';
import { Routes, Route } from 'react-router-dom';
export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
      </Routes>
    </div>
  );
};
// const API_KEY = '';