import React from 'react'

function CafeDetailContacts({contacts}) {
  return (
    <>
      <h2 className="text-lg font-semibold mb-4 mt-5">Cafe Contacts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {contacts.slice(0, 4).map((contact, index) => (
          <div key={index} className="bg-gray-50 p-2 rounded">
            <p className="text-md font-semibold mb-2">{contact.name} <span className="font-light">({contact.role})</span></p>
            <p className="text-sm">{contact.number}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default CafeDetailContacts