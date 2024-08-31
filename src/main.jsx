import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Login, Home, Signup, Contact, About, MyAccount, Profile, EditProfile, Wishlist, Cart, Orders, OrderStatus, Product, ProductDetails, Checkout } from './pages/index.js'
import { Provider } from 'react-redux'
import store from './store/store.js'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/account",
        element: <MyAccount />,
        children: [
          {
            path: "profile?",
            element: <Profile />
          },
          {
            path: "wishlist",
            element: <Wishlist />
          },
          {
            path: "cart",
            element: <Cart />,
          },
          {
            path: "cart/checkout",
            element: <Checkout />,
          },
          {
            path: "orders",
            element: <Orders />,
          },
          {
            path: "orders/:orderId?",
            element: <OrderStatus />
          }
        ]
      },
      {
        path: "/product",
        element: <Product />,
      },
      {
        path: "product/:productId?",
        element: <ProductDetails />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/signup",
        element: <Signup />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
