import React from 'react';

export function TabPanel({ children, value, index }) {
  return (
    <div hidden={value !== index} className="mt-4">
      {value === index && children}
    </div>
  );
} 