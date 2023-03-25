import React from "react";
import { useSelector } from "react-redux";
import RootAuthed from "./RootAuthed";
import RootGuest from "./RootGuest";

const RootPage = () => {
  const auth = useSelector((state) => state.auth);

  return <>{auth.user ? <RootAuthed /> : <RootGuest />}</>;
};

export default RootPage;
