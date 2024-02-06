import React, { useState } from 'react';
import { 
  Link as ChakraLink,
  useNavigate
} from 'react-router-dom';
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Box,
  Text,
  VStack,
  Center,
} from '@chakra-ui/react';

function Register() {
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  const registerUser = async (userData) => {
    try {
      const response = await fetch('http://localhost:5000/api/registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Указываем тип содержимого как JSON
        },
        body: JSON.stringify(userData), // Передаем данные пользователя в формате JSON
      });

      const data = await response.json(); // Получаем JSON данные из ответа
      console.log(data); // Можно обработать ответ сервера здесь
      if (response.ok){
        navigate('/main')
      }

    } catch (error) {
      console.error('Ошибка:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = { login, email, password }; // Собираем данные для отправки
    await registerUser(userData); // Вызываем функцию для регистрации пользователя
  };

  return (
      <Center minH="100vh" bgGradient='linear(to-l, #7928CA, #C71585)'>
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
                <FormLabel>Login</FormLabel>
                <Input
                    type="text"
                    value={login}
                    onChange={(e) => setLogin(e.target.value)}
                />
              </FormControl>
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
                Зарегистрироваться
              </Button>
              <Text marginTop="15px">
                <p>If you already have an account,</p>
                <ChakraLink textDecoration="underline" to="/login">Login now!</ChakraLink>
              </Text>
            </form>
          </VStack>
        </Box>
      </Center>
  );
}

export default Register;