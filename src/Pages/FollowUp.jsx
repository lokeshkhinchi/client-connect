import React, { useContext, useMemo, useState } from 'react';
import Pagination from '../Components/Pagination';
import Modal from '../Components/Modal';
import FollowUpForm from '../Components/FollowUpForm';
import { GET_FOLLOWUPS, GET_FOLLOWUPS_BY_ID } from '../queries/followUps';
import { AuthContext } from '../context/auth';
import { createGraphQLClient } from '../apis/graphql-client';
import { useQuery } from 'react-query';
import FollowUpCard from './FollowUpCard';

const fetchFollowUpById = async (client, id) => {
  try {
    const data = await client.request(GET_FOLLOWUPS_BY_ID,{id });
    console.log(data.followUp.data.attributes);
    return data.followUp;
  } catch (error) {
    console.error('Error fetching follow-ups:', error);
    throw error;
  }
};


const fetchFollowUps = async (client, limit, start) => {
  try {
    const data = await client.request(GET_FOLLOWUPS,{limit, start });
    return data.followUps.data.map((followUp) => ({
      id: followUp.id,
      ...followUp.attributes,
    }));
  } catch (error) {
    console.error('Error fetching follow-ups:', error);
    throw error;
  }
};

const FollowUp = () => {
  const { token } = useContext(AuthContext);
  const client = useMemo(() => createGraphQLClient(token), [token]);

  const [page, setPage] = useState(1);
  const pageSize = 10;
  const start = (page - 1) * pageSize;


  // fetch followUp By ID i.e followUPID : 2 
  const { data: followUp, error: errorFollowUp, isLoading: isLoadingFollowUP } = useQuery(
    ['followUpById', token],
    () => fetchFollowUpById(client, 2),
    {
      enabled: !!token,
      staleTime: 2000,
      cacheTime: 2000,
    }
  );
/// end here

  const { data: followUps, error, isLoading } = useQuery(
    ['followUps', token],
    () => fetchFollowUps(client, pageSize, start),
    {
      enabled: !!token,
      staleTime: 2000,
      cacheTime: 2000,
    }
  );


  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => setIsOpen(true);
  const handleCloseModal = () => setIsOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
    setIsOpen(false);
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!followUps || followUps.length === 0) return <p>No follow-ups available</p>;

  return (
    <>
      <ul role="list" className="divide-y divide-gray-100">
        {followUps.map((followUp, index) => (
          <FollowUpCard
            key={`followup_list_item_${index}`}
            followUp={followUp}
            handleOpenModal={handleOpenModal}
            openMapUrl={() => {
              const { location } = followUp.cafe.data.attributes;
              window.open(`https://www.google.com/maps?q=${location.latitude},${location.longitude}&z=14`, '_blank');
            }}
          />
        ))}
      </ul>
      <Pagination />
      <Modal isOpen={isOpen} onClose={handleCloseModal} title="Follow Up Action" onSubmit={handleSubmit}>
        <FollowUpForm />
      </Modal>
    </>
  );
};

export default FollowUp;
