// import React from 'react'
import { orders } from '../../Data/dataCafe';
import CafeCard from './CafeCard';
import Pagination from '../../Components/Pagination';

import { useQuery } from 'react-query';

// import { graphQLClient } from '../graphql-client';
import { GET_CAFES, GET_CAFES_BY_ID } from '../../queries/cafe';
import { useContext, useMemo, useState } from 'react';
import { AuthContext } from '../../context/auth';

import { createGraphQLClient } from '../../apis/graphql-client';

const fetchCafes = async (client, limit, start) => {
  try {
    const data = await client.request(GET_CAFES, { limit, start});
    return data.cafes.data.map(cafe => ({
      id: cafe.id,
      ...cafe.attributes,
    }));
  } catch (error) {
    console.error('Error fetching cafes:', error);
    throw error;
  }
};


const fetchCafeById = async (client, id) => {
  try {
    const variables = { id };
    const data = await client.request(GET_CAFES_BY_ID, variables);
    return data;
  } catch (error) {
    console.error('Error fetching cafe:', error);
    throw error;
  }
};



function Cafes() {

  const { token } = useContext(AuthContext);
  const client = useMemo(() => createGraphQLClient(token), [token]);

  const [page, setPage] = useState(1);
  const pageSize = 10;
  const start = (page - 1) * pageSize;



  const { data: cafes, error, isLoading } = useQuery(
    ['cafes', token], 
    () => fetchCafes(client, pageSize, start), 
    {
      enabled: !!token,
      staleTime: 2000,
      cacheTime: 2000,
    }
  );

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!cafes) return <p>No cafes available</p>;


  return (
    <>
      <ul role="list" className="grid grid-cols-1 gap-6 mb-5">
        {cafes.map((cafe, index) => <CafeCard details={cafe} key={`cafe_order_item_${cafe}${index}`} />)}
      </ul>    
      <Pagination />
    </>
  )
}

export default Cafes