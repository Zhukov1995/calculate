/* eslint-disable */
import type { IState, IAction } from './interface'
import { round } from 'mathjs'

const initialState: IState = {
  display: '0',
  prevOp: '',
  accumulated: '0',
  history: '0'
}

export default function (state = initialState, action: IAction): IState {
  switch (action.type) {
    case 'UPDATE': {
      const updateDisplay = action.payload
      if ((state.display.includes('.') && updateDisplay === '.') || state.display.length > 8) {
        return { ...state }
      } else {
        return {
          ...state,
          display: state.display === '0' || state.prevOp === 'operator' ? updateDisplay.input : state.display + updateDisplay.input,
          prevOp: updateDisplay.operation
        }
      }
    }
    case 'ADD': {
      const history = (): string => state.prevOp === 'operator' ? state.history.slice(0, state.history.length - 4) : state.history
      return {
        ...state,
        display: state.display,
        history: state.history === '0' && state.accumulated == '0' ?
          state.display + ' + ' : state.accumulated != '0' ? state.accumulated + ' + '
          : history() + state.display + ' + ',
        prevOp: 'operator'
      }
    }
    case 'SUBTRACT': {
      const history = (): string => state.prevOp === 'operator' ? state.history.slice(0, state.history.length - 4)
        : state.history
      return {
        ...state,
        display: state.display,
        history: state.history === '0' && state.accumulated == '0' ?
          state.display + ' - ' : state.accumulated != '0' ? state.accumulated + ' - '
          : history() + state.display + ' - ',
        prevOp: 'operator'
      }
    }
    case 'MULTIPLY': {
      const history = (): string => state.prevOp === 'operator' ? state.history.slice(0, state.history.length - 4) : state.history
      return {
        ...state,
        display: state.display,
        history: state.history === '0' && state.accumulated == '0' ?
          state.display + ' * ' : state.accumulated != '0' ? state.accumulated + ' * '
          : history() + state.display + ' * ',
        prevOp: 'operator'
      }
    }
    case 'DIVIDE': {
      const history = (): string => state.prevOp === 'operator' ?
        state.history.slice(0, state.history.length - 4) : state.history
      return {
        ...state,
        display: state.display,
        history: state.history === '0' && state.accumulated == '0' ?
          state.display + ' / ' : state.accumulated != '0' ? state.accumulated + ' / '
          : history() + state.display + ' / ',
        prevOp: 'operator'
      }
    }
    case 'CLEAR': {
      return {
        ...state,
        display: '0',
        prevOp: 'clear',
        accumulated: 0,
        history: '0'
      }
    }
    case 'EQUAL': {
      const states = state.history + state.display
      const maths = eval(states)
      if (state.prevOp === 'equal') {
        return {
          ...state
        }
      } else {
        return {
          ...state,
          history: round(maths, 4).toString() ,
          display: round(maths, 4).toString() !== 'Infinity' ? round(maths, 4).toString() : 'Не определено',
          accumulated: maths.toString(),
          prevOp: 'equal'
        }
      }
    }
    default: return state
  }
}
