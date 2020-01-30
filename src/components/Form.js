import React from 'react'
import { css } from 'emotion'

import { padding } from '../global/constants'

const styles = {
  form: css({
    background: 'white',
    marginBottom: padding,
    maxWidth: '200px',
    padding: '10px',
  }),
  input: css({
    border: '1px solid #aaa',
    display: 'block',
    margin: '10px auto',
    padding: '4px',
  }),
}

const handleSubmit = e => {
  e.preventDefault()
  console.log(e, 'this is event')
}

const Form = () => {
  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          id="username"
          placeholder="username"
          type="text"
        />
        <input className={styles.input} type="submit" value="Submit" />
      </form>
    </>
  )
}

export default Form
