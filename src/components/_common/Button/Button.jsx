import React from 'react';

export default function Button({ href, btnText }) {
  return (
    <>
      <button>
        <a href={href}>{btnText}</a>
      </button>
    </>
  );
}
