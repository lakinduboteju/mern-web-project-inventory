import {BrowserRouter, Routes, Route, Link, Outlet} from "react-router-dom";
import Home from "./pages/Home";
import User from "./pages/User";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route path="user" element={<User />} />
              </Route>
          </Routes>
      </BrowserRouter>
  );
}

function Layout() {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/user">User</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    );
}

export default App;
