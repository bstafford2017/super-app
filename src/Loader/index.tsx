import React from 'react'
import { ClimbingBoxLoader } from 'react-spinners'

const Loader = (): JSX.Element | null => {
  return <ClimbingBoxLoader color='#FFF' loading={true} size={15} />
}

export default Loader
