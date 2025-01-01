import React, { useState } from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import { URLInput } from './core/URLInput';
import { MUIURLInput } from './styles/MUI/MUIURLInput';
import { TailwindURLInput } from './styles/Tailwind/TailwindURLInput';
import { TelephoneInput } from './core/TelephoneInput';
import { MUITelephoneInput } from './styles/MUI/MUITelephoneInput';
import { TailwindTelephoneInput } from './styles/Tailwind/TailwindTelephoneInput';

function TabPanel({ children, value, index }) {
  return (
    <div hidden={value !== index} className="mt-4">
      {value === index && children}
    </div>
  );
}

function App() {
  const [tab, setTab] = useState(0);
  const [coreUrl, setCoreUrl] = useState('');
  const [muiUrl, setMuiUrl] = useState('');
  const [tailwindUrl, setTailwindUrl] = useState('');
  const [coreTel, setCoreTel] = useState('');
  const [muiTel, setMuiTel] = useState('');
  const [tailwindTel, setTailwindTel] = useState('');
  const [coreUrlError, setCoreUrlError] = useState(false);
  const [coreTelError, setCoreTelError] = useState(false);

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={tab} onChange={(_, newValue) => setTab(newValue)}>
          <Tab label="Core Components" />
          <Tab label="Material UI" />
          <Tab label="Tailwind" />
        </Tabs>
      </Box>

      <TabPanel value={tab} index={0}>
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-bold mb-4">Core URL Input</h2>
            <URLInput
              value={coreUrl}
              onChange={setCoreUrl}
              onError={setCoreUrlError}
              placeholder="Enter URL"
              className="w-full px-3 py-2 border rounded-md"
            />
            {coreUrlError && (
              <p className="text-sm text-red-500">Please enter a valid URL</p>
            )}
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4">Core Telephone Input</h2>
            <TelephoneInput
              value={coreTel}
              onChange={setCoreTel}
              onError={setCoreTelError}
              placeholder="+1 (555) 555-5555"
              className="w-full px-3 py-2 border rounded-md"
            />
            {coreTelError && (
              <p className="text-sm text-red-500">Please enter a valid phone number</p>
            )}
          </div>
        </div>
      </TabPanel>

      <TabPanel value={tab} index={1}>
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
      </TabPanel>

      <TabPanel value={tab} index={2}>
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-bold mb-4">Tailwind URL Input</h2>
            <TailwindURLInput
              label="Website URL"
              value={tailwindUrl}
              onChange={setTailwindUrl}
            />
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4">Tailwind Telephone Input</h2>
            <TailwindTelephoneInput
              label="Phone Number"
              value={tailwindTel}
              onChange={setTailwindTel}
            />
          </div>
        </div>
      </TabPanel>
    </div>
  );
}

export default App; 