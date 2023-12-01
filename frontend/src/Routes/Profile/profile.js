import React from "react";
import { ChakraProvider, Flex, Text, Avatar, Badge, Button, Box, CSSReset, extendTheme } from "@chakra-ui/react";
import Gradient from './Gradient.png';
// import Ellipse1 from './Ellipse 1.png'; // закомментировали, так как не используется 
// import { Avatar, Badge } from "@chakra-ui/react"; // закомментировали, так как не используется


import { Input } from "@chakra-ui/react";

// ... (ваш остальной код)


const customTheme = extendTheme({
  fonts: {
    body: "Poppins, sans-serif",
    heading: "Poppins, sans-serif",
  },
});

function App() {
  const backgroundImage = `url(${Gradient})`;

  return (
    <ChakraProvider theme={customTheme}>
      <CSSReset />
      <Flex
        h="100vh"
        bgImage={backgroundImage}
        bgSize="cover"
        bgPosition="center"
        color="white"
      >
        {/* Левая часть (30% экрана) */}
        <Flex direction="column" align="center" justify="flex-start" w="30%" p={8}>
          {/* Шапка профиля */}
          <Box className="Ava" w="100%" p={4} position="relative">
            <div className="Rectangle177" style={{ width: "100%", height: 185, background: 'white', borderTopLeftRadius: 19.55, borderTopRightRadius: 19.55, borderBottomRightRadius: 3, borderBottomLeftRadius: 3 }} />
            <div className="Ellipse2" style={{ width: 213, height: 213, background: '#A5A5A5', borderRadius: 9999, position: 'absolute', top: '55px', left: '50%', transform: 'translateX(-50%)' }} />
            <img className="Ellipse1" style={{ width: 205, height: 205, borderRadius: 9999, position: 'absolute', top: '59px', left: '50%', transform: 'translateX(-50%)' }} src={require('./Ellipse 1.png')} alt="Ellipse 1" />
            <div className="Rectangle172" style={{ width: 97, height: 33, background: '#6EE544', borderRadius: 30, position: 'absolute', top: '235px', left: '38%', transform: 'translateX(-50%)' }} />
            <div className="Online" style={{ width: 62, height: 29, color: '#090945', fontSize: 18, fontWeight: '550', lineHeight: '29px', position: 'absolute', top: '238px', left: '39%', transform: 'translateX(-50%)' }}>Online<br /></div>
          </Box>

          {/* Мини-био */}
          <Box
            className="MiniBio"
            w="100%"
            p={4}
            borderRadius="23px"
            mt={4}
            bg="white"
            boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
            position="relative"
            top="80px"
          >
            <Text
              className="Rasul"
              fontSize="32px"
              color="#070721"
              fontWeight="700"
              lineHeight="40px"
            >
              Rasul
            </Text>
            <Text
              className="LoremIpsum"
              fontSize="24px"
              color="#090945"
              fontWeight="400"
              lineHeight="27px"
              letterSpacing="1px"
              textAlign="center"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a eleifend purus. Pellentesque aliquam lorem augue, quis volutpat mauris egestas sed. Phasellus orci magna, bibendum ac eros ut, pellentesque vestibulum lacus. Donec ut varius lacus. Pellentesque eget nunc dui. Morbi ornare libero est, sed aliquam quam iaculis sed. Donec semper egestas imperdiet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
            </Text>
          </Box>
        </Flex>

        {/* Разделительная вертикальная линия */}
        <div className="Separator" style={{ width: "16px",height:"1000px" , background: "#84B598", boxSizing: "border-box", boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }} />

        {/* Правая часть (70% экрана) */}
        <Flex direction="column" align="center" justify="center" w="70%" p={8}>
          {/* Заголовок */}
          <Text fontSize="xl" fontWeight="bold" mb={4}>
            About Me
          </Text>


          {/* Кнопки и поля ввода */}
          <Flex mb={4} direction="column" align="center">
            <Button colorScheme="teal" mb={2}>
              Follow
            </Button>
            <Button variant="outline" colorScheme="teal" mb={4}>
              Message
            </Button>

            {/* Поля ввода */}
            <Input placeholder="Phone" variant="filled" mb={2} />
            <Input placeholder="Telegram" variant="filled" mb={2} />
            <Input placeholder="Email" variant="filled" mb={4} />
          </Flex>

          {/* Другие элементы правой части */}
        </Flex>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
