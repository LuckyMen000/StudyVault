import React from 'react';
import { 
    Table, 
    Tbody, 
    Td, 
    Th, 
    Thead, 
    Tr 
} from '@chakra-ui/react';

const CustomTable = ({ headers, data }) => {
  return (
    <Table variant="striped" colorScheme="teal">
      <Thead>
        <Tr>
          {headers.map((header, index) => (
            <Th key={index}>{header}</Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>
        {data.map((rowData, index) => (
          <Tr key={index}>
            {rowData.map((data, idx) => (
              <Td key={idx}>{data}</Td>
            ))}
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default CustomTable;
