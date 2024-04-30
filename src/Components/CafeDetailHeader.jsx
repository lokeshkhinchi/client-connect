import React from 'react'
import { ButtonText } from './StyledComponents';

function CafeDetailHeader() {
  return (
    <>
        <h1 className="text-2xl font-semibold">Cafe Name</h1>
        <p className="text-gray-600"><ButtonText type="button">Address, Onboarding Date</ButtonText></p>
    </>
  )
}

export default CafeDetailHeader