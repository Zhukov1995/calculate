export interface IState {
  display: string
  prevOp: string
  accumulated: string | number
  history: string
}

export interface IAction {
  type: string
  payload: any
}
  