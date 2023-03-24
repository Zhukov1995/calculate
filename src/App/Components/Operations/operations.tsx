import React from 'react'
import { useSelector } from 'react-redux'
import type { IState } from '../../../state/interface'
import Button from '../../UI/Button/button'
import './operations.scss'

const Operations = (): JSX.Element => {
  const display = useSelector<IState, string>(state => state.display)
  return (
    <div className='operations'>
        <Button button={'/'} id={'divide'} type={'operator'} display={display}/>
        <Button button={'*'} id={'multiply'} type={'operator'} display={display}/>
        <Button button={'-'} id={'subtract'} type={'operator'} display={display}/>
        <Button button={'+'} id={'add'} type={'operator'} display={display}/>
    </div>
  )
}

export default Operations
