import React, { useState } from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import { TabPanel } from './components/common/TabPanel';
import { CoreComponentsTab } from './components/tabs/CoreComponentsTab';
import { MaterialUITab } from './components/tabs/MaterialUITab';
import { TailwindTab } from './components/tabs/TailwindTab';

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
        <CoreComponentsTab
          coreUrl={coreUrl}
          setCoreUrl={setCoreUrl}
          coreTel={coreTel}
          setCoreTel={setCoreTel}
          coreUrlError={coreUrlError}
          setCoreUrlError={setCoreUrlError}
          coreTelError={coreTelError}
          setCoreTelError={setCoreTelError}
        />
      </TabPanel>

      <TabPanel value={tab} index={1}>
        <MaterialUITab
          muiUrl={muiUrl}
          setMuiUrl={setMuiUrl}
          muiTel={muiTel}
          setMuiTel={setMuiTel}
        />
      </TabPanel>

      <TabPanel value={tab} index={2}>
        <TailwindTab
          tailwindUrl={tailwindUrl}
          setTailwindUrl={setTailwindUrl}
          tailwindTel={tailwindTel}
          setTailwindTel={setTailwindTel}
        />
      </TabPanel>
    </div>
  );
}

export default App; 