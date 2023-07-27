import { useRef, useState } from 'react'
import icons from '../../assets/icons/icons'
import { useOutsideClick } from '../../hooks/useOutsideClick'
import { DropdownOption, IDropdownProps } from './Dropdown.interface'
import { useDropdownStyles } from './Dropdown.styled'

export const Dropdown = ({ options }: IDropdownProps) => {
  const classes = useDropdownStyles()
  const [selectedOption, setSelectedOption] = useState<DropdownOption | null>(
    null
  )
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const handleToggleDropdown = () => setIsOpen((prev) => !prev)
  const handleSelectOption = (option: DropdownOption) => {
    setSelectedOption(option)
    setIsOpen(false)
  }

  useOutsideClick(ref, () => setIsOpen(false), isOpen)

  return (
    <div ref={ref} className={classes.dropdown}>
      <button className={classes.dropdownButton} onClick={handleToggleDropdown}>
        {selectedOption?.label || 'Select an option'}
        <icons.LoboxArrow rotate={isOpen} />
      </button>
      {isOpen && (
        <div className={classes.dropdownContent}>
          {options.map((option: DropdownOption) => {
            const isSelected = selectedOption?.value === option.value
            return (
              <div
                className={`item ${isSelected ? 'active-item' : ''}`}
                key={option.value}
                onClick={() => handleSelectOption(option)}
              >
                {option.label}
                {isSelected ? <icons.LoboxCheck /> : ''}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
