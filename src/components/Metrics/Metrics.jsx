import React from 'react'
import { metricsContent } from '../../data'

function Metrics() {
  return (
    <div className='bg-gradient-to-b from-indigo-500  to-blue-400 text-white w-full text-center p-4 text-4xl font-medium'>{metricsContent.text}</div>
  )
}

export default Metrics