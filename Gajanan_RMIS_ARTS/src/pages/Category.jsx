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
      <div className="search-container" style={{ padding: '20px', backgroundColor: '#f8f9fa' }}>
        <input
          type="text"
          placeholder="Search for Lord..."
          className="form-control"
          style={{ maxWidth: '600px', margin: '0 auto' }}
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