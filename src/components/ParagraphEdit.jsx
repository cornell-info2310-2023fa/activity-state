import { useState } from 'react';

import './ParagraphEdit.css';

export default function ParagraphEdit({ children, edit = false }) {
  const [editMode, setEditMode] = useState(edit);

  function handleSaveText() {
    setEditMode(false);
  }

  function handleEditText() {
    setEditMode(true);
  }

  let componentContent;
  if (editMode) {
    componentContent = (
      <>
        <textarea defaultValue={children} rows={5} />
        <button onClick={handleSaveText}>Save</button>
        <button onClick={() => setEditMode(false)}>Save (arrow function)</button>
      </>
    )
  } else {
    componentContent = (
      <>
        <p>{children}</p>
        <button onClick={handleEditText}>Edit</button>
        <button onClick={() => setEditMode(true)}>Edit (arrow function)</button>
      </>
    )
  }

  return componentContent;
}
