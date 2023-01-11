import React from 'react';
import FormControl from '@mui/material/FormControl';
import { OutlinedInput, Typography } from '@mui/material';


interface InputTextInterface {
  label: string,
  disabled?: boolean,
  type?: string,
  placeholder?: string,
  dados: { [key: string]: string | number | readonly string[] | undefined | any },
  field: string,
  setState: React.Dispatch<React.SetStateAction<any>>
}

export default function InputText (
  { label, dados, field, setState, disabled = false, type = "text", placeholder = label }: InputTextInterface ) {

  return (
    <>
      <FormControl sx={{ width: '100%' }}>
        <Typography
          variant='h6'
          textAlign='left'
          sx={{ mt: 1, color: 'primary.main' }}
        >
          {label}
        </Typography>
        <OutlinedInput
          sx={{ my: 0, py: 0, height: 40 }}
          placeholder={placeholder}
          disabled={disabled}
          type={type}
          onChange={( e ) => setState( { ...dados, [field]: e.target.value } )}
        />
        <Typography variant='caption' textAlign='left' color='warning.main' >{label}</Typography>
      </FormControl>

    </>
  )
}
