 /** @jsxImportSource @emotion/react */

import './App.css';

function App() {
  return (
    <div
    css={{
      backgroundColor: 'hotpink',
      '&:hover': {
        color: 'lightgreen'
      }
    }}
  >
    This has a hotpink background.
  </div>
  );
}

export default App;
