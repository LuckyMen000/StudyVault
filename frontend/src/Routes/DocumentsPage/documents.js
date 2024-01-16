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
  Stack,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Select,
} from '@chakra-ui/react';

const CustomFileInput = ({ onChange }) => {
  return (
    <label htmlFor="file" style={fileInputLabelStyle}>
      Выбрать файл
      <input
        id="file"
        type="file"
        onChange={onChange}
        style={fileInputStyle}
      />
    </label>
  );
};

const fileInputLabelStyle = {
  display: 'inline-block',
  backgroundColor: '#3182ce',
  color: 'white',
  padding: '10px',
  borderRadius: '4px',
  cursor: 'pointer',
  textAlign: 'center',
  width: '150px',
};

const fileInputStyle = {
  display: 'none',
};

const DocumentPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [documents, setDocuments] = useState([]);
  const [newDocument, setNewDocument] = useState({
    date: '',
    title: '',
    file: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Ограничиваем ввод до 10 символов
    setNewDocument((prev) => ({ ...prev, [name]: value.slice(0, 10) }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setNewDocument((prev) => ({ ...prev, file }));
  };

  const handleAddDocument = () => {
    setDocuments((prev) => [...prev, newDocument]);
    setNewDocument({
      date: '',
      title: '',
      file: null,
    });
    onClose();
  };

  const handleDeleteDocument = (index) => {
    setDocuments((prev) => prev.filter((_, i) => i !== index));
  };

  const [filter, setFilter] = useState('');

  const filteredDocuments = filter
    ? documents.filter(
        (document) =>
          document.file &&
          document.file.name.endsWith(`.${filter.toLowerCase()}`)
      )
    : documents;

  return (
    <ChakraProvider>
      <Box p={8}>
        <Button colorScheme="blue" onClick={onOpen}>
          Добавить документ
        </Button>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Добавление документа</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            <FormControl>
  <FormLabel>Дата</FormLabel>
  <Input
    name="date"
    value={newDocument.date}
    onChange={handleInputChange}
    maxLength={10} // Ограничиваем ввод до 10 символов
    placeholder="дд.мм.гггг" // Добавляем подсказку в фоне поля
  />
</FormControl>
              <FormControl mt={4}>
                <FormLabel>Название</FormLabel>
                <Input
                  name="title"
                  value={newDocument.title}
                  onChange={handleInputChange}
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Файл</FormLabel>
                <CustomFileInput onChange={handleFileChange} />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={handleAddDocument}>
                Добавить
              </Button>
              <Button onClick={onClose}>Отмена</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        <Box mt={8}>
          <Select
            placeholder="Выбрать фильтр расширения"
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="txt">TXT</option>
            <option value="pdf">PDF</option>
            <option value="docx">DOCX</option>
            <option value="jpg">JPG</option>
            <option value="png">PNG</option>
            <option value="pptx">PPTX</option>
            <option value="csv">CSV</option>
            <option value="rtf">RTF</option>
            <option value="zip">ZIP</option>
            <option value="reg">REG</option>
            <option value="mp4">MP4</option>
          </Select>
        </Box>

        <Table mt={4}>
          <Thead>
            <Tr>
              <Th>Дата</Th>
              <Th>Название</Th>
              <Th>Тип файла</Th>
              <Th>Действия</Th>
            </Tr>
          </Thead>
          <Tbody>
            {filteredDocuments.map((document, index) => (
              <Tr key={index}>
                <Td>{document.date}</Td>
                <Td>{document.title}</Td>
                <Td>{document.file && document.file.name.split('.').pop()}</Td>
                <Td>
                  {document.file && (
                    <>
                      <Button
                        as="a"
                        href={URL.createObjectURL(document.file)}
                        download={document.file.name}
                        colorScheme="teal"
                        variant="outline"
                        mr={2}
                      >
                        Скачать
                      </Button>
                      <Button
                        onClick={() => handleDeleteDocument(index)}
                        colorScheme="red"
                        variant="outline"
                      >
                        Удалить
                      </Button>
                    </>
                  )}
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </ChakraProvider>
  );
};

export default DocumentPage;
