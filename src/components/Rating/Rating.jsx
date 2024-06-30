import { useState, useEffect } from 'react';
import Star from '../Star/Star.jsx';
import { useRateMovieMutation } from '../../api/api.js';
import styles from './Rating.module.css';

const Rating = ({ movieId, onChange }) => {
  const [hoveredValue, setHoveredValue] = useState(0);
  const [selectedValue, setSelectedValue] = useState(0);
  const [rateMovie] = useRateMovieMutation();

  useEffect(() => {
    const savedRating = localStorage.getItem(`rating-${movieId}`);
    if (savedRating) {
      setSelectedValue(parseInt(savedRating, 10));
    }
  }, [movieId]);

  const handleMouseEnter = (value) => {
    setHoveredValue(value);
  };

  const handleMouseLeave = () => {
    setHoveredValue(0);
  };

  const handleClick = async (value) => {
    setSelectedValue(value);
    localStorage.setItem(`rating-${movieId}`, value);

    try {
      await rateMovie({ id: movieId, rating: value }).unwrap();
    } catch (error) {
      console.error('Failed to rate the movie:', error);
    }

    if (onChange) {
      onChange(value);
    }
  };

  return (
    <div className={styles.rating}>
      {[1, 2, 3, 4, 5].map((value) => (
        <div
          key={value}
          className={styles.starContainer}
          onMouseEnter={() => handleMouseEnter(value)}
          onMouseLeave={handleMouseLeave}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            handleClick(value);
          }}>
          <Star filled={value <= (hoveredValue || selectedValue)} />
          <span className={styles.starNumber}>{value}</span>
        </div>
      ))}
    </div>
  );
};

export default Rating;
