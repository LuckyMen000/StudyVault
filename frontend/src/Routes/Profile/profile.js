import React, { useState } from 'react';
import styled from 'styled-components';

const ProfileContainer = styled.div`
  width: 40%;
  margin: 50px auto;
  padding: 20px;
  border: 2px solid #3498db;
  border-radius: 10px;
  background-color: #ecf0f1;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const ProfileHeader = styled.h2`
  color: #3498db;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  text-transform: uppercase;
`;

const ProfileInfo = styled.p`
  margin: 15px 0;
  font-size: 18px;
  color: #555;

  strong {
    font-weight: bold;
    margin-right: 8px;
    color: #3498db;
  }
`;

const UpdateButton = styled.button`
  padding: 12px;
  cursor: pointer;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 20px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #2980b9;
  }
`;

const ProfilePage = () => {
    const [profileData, setProfileData] = useState({
        username: 'JohnDoe',
        email: 'john.doe@example.com'
    });

    const updateProfile = () => {
        const newProfileData = {
            username: 'NewUsername',
            email: 'new.email@example.com'
        };

        setProfileData(newProfileData);
    };

    return (
        <ProfileContainer>
            <ProfileHeader>Привет, {profileData.username}!</ProfileHeader>
            <ProfileInfo><strong>Имя пользователя:</strong> {profileData.username}</ProfileInfo>
            <ProfileInfo><strong>Email:</strong> {profileData.email}</ProfileInfo>
            <UpdateButton onClick={updateProfile}>Обновить профиль</UpdateButton>
        </ProfileContainer>
    );
};

export default ProfilePage;
