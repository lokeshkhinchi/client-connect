// import React from 'react'
import { orders } from '../../Data/dataCafe';
import CafeCard from './CafeCard';
import Pagination from '../../Components/Pagination';

import { useQuery } from 'react-query';

// import { graphQLClient } from '../graphql-client';
import { GET_CAFES, GET_CAFES_BY_ID } from '../../queries/cafe';
import { getGraphQLClient } from '../../apis/graphql-client';
import { useContext } from 'react';
import { AuthContext } from '../../context/auth';


const fetchCafeById = async (id) => {
  try {
    const variables = { id };
    const data = await getGraphQLClient.request(GET_CAFES_BY_ID, variables);
    return data;
  } catch (error) {
    console.error('Error fetching cafe:', error);
    throw error;
  }
};


const fetchCafes = async () => {
  try {
    const data = await getGraphQLClient.request(GET_CAFES);
    return data;
  } catch (error) {
    console.error('Error fetching cafe:', error);
    throw error;
  }
};


function Cafes() {

  const { token } = useContext(AuthContext);

  const { data, error, isLoading } = useQuery(['cafe', 1], () => fetchCafeById(1), {
    enabled: !!token, // Query will not execute until the token exists
  });

  const { data:cafes, error:cafesError, isLoading:cafesIsLoading } = useQuery(['cafes'], () => fetchCafes(), {
    enabled: !!token, // Query will not execute until the token exists
  });


  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;


  return (
    <>
      <ul role="list" className="grid grid-cols-1 gap-6 mb-5">
        {orders.map((order, index) => <CafeCard key={`cafe_order_item_${order}${index}`} />)}
      </ul>    
      <Pagination />
    </>
  )
}

export default Cafes