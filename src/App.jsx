import Layout from './components/Layout/Layout.jsx';
import { useGetMoviesQuery } from './api/api.js';
import { useState } from 'react';

function App() {
  const [page, setPage] = useState(1);
  const { data, isLoading, isFetching } = useGetMoviesQuery(page);

  return (
    <>
      <Layout>
        <>
          <ul>
            {isLoading
              ? 'LOADING...'
              : isFetching
                ? 'FETCHING DATA...'
                : data.search_result.map((item) => <li key={item.id}>{item.title}</li>)}
          </ul>
          <button
            onClick={() => setPage((prev) => prev - 1)}
            disabled={page === 1}>
            Previous
          </button>
          {page}
          <button
            onClick={() => setPage((prev) => prev + 1)}
            disabled={page === data?.total_pages}>
            Next
          </button>
        </>
      </Layout>
    </>
  );
}

export default App;
