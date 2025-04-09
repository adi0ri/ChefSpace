import React from 'react';
import { useParams } from 'react-router-dom';

function UserProfilePage() {
  const { username } = useParams(); // Retrieve username from URL
  return (
    <div>
      <h1>{username}'s Profile</h1>
      <p>Recipes created by {username}</p>
      {/* Display user's created and saved recipes */}
    </div>
  );
}

export default UserProfilePage;
