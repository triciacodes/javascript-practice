import React from 'react'
import { css, cx } from 'emotion'

import { padding } from '../global/constants'
import { stylesType } from '../global/styles'

const styles = {
  root: css({
    margin: `0 0 ${padding}px 0`,
  }),
}

const Heading = ({ tag: Tag, text, typeStyle }) => (
  <Tag className={cx(styles.root, stylesType[typeStyle])}>{text}</Tag>
)

export default Heading
