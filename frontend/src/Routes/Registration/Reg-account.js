import React, { useState } from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Box,
  Text,
  VStack,
  Center,
  Link,
} from '@chakra-ui/react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
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
          <Text fontSize="xl">Регистрация</Text>
          <form onSubmit={handleSubmit}>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
              <p>If you alredy have account,</p>
              <Link textDecoration="underline" to="/login">
                login now!
              </Link>
            </Text>
          </form>
        </VStack>
      </Box>
    </Center>
  );
}

export default Login;
