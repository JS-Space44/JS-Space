import React, { useEffect } from 'react';
import { Box, Code } from '@chakra-ui/react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';

export default function Test({ currentProblem }) {
  const { tests } = currentProblem;
  useEffect(() => {
    Prism.highlightAll();
  }, [currentProblem]);

  return (
    <Box>
      {tests &&
        tests.map((test, index) => (
          <Box key={`test-${index + 1}`} mb={6}>
            <pre style={{ borderRadius: '4px', display: 'block' }}>
              <code className="language-js"> {test.funcWithArgs}</code>
            </pre>
          </Box>
        ))}
    </Box>
  );
}
