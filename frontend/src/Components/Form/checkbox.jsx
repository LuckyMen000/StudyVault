import React from 'react';
import { Field } from 'formik';
import { Checkbox, Grid, GridItem } from '@chakra-ui/react';

function FMultiCheckbox({ name, options, ...other }) {
  return (
    <Field name={name}>
      {({ field, form }) => {
        const onSelected = (option) =>
          field.value.includes(option)
            ? field.value.filter((value) => value !== option)
            : [...field.value, option];

        return (
          <Grid templateColumns="repeat(2, 1fr)" gap={1} width="max-content" {...other}>
            {options.map((option) => (
              <GridItem key={option.value}>
                <Checkbox
                  value={option.value}
                  isChecked={field.value.includes(option.value)}
                  onChange={() => {
                    form.setFieldValue(field.name, onSelected(option.value));
                  }}
                >
                  {option.label}
                </Checkbox>
              </GridItem>
            ))}
          </Grid>
        );
      }}
    </Field>
  );
}

export default FMultiCheckbox;
