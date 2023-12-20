import React, { useState } from 'react';
import {
  ChakraProvider,
  Box,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Input,
  FormControl,
  FormLabel,
} from '@chakra-ui/react';
import Filter from '../../Components/Filter/filter';
import TableCustom from '../../Components/Table/TableComponent';


const DocumentPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [documents, setDocuments] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');
  const [documentName, setDocumentName] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const addDocument = () => {
    if (selectedDate && documentName && selectedFile) {
      const newDocument = {
        date: selectedDate,
        name: documentName,
        file: selectedFile,
      };
      setDocuments((prevDocuments) => [...prevDocuments, newDocument]);
      setSelectedDate('');
      setDocumentName('');
      setSelectedFile(null);
      onClose();
    }
  };

  const removeDocument = (index) => {
    setDocuments((prevDocuments) => {
      const newDocuments = [...prevDocuments];
      newDocuments.splice(index, 1);
      return newDocuments;
    });
  };

  const downloadFile = (file) => {
    const url = URL.createObjectURL(file);
    const a = document.createElement('a');
    a.href = url;
    a.download = file.name || 'file';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const fileIndicator = selectedFile ? (
    <Box color="green" mt={2}>
      Файл добавлен: {selectedFile.name}
    </Box>
  ) : null;

  return (
    <ChakraProvider>
      <Box p={5}>
        <Button colorScheme="teal" onClick={onOpen}>
          Добавить документ
        </Button>
        <Filter/>

        <TableCustom
          headers={["Дата", "Документ", "Скачать файл", "Действия"]}
          data={documents.map((document, index) => [
            document.date,
            document.name,
            <Button colorScheme="teal" onClick={() => downloadFile(document.file)}>
              Скачать файл
            </Button>,
            <>
              <button
                onClick={() => removeDocument(index)}
                style={{ color: 'red', cursor: 'pointer', border: 'none', background: 'none' }}
              >
                Удалить
              </button>
            </>,
          ])}
        />

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Добавить документ</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormControl>
                <FormLabel>Дата</FormLabel>
                <Input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Название документа</FormLabel>
                <Input
                  placeholder="Введите название документа"
                  value={documentName}
                  onChange={(e) => setDocumentName(e.target.value)}
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel style={{ display: 'flex', alignItems: 'center' }}>
                  Выберите файл
                  <Input
                    type="file"
                    onChange={handleFileChange}
                    style={{ opacity: 0, position: 'absolute', zIndex: -1 }}
                  />
                  <Button colorScheme="teal" ml={2}>
                    Обзор
                  </Button>
                </FormLabel>
                {fileIndicator}
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={addDocument}>
                Сохранить
              </Button>
              <Button onClick={onClose}>Отмена</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </ChakraProvider>
  );
};

export default DocumentPage;

