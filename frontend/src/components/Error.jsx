import React from 'react';

export default function Error({ children: errorMessage }) {
  return (
    <span className="bg-red-300 font-semibold text-black p-2 ml-2">
      {errorMessage}
    </span>
  );
}
