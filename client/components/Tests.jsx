import React, { useEffect } from 'react';
import { Box, Code } from '@chakra-ui/react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';

export default function Test({ tests }) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <Box>
      {tests.map((test, index) => (
        <Box key={`test-${index + 1}`} mb={6}>
          <pre style={{ borderRadius: '4px', display: 'block' }}>
            <Code className="language-javascript"> {test.funcWithArgs}</Code>
          </pre>
        </Box>
      ))}
    </Box>
  );
}
