import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import "./App.css";
import Home from "./pages/home/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
  Navigate,
} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import { useSelector } from "react-redux";

function App() {
  const isLoginPage = window.location.pathname === "/login";
  const user = useSelector((state) => state.user.currentUser);

  return (
    <Router>
      {!user && window.location.pathname !== "/login" ? (
        <Navigate to="/login" />
      ) : (
        <>
          {!isLoginPage && <Topbar />}
          <div className="container">
            {!isLoginPage && <Sidebar />}
            <Routes>
              <Route path="/login" element={<Login />} />
              {user?.isAdmin && (
                <>
                  <Route exact path="/" element={<Home />} />
                  <Route path="/users" element={<UserList />} />
                  <Route path="/user/:userId" element={<User />} />
                  <Route path="/newUser" element={<NewUser />} />
                  <Route path="/products" element={<ProductList />} />
                  <Route path="/product/:productId" element={<Product />} />
                  <Route path="/newproduct" element={<NewProduct />} />
                </>
              )}
            </Routes>
          </div>
        </>
      )}
    </Router>
  );
}

export default App;
