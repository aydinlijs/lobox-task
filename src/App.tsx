import { useState } from 'react'
import { DropdownOption } from './components/Dropdown'
import { Dropdown } from './components/Dropdown/Dropdown'
import { useKeyCode } from './hooks/useEnterClick'
import { getMoreWordOptions } from './utils/optionsManager'

const App = () => {
  const [options, setOptions] = useState<DropdownOption[]>(
    getMoreWordOptions(0)
  )

  useKeyCode('Enter', () => {
    setOptions((prev: DropdownOption[]) => [
      ...prev,
      ...getMoreWordOptions(prev.length),
    ])
  })

  return (
    <div className="App">
      <Dropdown options={options} />
    </div>
  )
}

export default App
