import React from 'react';

function PersonProfile({ fullName, bio, imgSrc, profession, shows }) {
  return (
    <div style={{marginLeft:'20px',}}>
      {shows && (
        <div>
        <h2 style={{ marginBottom: '10px', color: '#333' }}>{fullName}</h2>
        <img src={imgSrc} alt="Profile" style={{ maxWidth: '100%', height: 'auto', borderRadius: '4px', marginBottom: '10px' }} />
        <p style={{ marginBottom: '10px', color: '#666' }}>{bio}</p>
        <p style={{ fontStyle: 'italic', color: '#888' }}>Profession: {profession}</p>
      </div>
      )}
    </div>
  );
}

export default PersonProfile;