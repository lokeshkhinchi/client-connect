import React from 'react'
import { ButtonText } from './StyledComponents';

function CafeDetailHeader() {
  return (
    <div className="flex justify-between items-center mb-4">
      <div className="flex-1">
        <h1 className="text-2xl font-semibold">Cafe Name</h1>
        <p className="text-gray-600"><ButtonText type="button">Address, Onboarding Date</ButtonText></p>
      </div>
      <div className="text-right flex-1">
        <p>Lokesh Khinchi</p>
        <p className="font-semibold">+91-9999999999</p>
      </div>
    </div>
  )
}

export default CafeDetailHeader