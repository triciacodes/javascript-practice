import React from 'react'

import Heading from './Heading'
import { logDOM, logRoles } from '@testing-library/react'

const ArrayMethods = () => {
  const textArray = ['one', 'two', 'three', 'four', 'five']
  const numArray = [1, 2, 3, 4, 5]

  const numsGreaterThan = threshold => numArray.filter(num => num > threshold)
  const numsIncludes = text => textArray.includes(text)

  console.log(numsIncludes('two'), 'num includes')

  return (
    <div>
      <Heading text="Filter + Map (returns array)" tag="h3" typeStyle="h6" />
      <p>Returns an array</p>
      <p>
        Numbers over 1: <b>{numsGreaterThan(1).map(num => `${num}, `)}</b>
      </p>
      <p>
        Numbers over 3: <b>{numsGreaterThan(3).map(num => `${num}, `)}</b>
      </p>

      <Heading
        text="Includes + Map (returns boolean)"
        tag="h3"
        typeStyle="h6"
      />
      <p>Array includes three: {`${numsIncludes('three')}`}</p>
      <p>Array includes six: {`${numsIncludes('six')}`}</p>
    </div>
  )
}

export default ArrayMethods
