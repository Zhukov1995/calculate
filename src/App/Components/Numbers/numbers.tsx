import React from 'react'
import { useSelector } from 'react-redux'
import type { IState } from '../../../state/interface'
import Button from '../../UI/Button/button'
import './numbers.scss'

const Numbers = (): JSX.Element => {
  const display = useSelector<IState, string>(state => state.display)
  return (
    <div className="numbers">
        <Button button={'1'} id={'one'} value={'1'} type={'number'}/>
        <Button button={'2'} id={'two'} value={'2'} type={'number'}/>
        <Button button={'3'} id={'three'} value={'3'} type={'number'}/>
        <Button button={'4'} id={'four'} value={'4'} type={'number'}/>
        <Button button={'5'} id={'five'} value={'5'} type={'number'}/>
        <Button button={'6'} id={'six'} value={'6'} type={'number'}/>
        <Button button={'7'} id={'seven'} value={'7'} type={'number'}/>
        <Button button={'8'} id={'eight'} value={'8'} type={'number'}/>
        <Button button={'9'} id={'nine'} value={'9'} type={'number'}/>
        <Button button={'0'} id={'zero'} value={'0'} type={'number'}/>
        <Button button={'.'} id={'decimal'} value={'.'} type={'decimal'} display={display}/>
    </div>
  )
}

export default Numbers
