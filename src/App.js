import React from 'react'
import { css } from 'emotion'
import { Route, Switch } from 'react-router-dom'

import { mq } from './utils/media-queries'
import { padding, Routes } from './global/constants'

import * as Pages from './pages'
import Nav from './components/Nav'

const styles = {
  root: css(
    mq({
      backgroundColor: '#eee',
      minHeight: '100%',
      padding: [padding, padding * 2, padding * 2],
    }),
  ),
}

function App() {
  return (
    <div className={styles.root}>
      <Nav />
      <Switch>
        <Route exact path={Routes.HOME} component={Pages.Home} />
        <Route path={Routes.FORMS} component={Pages.Forms} />
        <Route path={Routes.ARRAY_METHODS} component={Pages.ArrayMethods} />
        <Route path={Routes.HOOKS} component={Pages.Hooks} />
        <Route path={Routes.COMPONENTS} component={Pages.Components} />
      </Switch>
    </div>
  )
}

export default App
