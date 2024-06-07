import react, {useState} from 'react'
import { Routes, Route} from 'react-router-dom'

const App = () => {
  const [color] = useState("#f8cccc")
  document.body.style.backgroundColor = color
  return (
<Routes>
  <Route path="/" element={<Home />} />
</Routes>
  )
}

export default App