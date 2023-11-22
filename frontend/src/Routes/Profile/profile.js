import React, { useState } from 'react';
import styled from 'styled-components';

const ProfileContainer = styled.div`
  width: 80%;
  max-width: 600px;
  margin: 50px auto;
  padding: 40px;
  border-radius: 20px;
  background-color: #f2f7f5; /* Зеленый фон */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  font-family: Arial, sans-serif;
`;

const ProfileHeader = styled.h2`
  color: #262626;
  text-transform: uppercase;
  margin-bottom: 20px;
`;

const Avatar = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 20px;
`;

const ProfileInfo = styled.p`
  margin: 10px 0;
  font-size: 16px;
  color: #262626;

  strong {
    font-weight: bold;
    margin-right: 6px;
    color: #262626;
  }
`;

const UpdateButton = styled.button`
  padding: 10px 20px;
  cursor: pointer;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #2980b9;
  }
`;

const EditProfileForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;

  input,
  button {
    margin-bottom: 10px;
  }

  input[type='text'],
  input[type='email'] {
    padding: 8px;
    border-radius: 4px;
    border: 1px solid #ccc;
    width: 70%;
    max-width: 300px;
    font-size: 16px;
  }

  button[type='submit'] {
    padding: 8px 16px;
    background-color: #3498db;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
    font-size: 16px;

    &:hover {
      background-color: #2980b9;
    }
  }
`;

const ProfilePage = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [profileData, setProfileData] = useState({
        username: 'JohnDoe',
        email: 'john.doe@example.com',
        avatar: 'https://via.placeholder.com/150', // Замените на реальный URL аватарки
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        interests: ['Coding', 'Reading', 'Traveling'],
    });

    const toggleEditing = () => {
        setIsEditing((prevState) => !prevState);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Логика обработки формы здесь
        // Например, обновление состояния profileData с значениями из формы
        // Помните вызвать setIsEditing(false) после обновления данных
    };

    const handleChange = (e) => {
        // Обработка изменений ввода в форме
        // Обновление соответствующих полей состояния
    };

    return (
        <ProfileContainer>
            <Avatar src={profileData.avatar} alt="Avatar" />
            <ProfileHeader>{profileData.username}</ProfileHeader>
            <ProfileInfo>
                <strong>Username:</strong> {profileData.username}
            </ProfileInfo>
            <ProfileInfo>
                <strong>Email:</strong> {profileData.email}
            </ProfileInfo>
            {!isEditing ? (
                <>
                    <ProfileInfo>
                        <strong>Bio:</strong> {profileData.bio}
                    </ProfileInfo>
                    <ProfileInfo>
                        <strong>Interests:</strong>{' '}
                        {profileData.interests.map((interest, index) => (
                            <span key={index}>{interest} </span>
                        ))}
                    </ProfileInfo>
                    <UpdateButton onClick={toggleEditing}>Edit Profile</UpdateButton>
                </>
            ) : (
                <EditProfileForm onSubmit={handleFormSubmit}>
                    <input
                        type="text"
                        name="username"
                        value={profileData.username}
                        onChange={handleChange}
                        placeholder="Username"
                    />
                    <input
                        type="email"
                        name="email"
                        value={profileData.email}
                        onChange={handleChange}
                        placeholder="Email"
                    />
                    {/* Добавьте поля ввода для bio и interests */}
                    <button type="submit">Save</button>
                    <UpdateButton onClick={toggleEditing}>Cancel</UpdateButton>
                </EditProfileForm>
            )}
        </ProfileContainer>
    );
};

export default ProfilePage;
