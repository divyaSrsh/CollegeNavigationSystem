import { Height } from '@material-ui/icons';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
function MarkdownRenderer({ markdownContent }) {
  return (
    <div style={{
        scale:0.5    }}>
      <ReactMarkdown children={markdownContent} rehypePlugins={[rehypeRaw]}/>
    </div>
  );
}

export default MarkdownRenderer;