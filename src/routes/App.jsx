import { useRoutes, BrowserRouter } from "react-router-dom"
import { ShoppingProvider } from "../context"
import { Products } from "../pages/Products"
import { MyAccount } from "../pages/MyAccount"
import { MyOrder } from "../pages/MyOrder"
import { SignIn } from "../pages/SignIn"
import { Favorites } from "../pages/Favorites"
import { NotFound } from "../pages/NotFound"
import { Navbar } from "../components/Navbar"
import { Layout } from "../components/Layout"
import { Home } from "../pages/Home"

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/Products/All", element: <Products /> },
    { path: "/Products/Category/:category", element: <Products /> },
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
