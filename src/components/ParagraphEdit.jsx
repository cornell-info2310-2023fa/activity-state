import { useState } from 'react';

import './ParagraphEdit.css';

export default function ParagraphEdit({ children, editMode = false }) {

  let componentContent;
  if (editMode) {
    componentContent = (
      <>
        <textarea defaultValue={children} rows={5} />
        <button>Save</button>
      </>
    )
  } else {
    componentContent = (
      <>
        <p>{children}</p>
        <button>Edit</button>
      </>
    )
  }

  return componentContent;
}
