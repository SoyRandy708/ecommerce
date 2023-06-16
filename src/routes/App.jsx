import { useRoutes, BrowserRouter } from "react-router-dom"
import { ShoppingProvider } from "../context"
import { Home } from "../pages/Home"
import { MyAccount } from "../pages/MyAccount"
import { MyOrder } from "../pages/MyOrder"
import { SignIn } from "../pages/SignIn"
import { Favorites } from "../pages/Favorites"
import { NotFound } from "../pages/NotFound"
import { Navbar } from "../components/Navbar"
import { Layout } from "../components/Layout"

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/Products/All", element: <Home /> },
    { path: "/Products/Category/:category", element: <Home /> },
    { path: "/Products/Favorites", element: <Favorites /> },
    { path: "/MyAccount", element: <MyAccount /> },
    { path: "/MyOrder", element: <MyOrder /> },
    { path: "/SignIn", element: <SignIn /> },
    { path: "/*", element: <NotFound /> },
  ])

  return routes
}

function App() {

  return (
    <ShoppingProvider>      
      <BrowserRouter>
        <Navbar />
        <Layout >
          <AppRoutes />
        </Layout>
      </BrowserRouter>
    </ShoppingProvider>
  )
}

export default App
