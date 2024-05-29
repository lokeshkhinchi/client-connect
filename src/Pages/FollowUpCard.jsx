import React from 'react';
import { ButtonText } from '../Components/StyledComponents';
import { Link } from 'react-router-dom';

const FollowUpCard = ({ followUp, handleOpenModal, openMapUrl }) => {
  const { name, location, photo, people } = followUp.cafe.data.attributes;
  const { data: { attributes: { url } } } = photo;
  


  return (
    <li className="relative flex gap-x-4 justify-between gap-x-3 py-3">
      <img className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300" src={url} alt="Logo" />
      <div className="min-w-0 flex-auto">
        <p className="text-sm font-semibold leading-6 text-gray-900">
          <Link to={`/admin/cafe/${followUp.cafe.data.id}`}>
            {name}
          </Link>
        </p>
        <p className="text-sm leading-6 text-gray-900">{people[0].name} ({people[0].Role})</p>
      </div>
      <div className="flex shrink-0 flex-col items-end">
        <p className="mt-1 flex text-xs leading-5 text-gray-500">
          {new Date(followUp.nextVisit).toLocaleString()} : {followUp.status}
        </p>
        <ButtonText type="button" onClick={handleOpenModal}>Action</ButtonText>
        <ButtonText onClick={openMapUrl}>Open Map</ButtonText>
      </div>
    </li>
  );
};

export default FollowUpCard;
