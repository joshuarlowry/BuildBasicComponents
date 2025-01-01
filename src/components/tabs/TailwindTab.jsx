import React from 'react';
import { TailwindURLInput } from '../../styles/Tailwind/TailwindURLInput';
import { TailwindTelephoneInput } from '../../styles/Tailwind/TailwindTelephoneInput';

export function TailwindTab({ tailwindUrl, setTailwindUrl, tailwindTel, setTailwindTel }) {
  return (
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
  );
} 