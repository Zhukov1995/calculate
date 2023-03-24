
export interface IButton {
    type: 'operator' | 'number' | 'equals' | 'decimal',
    button: string,
    display?: string,
    value?: string
    id: string
}