import React, { useState } from 'react'
import Lord_Ganesh from '../components/Lord_Ganesh'
import Lord_Shiva from '../components/Lord_Shiva'
import Lord_Kanha from '../components/Lord_Kanha'

const Category = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const shouldShowComponent = (name) => {
    if (!searchTerm) return true;
    return name.toLowerCase().includes(searchTerm.toLowerCase());
  };

  return (
    <>
      <div className="p-4 bg-light">
        <input
          type="text"
          placeholder="Search for Lord..."
          className="form-control mx-auto"
          style={{ maxWidth: '600px' }}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {shouldShowComponent('ganesh') && <Lord_Ganesh />}
      {shouldShowComponent('shiva') && <Lord_Shiva />}
      {shouldShowComponent('kanha') && <Lord_Kanha />}
    </>
  )
}

export default Category