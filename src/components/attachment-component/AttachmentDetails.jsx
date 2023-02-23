import React from 'react';
import { partial } from 'filesize';
import './dropFileInput.css';

const AttachmentDetails = ({ file }) => {
  const actualSize = partial({ base: 2, standard: 'jedec' });
  return (
    <>
      {file ? (
        <>
          <div className='file-metadata'>Name: {file.name}</div>
          <div className='file-metadata'>Type: {file.type}</div>
          <div className='file-metadata'>Size: {actualSize(file.size)}</div>
        </>
      ) : null}
    </>
  );
};

export default AttachmentDetails;
