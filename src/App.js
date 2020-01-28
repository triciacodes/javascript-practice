import React from 'react'
import { css } from 'emotion'

import { mq } from './utils/media-queries'

import Form from './components/Form'

const styles = {
  root: css(
    mq({
      backgroundColor: '#eee',
      minHeight: '100%',
      padding: ['25px', '50px', '100px'],
    }),
  ),
}

function App() {
  return (
    <div className={styles.root}>
      <Form />
    </div>
  )
}

export default App
