import { useDispatch, useSelector } from "react-redux";
import classes from "./Header.module.css";
import { logout } from "../store/authSlice";

const Header = () => {
  const isLogin = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isLogin && (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={() => dispatch(logout())}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
