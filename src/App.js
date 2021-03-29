import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./redux/userReducer/users";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  const user = useSelector((state) => state.user.user);

  return (
    <div>
      <h1>This is Redux-Saga simplified</h1>
      {user && <p>Hello {user.firstName}!!!</p>}
    </div>
  );
}

export default App;
