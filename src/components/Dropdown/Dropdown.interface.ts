export interface DropdownOption {
  value: string
  label: string
}

export interface DropdownSelection extends DropdownOption {
  index: number
}

export interface IDropdownProps {
  options: DropdownOption[]
  onChange: (option: DropdownOption) => void
}
