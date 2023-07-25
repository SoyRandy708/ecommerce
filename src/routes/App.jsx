import { useRoutes, BrowserRouter } from "react-router-dom"
import { ShoppingProvider } from "../context"
import { Products } from "../pages/Products"
import { Account } from "../pages/Account"
import { MyOrder } from "../pages/MyOrder"
import { Favorites } from "../pages/Favorites"
import { NotFound } from "../pages/NotFound"
import { Navbar } from "../components/Navbar"
import { Layout } from "../components/Layout"
import { Home } from "../pages/Home"
import { Toaster } from "sonner"

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/Products/All", element: <Products /> },
    { path: "/Products/Category/:category", element: <Products /> },
    { path: "/Products/Favorites", element: <Favorites /> },
    { path: "/Account", element: <Account /> },
    { path: "/MyOrder", element: <MyOrder /> },
    { path: "/*", element: <NotFound /> },
  ])

  return routes
}

function App() {

  return (
    <ShoppingProvider>      
      <BrowserRouter>
        <Navbar />
        <Toaster richColors duration={2500} />
        <Layout >
          <AppRoutes />
        </Layout>
      </BrowserRouter>
    </ShoppingProvider>
  )
}

export default App
