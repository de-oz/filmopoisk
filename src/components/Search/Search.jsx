import styles from './Search.module.css';
import searchIcon from '../../assets/icons/search.svg';
import clearIcon from '../../assets/icons/clear.svg';

const Search = ({ query, onQueryChange }) => {
  return (
    <div className={styles.container}>
      <img
        src={searchIcon}
        alt="Search Icon"
        className={styles.searchIcon}
      />
      <input
        className={styles.input}
        type="text"
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
        placeholder="Название фильма"
      />
      {query !== '' && (
        <button
          type="button"
          onClick={() => onQueryChange('')}
          className={styles.clearIcon}>
          <img
            src={clearIcon}
            alt="Clear Icon"
          />
        </button>
      )}
    </div>
  );
};

export default Search;
