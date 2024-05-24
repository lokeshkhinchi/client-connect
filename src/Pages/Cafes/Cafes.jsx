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
    // api response dekhega toh mile 'data.cafes.data' isko simple rkhne ke liye cafes mein aajaye isliye transform krdiya yahaan
    // just to make it readable -> bigger level data pe optimised solution nhi hai yeh
    return data.cafes.data.map(cafe => ({
      id: cafe.id,
      ...cafe.attributes,
    }));
  } catch (error) {
    console.error('Error fetching cafe:', error);
    throw error;
  }
};


function Cafes() {

  const { token } = useContext(AuthContext);

  // use this type of finding by ID
  // const { data, error, isLoading } = useQuery(['cafe', 1], () => fetchCafeById(1), {
  //   enabled: !!token, // Query will not execute until the token exists
  // });

  // fetch list of all cafes
  const { data:cafes = {}, error, isLoading } = useQuery(['cafes'], () => fetchCafes(), {
    enabled: !!token, // Query will not execute until the token exists
  });


  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;


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