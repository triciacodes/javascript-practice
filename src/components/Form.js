import React from 'react'
import { css } from 'emotion'

const styles = {
  form: css({
    maxWidth: '200px',
    background: 'white',
    padding: '10px',
  }),
  input: css({
    display: 'block',
    margin: '10px auto',
    padding: '4px',
    border: '1px solid #aaa',
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
