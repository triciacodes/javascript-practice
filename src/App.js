import React from 'react'
import { css } from 'emotion'

import { mq } from './utils/media-queries'

const styles = {
  root: css(
    mq({
      margin: ['25px', '50px', '100px'],
    }),
  ),
}

function App() {
  return <div className={styles.root}></div>
}

export default App
