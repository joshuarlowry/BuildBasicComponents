import React, { useState } from 'react';
import { URLInput } from './core/URLInput';
import { MUIURLInput } from './styles/MUI/MUIURLInput';
import { TailwindURLInput } from './styles/Tailwind/TailwindURLInput';

function App() {
  const [coreUrl, setCoreUrl] = useState('');
  const [muiUrl, setMuiUrl] = useState('');
  const [tailwindUrl, setTailwindUrl] = useState('');
  const [coreError, setCoreError] = useState(false);

  return (
    <div className="p-8 max-w-2xl mx-auto space-y-8">
      <div>
        <h2 className="text-xl font-bold mb-4">Core URL Input</h2>
        <div className="flex flex-col gap-1">
          <URLInput
            value={coreUrl}
            onChange={setCoreUrl}
            onError={setCoreError}
            placeholder="Enter URL"
            className="w-full px-3 py-2 border rounded-md"
          />
          {coreError && (
            <p className="text-sm text-red-500">
              Please enter a valid URL
            </p>
          )}
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-4">Material-UI Input</h2>
        <MUIURLInput
          label="Website URL"
          value={muiUrl}
          onChange={setMuiUrl}
          helperText="Enter your website URL"
        />
      </div>

      <div>
        <h2 className="text-xl font-bold mb-4">Tailwind Input</h2>
        <TailwindURLInput
          label="Website URL"
          value={tailwindUrl}
          onChange={setTailwindUrl}
        />
      </div>
    </div>
  );
}

export default App; 