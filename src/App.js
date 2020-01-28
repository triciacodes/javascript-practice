import React from 'react'
import { css } from 'emotion'

import { mq } from './utils/media-queries'
import { padding } from './global/constants'

import Form from './components/Form'
import Heading from './components/Heading'

const styles = {
  root: css(
    mq({
      backgroundColor: '#eee',
      minHeight: '100%',
      padding: [padding, padding * 2, padding * 3],
    }),
  ),
}

function App() {
  return (
    <div className={styles.root}>
      <Heading typeStyle="h3" tag="h3" text="Forms" />
      <Form />
    </div>
  )
}

export default App
