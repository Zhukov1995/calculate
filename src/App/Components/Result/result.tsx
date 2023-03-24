import React from 'react'
import { useSelector } from 'react-redux'
import type { IState } from '../../../state/interface'
import Button from '../../UI/Button/button'
import './result.scss'

const Result = (): JSX.Element => {
  const display = useSelector<IState, string>(state => state.display)
  return (
    <div className="results">
      <Button button={'='} id={'equals'} type={'equals'} display={display}/>
    </div>
  )
}

export default Result
