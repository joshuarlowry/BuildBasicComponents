import React from 'react';
import { TextField } from '@mui/material';
import { TelephoneInput } from '../../core/TelephoneInput';

export const MUITelephoneInput = ({ label, helperText, ...props }) => {
  const [error, setError] = React.useState(false);

  return (
    <TelephoneInput
      renderInput={(inputProps) => (
        <TextField
          {...inputProps}
          label={label}
          error={error}
          helperText={error ? 'Please enter a valid phone number' : helperText}
          fullWidth
          placeholder="+1 (555) 555-5555"
        />
      )}
      onError={setError}
      {...props}
    />
  );
}; 