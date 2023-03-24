import React from 'react'
import Display from '../Display/display'
import Numbers from '../Numbers/numbers'
import Operations from '../Operations/operations'
import Result from '../Result/result'

const Calculator = (): JSX.Element => {
  return (
      <>
        <Display/>
        <Operations/>
        <Numbers/>
        <Result/>
      </>
  )
}

export default Calculator
