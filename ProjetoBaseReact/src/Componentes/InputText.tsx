import React, { useRef } from 'react';

import TextField from '@mui/material/TextField'
import { FormControl, IconButton } from '@mui/material';

interface InputTextInterface {
  label: string,
  type: string,
  disabled?: boolean,
  dados: { [key: string]: string | number | readonly string[] | undefined | any },
  field: string,
  setState: React.Dispatch<React.SetStateAction<any>>
}

export default function InputText<T>(
  { label, type, dados, field, setState, disabled = false }: InputTextInterface) {

  return (
    <>
      <FormControl sx={{ width: '100%' }}>
        <TextField
          sx={{ my: 0, py: 0, height: 40 }}
          id="outlined-name"
          label={label}
          value={dados[field]}
          disabled={disabled}
          onChange={(e: any) => setState({ ...dados, [field]: e.target.value })}

        />
      </FormControl>
    </>
  )
}
