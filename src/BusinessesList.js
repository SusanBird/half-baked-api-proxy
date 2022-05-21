import React from 'react';

export default function BusinessesList({ businesses }) {
  return <div className='business-list'>
    {
      businesses.map(({ id, name, phone, image_url }) =>
        <div key={id}>
          <p>Business: {name}</p>
          <p>Contact: {phone}</p>
          <img src={image_url} height={200} />
        </div>
      )}
  </div>;
}
