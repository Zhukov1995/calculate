import React from 'react'
import { useSelector } from 'react-redux'
import type { IState } from '../../../state/interface'
import './display.scss'

const Display = (): JSX.Element => {
  const display = useSelector<IState, string>(state => state.display)

  const classDisplay = display !== 'Не определено' ? 'display__display' : 'display__display size'

  return (
    <div className="display">
      <p className={classDisplay}>{display}</p>
    </div>
  )
}

export default Display
