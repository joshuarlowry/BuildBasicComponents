import React from 'react';
import { TextField } from '@mui/material';
import { URLInput } from '../../core/URLInput';

export const MUIURLInput = ({ label, helperText, ...props }) => {
  const [error, setError] = React.useState(false);

  return (
    <URLInput
      renderInput={(inputProps) => (
        <TextField
          {...inputProps}
          label={label}
          error={error}
          helperText={error ? 'Please enter a valid URL' : helperText}
          fullWidth
        />
      )}
      onError={setError}
      {...props}
    />
  );
}; 