import { useRoutes, BrowserRouter } from "react-router-dom"
import { Home } from "../pages/Home"
import { MyAccount } from "../pages/MyAccount"
import { MyOrder } from "../pages/MyOrder"
import { SignIn } from "../pages/SignIn"
import { NotFound } from "../pages/NotFound"
import { Navbar } from "../components/NavBar";
import { Layout } from "../components/Layout"

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/MyAccount", element: <MyAccount /> },
    { path: "/MyOrder", element: <MyOrder /> },
    { path: "/SignIn", element: <SignIn /> },
    { path: "/*", element: <NotFound /> },
  ])

  return routes
}

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Layout >
        <AppRoutes />
      </Layout>
    </BrowserRouter>
  )
}

export default App
