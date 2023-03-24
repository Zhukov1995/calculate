import type { IAction } from './interface'

export const updateDisplay = (content: any): IAction => ({
  type: 'UPDATE',
  payload: {
    input: content,
    operation: 'number'
  }
})

export const addition = (content: any): IAction => ({
  type: 'ADD',
  payload: {
    operation: 'operator'
  }
})

export const subtraction = (content: any): IAction => ({
  type: 'SUBTRACT',
  payload: {
    operation: 'operator'
  }
})

export const multiplication = (content: any): IAction => ({
  type: 'MULTIPLY',
  payload: {
    operation: 'operator'
  }
})

export const division = (content: any): IAction => ({
  type: 'DIVIDE',
  payload: {
    operation: 'operator'
  }
})

export const clearDisplay = (content: any): IAction => ({
  type: 'CLEAR',
  payload: {
    operation: 'clear'
  }
})

export const equal = (content: any): IAction => ({
  type: 'EQUAL',
  payload: {
    operation: 'equal'
  }
})
