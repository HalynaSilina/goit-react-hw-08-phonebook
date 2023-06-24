import { useDispatch, useSelector } from "react-redux";
import { userLogOut } from "redux/auth/authThunks";
import { getUser } from "redux/auth/selectors";

const UserMenu = () => {
const dispatch = useDispatch();
const user = useSelector(getUser);
return (
    <div>
      <p>Welcome, {user.name}</p>
      <button type="button" onClick={() => dispatch(userLogOut)}>
        Logout
      </button>
    </div>
  );
}
 export default UserMenu;