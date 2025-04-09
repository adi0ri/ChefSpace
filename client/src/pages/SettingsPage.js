import React from 'react';

function SettingsPage() {
  return (
    <div>
      <h1>Account Settings</h1>
      {/* Form for updating user preferences */}
      <form>
        <label>Dietary Preferences:</label>
        <select name="diet">
          <option value="none">None</option>
          <option value="vegetarian">Vegetarian</option>
          <option value="vegan">Vegan</option>
        </select>

        <label>Favorite Cuisine:</label>
        <input type="text" name="cuisine" />

        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}

export default SettingsPage;
