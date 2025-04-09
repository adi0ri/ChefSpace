const { db } = require('../firebaseConfig');

/**
 * Get a user's profile by username
 */
exports.getUserProfile = async (req, res) => {
  const { username } = req.params;

  try {
    const userSnapshot = await db.collection('users').where('username', '==', username).get();
    if (userSnapshot.empty) {
      return res.status(404).json({ error: 'User not found' });
    }

    const userData = userSnapshot.docs[0].data();
    res.status(200).json(userData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/**
 * Create a new user
 */
exports.createUser = async (req, res) => {
  const { username, email, profilePicture } = req.body;

  try {
    // Check if the username already exists
    const existingUserSnapshot = await db.collection('users').where('username', '==', username).get();
    if (!existingUserSnapshot.empty) {
      return res.status(400).json({ error: 'Username already exists' });
    }

    // Create a new user document
    const newUser = {
      username,
      email,
      profilePicture: profilePicture || '',
      createdAt: new Date().toISOString(),
    };

    const userRef = await db.collection('users').add(newUser);
    res.status(201).json({ id: userRef.id, ...newUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/**
 * Update an existing user's profile
 */
exports.updateUser = async (req, res) => {
  const { username } = req.params;
  const updates = req.body;

  try {
    const userSnapshot = await db.collection('users').where('username', '==', username).get();
    if (userSnapshot.empty) {
      return res.status(404).json({ error: 'User not found' });
    }

    const userDocId = userSnapshot.docs[0].id;
    await db.collection('users').doc(userDocId).update(updates);

    res.status(200).json({ message: 'User updated successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
