import Movie from '../Movie/Movie.jsx';
import styles from './Movies.module.css';

const Movies = ({ movies }) => {
  return (
    <ul className={styles.movies}>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Movie
            poster={movie.poster}
            title={movie.title}
            genre={movie.genre}
            release_year={movie.release_year}
            description={movie.description}>
            {movie.id}
          </Movie>
        </li>
      ))}
    </ul>
  );
};

export default Movies;
