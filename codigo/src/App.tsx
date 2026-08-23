import { RouterProvider } from 'react-router-dom'
import { LanguageSwitcher } from './components/language-switcher'
import { router } from './router/router'

function App() {
  return (
    <>
      <LanguageSwitcher />
      <RouterProvider router={router} />
    </>
  )
}

export default App
