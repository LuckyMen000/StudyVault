import { useState } from 'react';
import {
  Box,
  Button,
  Flex,
  Text,
  Image,
} from '@chakra-ui/react';

const SliderComponent = () => {
  const cards = [
    {
      id: 1,
      imageSrc: 'https://via.placeholder.com/150',
      title: 'Карточка 1',
      description: 'Описание для карточки 1',
    },
    {
      id: 2,
      imageSrc: 'https://via.placeholder.com/150',
      title: 'Карточка 2',
      description: 'Описание для карточки 2',
    },
    {
      id: 3,
      imageSrc: 'https://via.placeholder.com/150',
      title: 'Карточка 3',
      description: 'Описание для карточки 3',
    },
    {
      id: 4,
      imageSrc: 'https://via.placeholder.com/150',
      title: 'Карточка 4',
      description: 'Описание для карточки 4',
    },
  ];

  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const handleNext = () => {
    setCurrentCardIndex((prevIndex) =>
      prevIndex === cards.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentCardIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  return (
    <Box>
      <Flex justify="space-between" align="center">
        {cards.map((card, index) => (
          <Box key={card.id} borderWidth="1px" p={4} flex="0 0 30%">
            <Image
              src={card.imageSrc}
              alt={card.title}
              boxSize="150px"
              mx="auto"
            />
            <Text fontSize="xl" fontWeight="bold" mt={2} textAlign="center">
              {card.title}
            </Text>
            <Text textAlign="center">{card.description}</Text>
          </Box>
        ))}
      </Flex>
      <Flex justify="center" mt={4}>
        <Button onClick={handlePrev} mr={2}>
          Назад
        </Button>
        <Button onClick={handleNext}>
          Вперед
        </Button>
      </Flex>
    </Box>
  );
};

export default SliderComponent;
