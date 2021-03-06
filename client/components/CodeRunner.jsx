/* eslint-disable consistent-return */
import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import actions from '../actions/actions';

/**
 * Helper to build out the iframe's src
 * scotchLog is our way of sending data up to the parent through postMessage
 */
const buildIframeSrc = (js) => `
  <html>
  <head>
  </head>
  <body>
  <script>
    function scotchLog() {
      let output = "";
      let arg;
      for (let i = 0; i < arguments.length; i++) {
        arg = arguments[i];
        output += typeof arg === "object" ? JSON.stringify(arg) : arg;
      }
      window.parent.postMessage(output, '*');
      console.log(...arguments);
    }
    // -----------------------------------------
    try {
      ${js}
    } catch (err) {
      window.parent.postMessage(err.message, '*');
      console.error(err.message);
    }
  </script>
  </body>
  </html>
`;

/**
 * The browser component has a nested iframe
 * Every time the  js props change, destroy the iframe and create a new iframe
 */
export default function CodeRunner() {
  const iframeContainer = useRef(null);
  const js = useSelector((state) => state.editor.code);
  // const history = useSelector((state) => state.editor.history);
  const dispatch = useDispatch();
  const runCode = useSelector((state) => state.editor.runCode);
  const setRunCode = (execute) => dispatch(actions.runCode(execute));
  const addHistory = (history) => dispatch(actions.addHistory(history));

  /**
   * Run all our code in the iframe
   * Destroys the iframe
   * Rebuilds the iframe
   */

  const execute = () => {
    // remove all children
    while (iframeContainer.current.hasChildNodes()) {
      iframeContainer.current.removeChild(iframeContainer.current.lastChild);
    }

    // create new iframe
    const iframe = document.createElement('iframe');
    iframe.height = '100%';
    iframe.width = '100%';
    iframe.sandbox = 'allow-scripts allow-same-origin';
    iframe.style.border = 'none';
    iframe.background = '#fff';

    // convert all console.log to use scotchLog
    // scotchLog swill send events back up to this parent
    // we can use that to add to history
    // scotchLog will also run console.log()
    const newJs = js.replace(new RegExp('console.log', 'g'), 'scotchLog');
    iframe.srcdoc = buildIframeSrc(newJs);
    iframeContainer.current.appendChild(iframe);
  };

  /**
   * Watch for postMessage coming from our iframe
   */
  useEffect(() => {
    window.addEventListener('message', (e) => {
      if (!e.data) return false; // only handle if theres data
      if (typeof e.data !== 'string') return false; // data must be a string
      if (e.data.includes('_')) return false; // don't watch for events emitted by the react library
      addHistory(e.data);
    });
  }, []);

  /**
   * Run the code
   */
  useEffect(() => {
    if (runCode === true) {
      execute();
      setRunCode(false);
    }
  }, [runCode, js]);

  return (
    <div
      ref={iframeContainer}
      className="iframe-container"
      style={{
        height: '100%',
        width: '100%',
        background: 'white',
        display: 'none',
      }}
    />
  );
}
