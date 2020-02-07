import React from 'react'
import { css } from 'emotion'
import { Route, Switch } from 'react-router-dom'

import { mq } from './utils/media-queries'
import { padding, Routes } from './global/constants'

import { ArrayMethods, Forms, Home, Hooks } from './pages'
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
        <Route exact path={Routes.HOME} component={Home} />
        <Route path={Routes.FORMS} component={Forms} />
        <Route path={Routes.ARRAY_METHODS} component={ArrayMethods} />
        <Route path={Routes.HOOKS} component={Hooks} />
      </Switch>
    </div>
  )
}

export default App
