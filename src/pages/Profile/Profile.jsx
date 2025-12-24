import React, { useState } from "react";
import profile_icon from "../../assets/tarik.jpg";
import "./Profile.css";

const Profile = ({ user, setUser }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({ ...user });

  const handleSave = () => {
    setUser(editedUser);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedUser({ ...user });
    setIsEditing(false);
  };

  return (
    <div className="profile-page">
      <h1>Profile</h1>
      <img className="user-icon" src={profile_icon} alt="" />
      <div className="profile-info">
        <div className="info-item">
          <label>First Name:</label>
          {isEditing ? (
            <input
              type="text"
              value={editedUser.firstName}
              onChange={(e) =>
                setEditedUser({ ...editedUser, firstName: e.target.value })
              }
            />
          ) : (
            <span>{user.firstName}</span>
          )}
        </div>
        <div className="info-item">
          <label>Last Name:</label>
          {isEditing ? (
            <input
              type="text"
              value={editedUser.lastName}
              onChange={(e) =>
                setEditedUser({ ...editedUser, lastName: e.target.value })
              }
            />
          ) : (
            <span>{user.lastName}</span>
          )}
        </div>
        <div className="info-item">
          <label>Username:</label>
          {isEditing ? (
            <input
              type="text"
              value={editedUser.username}
              onChange={(e) =>
                setEditedUser({ ...editedUser, username: e.target.value })
              }
            />
          ) : (
            <span>{user.username}</span>
          )}
        </div>
      </div>
      <div className="profile-actions">
        {isEditing ? (
          <div>
            <button onClick={handleSave}>Save</button>
            <button onClick={handleCancel}>Cancel</button>
          </div>
        ) : (
          <button onClick={() => setIsEditing(true)}>Edit</button>
        )}
      </div>
    </div>
  );
};

export default Profile;
