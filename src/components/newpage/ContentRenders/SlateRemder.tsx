'use client';

import React, { useMemo } from 'react';
import { createEditor, Descendant } from 'slate';
import { Slate, Editable, withReact } from 'slate-react';

type Props = {
  content: Descendant[];
};

const SlateRenderer: React.FC<Props> = ({ content }) => {
  const editor = useMemo(() => withReact(createEditor()), []);

  const value: Descendant[] = Array.isArray(content) && content.length > 0
    ? content
    : [
        {
          text: 'paragraph',
          children: [{ text: '' }],
        },
      ];

  return (
    <Slate editor={editor} initialValue={value} onChange={() => {}}>
      <Editable readOnly placeholder="No content..." />
    </Slate>
  );
};

export default SlateRenderer;
