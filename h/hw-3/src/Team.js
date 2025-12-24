import React from 'react';
import MemberCard from './MemberCard';

const Team = () => {
  // 1. Our array of member data
  const members = [
    {
      id: 1,
      name: "Tzewo",
      role: "Lead Developer",
      photo: "https://via.placeholder.com/150",
      bio: "Loves React and solving complex hardware problems."
    },
    {
      id: 2,
      name: "Sarah Smith",
      role: "UI/UX Designer",
      photo: "https://via.placeholder.com/150",
      bio: "Passionate about creating clean and user-friendly interfaces."
    },
    {
      id: 3,
      name: "John Doe",
      role: "Product Manager",
      photo: "https://via.placeholder.com/150",
      bio: "Focuses on delivery timelines and team efficiency."
    }
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ textAlign: 'center' }}>Our Team</h1>
      
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {/* 2. Mapping over the array to render multiple cards */}
        {members.map((member) => (
          <MemberCard 
            key={member.id} 
            name={member.name} 
            role={member.role} 
            photo={member.photo} 
            bio={member.bio} 
          />
        ))}
      </div>
    </div>
  );
};

export default Team;