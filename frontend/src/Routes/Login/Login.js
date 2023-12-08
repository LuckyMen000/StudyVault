import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Box,
  Text,
  VStack,
  Center,
  HStack,
} from '@chakra-ui/react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

function Login() {
  const [Login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Добавьте здесь логику входа
  };

  return (
    <Center minH="100vh">
      <Box
        background="gray.300"
        p="8"
        boxShadow="lg"
        borderRadius="md"
        w="400px"
      >
        <VStack spacing="4">
          <Text fontSize="xl">Вход в систему</Text>
          <form onSubmit={handleSubmit}>
            <FormControl>
              <FormLabel>Login</FormLabel>
              <Input
                type="Login"
                value={Login}
                onChange={(e) => setLogin(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Пароль</FormLabel>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            <Button type="submit" colorScheme="blue" marginTop="15px">
              Войти
            </Button>
            <Text marginTop="15px">
              <p>If you don't have an account yet,</p>
              <Link textDecoration="underline" to="/register">register now!</Link>
            </Text>
            <Text fontSize="md">Или войдите через:</Text>
            <HStack spacing="4">
              <FaGithub
                style={{
                  fontSize: '24px',
                  cursor: 'pointer',
                  marginTop: '10px',
                }}
              />
              <FaGoogle
                style={{
                  fontSize: '24px',
                  cursor: 'pointer',
                  marginTop: '10px',
                }}
              />
            </HStack>
          </form>
        </VStack>
      </Box>
    </Center>
  );
}

export default Login;
