import React from 'react';
import { URLInput } from '../../core/URLInput';

export const TailwindURLInput = ({ label, id = 'url-input', ...props }) => {
  const [error, setError] = React.useState(false);

  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label htmlFor={id} className="text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <URLInput
        renderInput={(inputProps) => (
          <input
            {...inputProps}
            id={id}
            className={`
              w-full px-3 py-2 rounded-md border
              focus:outline-none focus:ring-2 focus:ring-blue-500
              ${error 
                ? 'border-red-500 focus:ring-red-500' 
                : 'border-gray-300'
              }
            `}
          />
        )}
        onError={setError}
        {...props}
      />
      {error && (
        <p className="text-sm text-red-500">
          Please enter a valid URL
        </p>
      )}
    </div>
  );
}; 