import { Home } from "../pages/Home"
import { MyAccount } from "../pages/MyAccount"
import { MyOrder } from "../pages/MyOrder"
import { NotFound } from "../pages/NotFound"
import { SignIn } from "../pages/SignIn"

function App() {
  return (
    <div className="bg-blue-100">
      <p>HOLA</p>

      <Home />
      <MyAccount />
      <MyOrder />
      < NotFound />
      <SignIn />
    </div>
  )
}

export default App
