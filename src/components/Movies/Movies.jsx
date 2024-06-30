import { Link } from 'react-router-dom';
import Movie from '../Movie/Movie.jsx';
import styles from './Movies.module.css';

const Movies = ({ movies }) => {
  return (
    <ul className={styles.movies}>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link to={`/movie/${movie.id}`}>
            <Movie
              id={movie.id}
              poster={movie.poster}
              title={movie.title}
              genre={movie.genre}
              release_year={movie.release_year}
              description={movie.description}>
              {movie.id}
            </Movie>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Movies;
