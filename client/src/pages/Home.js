import React from 'react';
import { useQuery } from '@apollo/client';

import SeekerList from '../components/SeekerList';

import { QUERY_SEEKERS } from '../utils/queries';

const Home = () => {
 
    const { loading, data } = useQuery(QUERY_SEEKERS);
    const seekers = data?.seekers || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div className="col-12 col-md-10 my-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <SeekerList
              seekers={seekers}
              title="Here's the current list of seekers..."
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
