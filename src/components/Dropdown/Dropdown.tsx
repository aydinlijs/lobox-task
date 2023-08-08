import { useCallback, useEffect, useRef, useState } from 'react'
import icons from '../../assets/icons/icons'
import { useKeyCode } from '../../hooks/useEnterClick'
import { useOutsideClick } from '../../hooks/useOutsideClick'
import {
  DropdownOption,
  DropdownSelection,
  IDropdownProps,
} from './Dropdown.interface'
import { useDropdownStyles } from './Dropdown.styled'

export const Dropdown = ({ options, onChange }: IDropdownProps) => {
  const classes = useDropdownStyles()
  const [selectedOption, setSelectedOption] =
    useState<DropdownSelection | null>(null)
  const [activeOptionIndex, setActiveOptionIndex] = useState<number | null>(
    null
  )
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const handleToggleDropdown = () => {
    if (!isOpen) {
      document
        .getElementById(`dropdown-option-${selectedOption?.index}`)
        ?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      setActiveOptionIndex(selectedOption?.index || null)
    }
    setIsOpen((prev) => !prev)
  }
  const handleSelectOption = useCallback(
    (option: DropdownOption, index: number) => {
      onChange(option)
      setSelectedOption({ ...option, index })
      setIsOpen(false)
    },
    [onChange]
  )

  const moveActiveOption = useCallback(
    (up: boolean) => {
      return () => {
        if (isOpen) {
          setActiveOptionIndex((prev: number | null) => {
            let newActiveOptionIndex =
              prev !== null ? (up ? --prev : ++prev) : 0

            // checking for boundaries below
            if (newActiveOptionIndex < 0) newActiveOptionIndex = 0
            if (newActiveOptionIndex > options.length - 1)
              newActiveOptionIndex = options.length - 1
            return newActiveOptionIndex
          })
        }
      }
    },
    [isOpen, options.length]
  )

  useEffect(() => {
    document
      .getElementById(`dropdown-option-${activeOptionIndex}`)
      ?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }, [activeOptionIndex])

  useOutsideClick(ref, () => setIsOpen(false), isOpen)

  useKeyCode('ArrowDown', moveActiveOption(false))
  useKeyCode('ArrowUp', moveActiveOption(true))
  useKeyCode(
    'Enter',
    useCallback(() => {
      handleSelectOption(
        options[activeOptionIndex || 0],
        activeOptionIndex || 0
      )
    }, [activeOptionIndex, handleSelectOption, options])
  )

  return (
    <div ref={ref} className={classes.dropdown}>
      <button className={classes.dropdownButton} onClick={handleToggleDropdown}>
        {selectedOption?.label || 'Select an option'}
        <icons.LoboxArrow rotate={isOpen} />
      </button>
      <div
        style={{ visibility: isOpen ? 'visible' : 'hidden' }}
        className={classes.dropdownContent}
      >
        {options.map((option: DropdownOption, index: number) => {
          const isSelected = selectedOption?.value === option.value
          return (
            <div
              className={`item ${
                isSelected || activeOptionIndex === index ? 'active-item' : ''
              }`}
              id={`dropdown-option-${index}`}
              key={option.value}
              onClick={() => handleSelectOption(option, index)}
            >
              {option.label}
              {isSelected ? <icons.LoboxCheck /> : ''}
            </div>
          )
        })}
      </div>
    </div>
  )
}
