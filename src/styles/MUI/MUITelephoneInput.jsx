import React from 'react';
import { TextField } from '@mui/material';
import { TelephoneInput } from '../../core/TelephoneInput';

const ERROR_MESSAGE = 'Please enter a valid phone number';

export const MUITelephoneInput = ({ label, helperText = "Enter your phone number", ...props }) => {
  const [error, setError] = React.useState(false);

  return (
    <TelephoneInput
      renderInput={(inputProps) => (
        <TextField
          {...inputProps}
          label={label}
          error={error}
          helperText={error ? ERROR_MESSAGE : helperText}
          fullWidth
          placeholder="+1 (555) 555-5555"
        />
      )}
      onError={setError}
      {...props}
    />
  );
}; 