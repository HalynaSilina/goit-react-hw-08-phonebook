import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLogOut } from "redux/auth/authThunks";
import { getUser } from "redux/auth/selectors";

const UserMenu = () => {
const dispatch = useDispatch();
const user = useSelector(getUser);
const navigate = useNavigate();
const handleLogOut = () => {
  dispatch(userLogOut())
  navigate('/', { replace: true })
}

return (
    <div>
      <p>Welcome, {user.name}</p>
      <button type="button" onClick={handleLogOut}>
        Logout
      </button>
    </div>
  );
}
 export default UserMenu;