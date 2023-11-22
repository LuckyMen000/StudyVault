import { useState } from 'react';
import {
    Box,
    Button,
    Input,
    FormControl,
    FormLabel,
    Avatar,
    Text,
} from '@chakra-ui/react';

const ProfilePage = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [profileData, setProfileData] = useState({
        username: 'JohnDoe',
        email: 'john.doe@example.com',
        avatar: 'https://via.placeholder.com/150', // Replace with a real avatar URL
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        interests: ['Coding', 'Reading', 'Traveling'],
    });

    const toggleEditing = () => {
        setIsEditing((prevState) => !prevState);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Logic for form submission here
        // Update profileData state with form values
        // Remember to call setIsEditing(false) after updating data
    };

    const handleChange = (e) => {
        // Handle input changes
        // Update corresponding state fields
    };

    return (
        <Box
            width="100%"
            padding="40px"
            textAlign="center"
            fontFamily="Arial, sans-serif"
        >
            <Box
                width={{ base: '100%', md: '80%', lg: '600px' }}
                margin="0 auto"
                padding="20px"
                borderRadius="20px"
                backgroundColor="#f2f7f5"
                boxShadow="0 0 10px rgba(0, 0, 0, 0.1)"
            >
                <Avatar size="xl" src={profileData.avatar} alt="Avatar" mb="20px" />
                <Text fontSize="2xl" fontWeight="bold" mb="20px">
                    {profileData.username}
                </Text>
                <FormControl>
                    {!isEditing ? (
                        <>
                            <FormLabel>
                                <strong>Username:</strong> {profileData.username}
                            </FormLabel>
                            <FormLabel>
                                <strong>Email:</strong> {profileData.email}
                            </FormLabel>
                            <FormLabel>
                                <strong>Bio:</strong> {profileData.bio}
                            </FormLabel>
                            <FormLabel>
                                <strong>Interests:</strong>{' '}
                                {profileData.interests.map((interest, index) => (
                                    <span key={index}>{interest} </span>
                                ))}
                            </FormLabel>
                            <Button onClick={toggleEditing} mb="20px">
                                Edit Profile
                            </Button>
                        </>
                    ) : (
                        <form onSubmit={handleFormSubmit}>
                            <FormControl>
                                <Input
                                    type="text"
                                    name="username"
                                    value={profileData.username}
                                    onChange={handleChange}
                                    placeholder="Username"
                                    mb="10px"
                                />
                                <Input
                                    type="email"
                                    name="email"
                                    value={profileData.email}
                                    onChange={handleChange}
                                    placeholder="Email"
                                    mb="10px"
                                />
                                {/* Add input fields for bio and interests */}
                                <Button type="submit" colorScheme="blue" mr="2">
                                    Save
                                </Button>
                                <Button onClick={toggleEditing}>Cancel</Button>
                            </FormControl>
                        </form>
                    )}
                </FormControl>
            </Box>
        </Box>
    );
};

export default ProfilePage;
