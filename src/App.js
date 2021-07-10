 /** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

import './App.css';

function App() {
  return (
    <div
    css={css`
      background-color: 'hotpink';

      &:hover {
        color: 'lightgreen';
      }`
    }
  >
    This has a hotpink background.
  </div>
  );
}

export default App;
