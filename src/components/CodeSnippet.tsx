"use client"
import { useState, useEffect, ReactNode } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css'; // Import Prism's CSS for styling

interface CodeSnippetProps {
  children: ReactNode;
  language?: string; // Optional, to define language for syntax highlighting
}

const CodeSnippet: React.FC<CodeSnippetProps> = ({ children, language = "javascript" }) => {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    Prism.highlightAll(); // Highlight code after component renders
  }, [children]);

  const copyToClipboard = () => {
    const code = (children as string).trim();
    navigator.clipboard.writeText(code).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }).catch(err => console.error('Failed to copy: ', err));
  };

  return (
    <div style={{ position: 'relative', margin: '20px 0' }}>
      <button
        onClick={copyToClipboard}
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          padding: '5px 10px',
          backgroundColor: isCopied ? '#4CAF50' : '#0070f3',
          color: 'white',
          border: 'none',
          borderRadius: '3px',
          cursor: 'pointer',
        }}
      >
        {isCopied ? 'Copied!' : 'Copy'}
      </button>
      <pre style={{
        backgroundColor: '#f5f5f5',
        padding: '20px',
        borderRadius: '5px',
        overflowX: 'auto',
        fontSize: '14px',
        position: 'relative',
      }}>
        <code className={`language-${language}`}>
          {children}
        </code>
      </pre>
    </div>
  );
};

export default CodeSnippet;
