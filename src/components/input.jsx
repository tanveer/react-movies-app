import React from 'react';

const Input = ({ handleFetchRequest }) => {
  return (
    <div className="form-inline m-auto">
      <input
        onChange={(e) => handleFetchRequest(e)}
        className="form-control"
        placeholder="Search"
        style={{ width: '25rem' }}
      />
    </div>
  );
}

export default Input;