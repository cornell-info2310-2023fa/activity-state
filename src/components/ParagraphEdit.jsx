import { useState } from 'react';

import './ParagraphEdit.css';

export default function ParagraphEdit({ children, editMode = false }) {

  function handleSaveText() {
    console.log("TODO: save text");
  }

  function handleEditText() {
    console.log("TODO: edit text");
  }

  let componentContent;
  if (editMode) {
    componentContent = (
      <>
        <textarea defaultValue={children} rows={5} />
        <button onClick={handleSaveText}>Save</button>
      </>
    )
  } else {
    componentContent = (
      <>
        <p>{children}</p>
        <button onClick={handleEditText}>Edit</button>
      </>
    )
  }

  return componentContent;
}
