/* eslint-disable */
import React, { useEffect, useState } from 'react'
import cn from 'classnames'
import type { IButton } from './button.prop'
import { useDispatch, useSelector } from 'react-redux'
import { addition, clearDisplay, division, equal, multiplication, subtraction, updateDisplay } from '../../../state/actions'
import type { IState } from '../../../state/interface'
import './button.scss'

const Button = ({ type, button, id, display, value }: IButton): JSX.Element => {
  const accumulate = useSelector<IState, string | number>(state => state.accumulated)
  const [localButton, setLocalButton] = useState<string>('')
  const dispatch = useDispatch()

  useEffect(() => {
    if (button === '*') {
      setLocalButton('x')
    } else if (button === '.') {
      setLocalButton(',')
    } else {
      setLocalButton(button)
    }
  }, [])

  const handleClicks = (): void => {
    if (accumulate != '0') {
      dispatch(clearDisplay(display))
    } else if (id === 'subtract') {
      dispatch(subtraction(display))
    } else if (id === 'multiply') {
      dispatch(multiplication(display))
    } else if (id === 'divide') {
      dispatch(division(display))
    } else if (id === 'add') {
      dispatch(addition(button))
    } else if (id === 'equals') {
      dispatch(equal(display))
    } else {
      dispatch(updateDisplay(button))
    }
  }

  const buttonStyle = cn('button', {
    ['operator']: type === 'operator',
    ['number']: type === 'number' || type === 'decimal',
    ['equals']: type === 'equals',
    ['zero']: button === '0'
  })

  return (
    <button
      className={buttonStyle}
      id={id}
      value={value}
      onClick={(e) => handleClicks()}
    >
      {localButton}
    </button>
  )
}

export default Button
