import React, { useState } from "react";
import {
  ChakraProvider,
  Box,
  Button,
  Input,
  Text,
  VStack,
  Heading,
  extendTheme,
  IconButton,
  Badge,
  Checkbox
} from "@chakra-ui/react";
import { 
  FaThumbsUp, 
  FaThumbsDown 
} from "react-icons/fa";
import Sidebar from '../../Components/Slidebar/slidebar';

const theme = extendTheme({
  components: {
    Heading: {
      baseStyle: {
        marginBottom: "4",
      },
    },
  },
});

function Notes() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [newSubTitle, setNewSubTitle] = useState("");
  const [showConfirmDelete, setShowConfirmDelete] = useState(false); 
  const [deletingIndex, setDeletingIndex] = useState(null); 

  const addNote = () => {
    if (newNote.trim() !== "") {
      setNotes([
        ...notes,
        {
          text: newNote,
          subTitle: newSubTitle,
          likes: 0,
          dislikes: 0,
          completed: false,
        },
      ]);
      setNewNote("");
      setNewSubTitle("");
    }
  };

  const deleteNote = (index) => {
    if (showConfirmDelete && deletingIndex === index) {
      const updatedNotes = [...notes];
      updatedNotes.splice(index, 1);
      setNotes(updatedNotes);
      setShowConfirmDelete(false); 
      setDeletingIndex(null);
    } else {
      setShowConfirmDelete(true);
      setDeletingIndex(index);
    }
  };

  const cancelDelete = () => {
    setShowConfirmDelete(false); 
    setDeletingIndex(null);
  };

  const handleLike = (index) => {
    const updatedNotes = [...notes];
    updatedNotes[index].likes += 1;
    setNotes(updatedNotes);
  };

  const handleDislike = (index) => {
    const updatedNotes = [...notes];
    updatedNotes[index].dislikes += 1;
    setNotes(updatedNotes);
  };

  const handleCheckbox = (index) => {
    const updatedNotes = [...notes];
    updatedNotes[index].completed = !updatedNotes[index].completed;
    setNotes(updatedNotes);
  };

  return (
    <ChakraProvider theme={theme}>
     <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '12px', padding: '5px'}}>
      <Sidebar/>
      <Box textAlign="center" p="10">
        <VStack spacing="4">
          <Heading>Заметки</Heading>
          <Input
            placeholder="Введите заголовок"
            value={newNote}
            onChange={(e) => setNewNote(e.target.value)}
          />
          <Input
            placeholder="Введите подзаголовок"
            value={newSubTitle}
            onChange={(e) => setNewSubTitle(e.target.value)}
          />
          <Button colorScheme="teal" onClick={addNote}>
            Добавить
          </Button>
          {notes.map((note, index) => (
            <Box
              key={index}
              p="4"
              borderWidth="1px"
              borderRadius="md"
              boxShadow="md"
              width="100%"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <VStack align="start">
                <Text fontWeight="bold">{note.text}</Text>
                {note.subTitle && <Text fontStyle="italic">{note.subTitle}</Text>}
                <Checkbox
                  isChecked={note.completed}
                  onChange={() => handleCheckbox(index)}
                >
                  {note.completed ? "Выполнено" : "Не выполнено"}
                </Checkbox>
              </VStack>
              <Box>
                <IconButton
                  icon={<FaThumbsUp />}
                  onClick={() => handleLike(index)}
                  colorScheme="green"
                  mr="2"
                />
                <Badge colorScheme="green">{note.likes}</Badge>
                <IconButton
                  icon={<FaThumbsDown />}
                  onClick={() => handleDislike(index)}
                  colorScheme="red"
                  ml="2"
                />
                <Badge colorScheme="red">{note.dislikes}</Badge>
              </Box>
              <VStack>
                {showConfirmDelete && deletingIndex === index && (
                  <>
                    <Button
                      colorScheme="red"
                      onClick={() => deleteNote(index)}
                      mt="2"
                    >
                      Удалить
                    </Button>
                    <Button colorScheme="blue" onClick={cancelDelete} mt="2">
                      Отмена
                    </Button>
                  </>
                )}
                {!showConfirmDelete && (
                  <Button
                    colorScheme="red"
                    onClick={() => deleteNote(index)}
                    mt="2"
                  >
                    Удалить
                  </Button>
                )}
              </VStack>
            </Box>
          ))}
        </VStack>
      </Box>
      </div>
    </ChakraProvider>
  );
}

export default Notes;