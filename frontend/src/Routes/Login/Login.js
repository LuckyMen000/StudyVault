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
      <Box>
        <VStack spacing="4">
          <Text fontSize="xl">Вход в систему</Text>
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
              <p>If you don't have an account yet,</p>
              <Link textDecoration="underline" href="#">register now!</Link>
            </Text>
          </form>
        </VStack>
      </Box>
    </Center>
  );
}

export default Login;
