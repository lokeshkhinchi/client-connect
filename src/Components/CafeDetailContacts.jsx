import React from 'react'

function CafeDetailContacts({contacts}) {
  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h2 className="text-lg font-semibold mb-4">Cafe Contacts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {contacts.slice(0, 4).map((contact, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded">
            <p className="text-md font-semibold mb-2">{contact.name}</p>
            <p className="text-sm mb-2">{contact.role}</p>
            <p className="text-sm">{contact.number}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CafeDetailContacts