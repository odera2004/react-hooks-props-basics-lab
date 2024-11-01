import React from 'react';

function About({ bio }) {
  return (
    <div>
      <h1>About</h1>
      {bio && <p>{bio}</p>} {/* Conditional rendering for the bio */}
    </div>
  );
}

export default About;
