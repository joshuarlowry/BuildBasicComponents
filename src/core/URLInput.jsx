import React from 'react';

const URL_REGEX = new RegExp(
  '^(https?:\\/\\/)?' + // protocol
  '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
  '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
  '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
  '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
  '(\\#[-a-z\\d_]*)?$', // fragment locator
  'i'
);

export const URLInput = ({
  value,
  onChange,
  renderInput,
  error,
  onError,
  ...props
}) => {
  const validateURL = (input) => {
    if (!input) {
      onError?.(false);
      return true;
    }

    try {
      // First check with regex for basic URL structure
      const isValidFormat = URL_REGEX.test(input);
      if (!isValidFormat) {
        onError?.(true);
        return false;
      }

      // Then verify it's a proper URL with constructor
      const url = new URL(input.startsWith('http') ? input : `https://${input}`);
      
      // Additional checks for minimum domain requirements
      const domainParts = url.hostname.split('.');
      const isValidDomain = domainParts.length >= 2 && 
                           domainParts.every(part => part.length >= 1) &&
                           domainParts[domainParts.length - 1].length >= 2;

      onError?.(!isValidDomain);
      return isValidDomain;
    } catch {
      onError?.(true);
      return false;
    }
  };

  const handleChange = (e) => {
    const newValue = e.target.value;
    onChange?.(newValue);
    validateURL(newValue);
  };

  const defaultRender = (inputProps) => (
    <input
      type="url"
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