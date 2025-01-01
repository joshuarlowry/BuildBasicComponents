import React from 'react';
import { MUIURLInput } from '../../styles/MUI/MUIURLInput';
import { MUITelephoneInput } from '../../styles/MUI/MUITelephoneInput';

export function MaterialUITab({ muiUrl, setMuiUrl, muiTel, setMuiTel }) {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-bold mb-4">Material-UI URL Input</h2>
        <MUIURLInput
          label="Website URL"
          value={muiUrl}
          onChange={setMuiUrl}
          helperText="Enter your website URL"
        />
      </div>

      <div>
        <h2 className="text-xl font-bold mb-4">Material-UI Telephone Input</h2>
        <MUITelephoneInput
          label="Phone Number"
          value={muiTel}
          onChange={setMuiTel}
          helperText="Enter your phone number"
        />
      </div>
    </div>
  );
} 