import React from "react";
import {
  ChakraProvider,
  Flex,
  Text,
  Avatar,
  Button,
  Input,
  extendTheme,
  Box
} from "@chakra-ui/react";

const customTheme = extendTheme({
  fonts: {
    body: "Poppins, sans-serif",
    heading: "Poppins, sans-serif",
  },
});

function ProfilePage() {
  return (
      <ChakraProvider theme={customTheme}>
        <Flex
            h="100vh"
            color="white"
            align="center"
            justify="center"
        >
          <Box
              bg="teal.500"
              p={8}
              borderRadius="md"
              boxShadow="md"
              maxW="600px"
              w="100%"
          >
            <Flex
                direction="row"
                align="center"
                justify="center"
            >
              {/* Левая часть (30% экрана) */}
              <Flex direction="column" align="center" justify="center" p={8} flex="1">
                {/* Аватар и статус */}
                <Avatar size="2xl" mb={4} src="avatar.jpg" />
                <Text fontSize="xl" fontWeight="bold" mb={2}>
                  Username
                </Text>
                <Text fontSize="md" mb={4}>
                  Description about myself
                </Text>
              </Flex>

              {/* Правая часть (70% экрана) */}
              <Flex direction="column" align="center" justify="center" p={8} flex="1">
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
                  <Input placeholder="Phone" variant="filled" mb={2} />
                  <Input placeholder="Telegram" variant="filled" mb={2} />
                  <Input placeholder="Email" variant="filled" mb={4} />
                </Flex>
              </Flex>
            </Flex>
          </Box>
        </Flex>
      </ChakraProvider>
  );
}

export default ProfilePage;
