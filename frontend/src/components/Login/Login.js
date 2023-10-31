import React, { useState } from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Box,
  Text,
  VStack,
} from '@chakra-ui/react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь вы можете добавить логику для обработки входа, например, отправить данные на сервер.
  };

  return (
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
          <Button type="submit" colorScheme="blue">
            Войти
          </Button>
        </form>
      </VStack>
    </Box>
  );
}

export default Login;
