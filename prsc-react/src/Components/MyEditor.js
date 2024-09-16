import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles

const RichTextEditor = () => {
  const [value, setValue] = useState('');

  return (
    <ReactQuill value={value} onChange={setValue} />
  );
};

export default RichTextEditor;
