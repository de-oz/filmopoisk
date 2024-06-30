import { useGetMoviesQuery } from '../../api/api';
import { useState } from 'react';
import Movies from '../../components/Movies/Movies';
import FilterPanel from '../../components/FilterPanel/FilterPanel';
import styles from './Home.module.css';
import Search from '../../components/Search/Search';
import useDebounce from '../../hooks/useDebounce';
import Pagination from '../../components/Pagination/Pagination';

const Home = () => {
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const debouncedSearchQuery = useDebounce(searchQuery, 500);
  const { data, isLoading, isFetching } = useGetMoviesQuery({ page, title: debouncedSearchQuery });

  const handleSearchQuery = (query) => {
    setSearchQuery(query);
    setPage(1);
  };

  return (
    <div className={styles.home}>
      <FilterPanel />
      <div className={styles.container}>
        <Search
          query={searchQuery}
          onQueryChange={handleSearchQuery}
        />
        {isLoading ? (
          'LOADING...'
        ) : isFetching ? (
          'FETCHING DATA...'
        ) : (
          <>
            <Movies movies={data.search_result} />
            <Pagination
              page={page}
              totalPages={data.total_pages}
              onLeftClick={() => setPage((prev) => prev - 1)}
              onRightClick={() => setPage((prev) => prev + 1)}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
