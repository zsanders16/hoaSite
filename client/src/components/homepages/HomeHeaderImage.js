import React from 'react'
import { Image } from 'semantic-ui-react'

const HomeHeaderImage = ({ attachment }) => {
  return (
    <Image
      fluid
      verticalAlign='middle'
      src={attachment} />
  )
}

export default HomeHeaderImage
