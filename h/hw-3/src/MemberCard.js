import React from 'react';

// We destructure name, role, photo, and bio from props
const MemberCard = ({ name, role, photo, bio }) => {
  return (
    <div style={cardStyle}>
      <img src={photo} alt={name} style={imageStyle} />
      <h2 style={{ color: '#2c3e50' }}>{name}</h2>
      <h4 style={{ color: '#3498db' }}>{role}</h4>
      <p style={{ fontSize: '14px', color: '#7f8c8d' }}>{bio}</p>
    </div>
  );
};

// Basic Styling
const cardStyle = {
  border: '1px solid #ddd',
  borderRadius: '8px',
  padding: '16px',
  margin: '10px',
  width: '250px',
  textAlign: 'center',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  backgroundColor: '#fff'
};

const imageStyle = {
  width: '100px',
  height: '100px',
  borderRadius: '50%',
  objectFit: 'cover'
};

export default MemberCard;