import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "./features/tableSlice";

const Users = () => {
  const users = useSelector((state) => state.tables.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  useEffect(() => {
    console.log(users);
  }, [users]);
  return <div>Users</div>;
};

export default Users;
