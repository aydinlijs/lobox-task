import { DropdownOption } from './components/Dropdown'
import { Dropdown } from './components/Dropdown/Dropdown'
import { getRandomWordOptions } from './utils/optionsManager'

const options: DropdownOption[] = getRandomWordOptions(50)

const App = () => {
  return (
    <div className="App">
      <Dropdown options={options} onChange={(option) => {}} />
    </div>
  )
}

export default App
