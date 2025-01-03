import React, { useEffect } from 'react';

const PHONE_REGEX = /^\+?([1-9]\d{0,2})?[-. ]?\(?([0-9]{1,4})\)?[-. ]?([0-9]{1,4})[-. ]?([0-9]{1,9})$/;

export const TelephoneInput = ({
  value,
  onChange,
  renderInput,
  error,
  onError,
  ...props
}) => {
  useEffect(() => {
    if (value !== undefined) {
      validatePhone(value);
    }
  }, [value]);

  const validatePhone = (input) => {
    if (!input) {
      onError?.(true);
      return false;
    }

    // Remove all spaces, dashes, dots, and parentheses for validation
    const cleanNumber = input.replace(/[\s\-.()[\]]/g, '');
    
    // Require at least 7 digits (minimum length for most phone numbers)
    if (cleanNumber.length < 7) {
      onError?.(true);
      return false;
    }

    // Check if it matches our pattern and contains at least some digits
    const isValid = PHONE_REGEX.test(cleanNumber) && /\d/.test(cleanNumber);
    onError?.(!isValid);
    return isValid;
  };

  const handleChange = (e) => {
    const newValue = e.target.value;
    onChange?.(newValue);
    validatePhone(newValue);
  };

  const defaultRender = (inputProps) => (
    <input
      type="tel"
      {...inputProps}
    />
  );

  return (
    <>
      {renderInput ? 
        renderInput({
          value,
          onChange: handleChange,
          error,
          ...props
        }) : 
        defaultRender({
          value,
          onChange: handleChange,
          ...props
        })
      }
    </>
  );
}; 