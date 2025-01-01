import React from 'react';
import { URLInput } from '../../core/URLInput';
import { TelephoneInput } from '../../core/TelephoneInput';

export function CoreComponentsTab({ 
  coreUrl, 
  setCoreUrl, 
  coreTel, 
  setCoreTel,
  coreUrlError,
  setCoreUrlError,
  coreTelError,
  setCoreTelError 
}) {
  return (
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
  );
} 