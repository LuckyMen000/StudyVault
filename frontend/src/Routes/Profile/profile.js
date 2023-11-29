import React from "react";
import { ChakraProvider, Flex, Text, Avatar, Badge, Button, CSSReset, extendTheme } from "@chakra-ui/react";
import Gradient from './Gradient.png';
import Ellipse1 from './Ellipse 1.png';

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
          <div className="Ava" style={{ width: 568, height: 268, position: 'relative' }}>
            <div className="Rectangle177" style={{ width: 568, height: 185, left: 0, top: 0, position: 'absolute', background: 'white', borderTopLeftRadius: 19.55, borderTopRightRadius: 19.55, borderBottomRightRadius: 3, borderBottomLeftRadius: 3 }} />
            <div className="Ellipse2" style={{ width: 213, height: 213, left: 178, top: 55, position: 'absolute', background: '#A5A5A5', borderRadius: 9999 }} />
            <img className="Ellipse1" style={{ width: 205, height: 205, left: 182, top: 59, position: 'absolute', borderRadius: 9999 }} src={require('./Ellipse 1.png')} alt="Ellipse 1" />
            <div className="Rectangle172" style={{ width: 97, height: 33, left: 181, top: 230, position: 'absolute', background: '#6EE544', borderRadius: 30 }} />
            <div className="Online" style={{ width: 62, height: 29, left: 205, top: -6, position: 'absolute', color: '#090945', fontSize: 18, fontFamily: 'Poppins', fontWeight: '500', lineHeight: 28, fontStyle: "medium", wordWrap: 'break-word' }}>Online<br /></div>
          </div>

          {/* Другие элементы левой части */}
        </Flex>

        {/* Разделительная вертикальная линия */}
        <div style={{ width: "2px", background: "white", height: "100%" }} />

        {/* Правая часть (70% экрана) */}
        <Flex direction="column" align="center" justify="center" w="70%">
          <Text fontSize="lg" textAlign="center">
            Hi, I'm John Doe, a passionate frontend developer with experience in building web applications.
          </Text>
          <Flex mt={4}>
            <Button colorScheme="teal" mr={2}>
              Follow
            </Button>
            <Button variant="outline" colorScheme="teal">
              Message
            </Button>
          </Flex>
          {/* Другие элементы правой части */}
        </Flex>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
