import React from 'react'
import { NavLink } from 'react-router-dom'
import { css } from 'emotion'

import { Colors, padding, Routes, Transitions } from '../global/constants'

const styles = {
  root: css({
    marginBottom: padding * 2,
    '& a': {
      color: Colors.DARK_GRAY,
      display: 'inline-block',
      marginRight: '10px',
      transition: `${Transitions.TRANSITION_COLOR}`,
      ':hover': {
        color: Colors.GRAY,
      },
    },
  }),
}

const Nav = () => {
  return (
    <div className={styles.root}>
      <NavLink to={Routes.HOME}>Home</NavLink>
      <NavLink to={Routes.HOOKS}>Hooks</NavLink>
      <NavLink to={Routes.FORMS}>Forms</NavLink>
      <NavLink to={Routes.ARRAY_METHODS}>Array Methods</NavLink>
      <NavLink to={Routes.COMPONENTS}>Components</NavLink>
    </div>
  )
}

export default Nav
