import axios from "axios";
import { initialState, setUsersProfileAC } from "../Redux/UsersReducer";
import React, { useEffect } from "react";
import UsersProfile from "./UsersProfile";
import { useState } from "react";

export default function UsersProfileContainer() {
  const UsersProfileContext = createContext();
  const request = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/api/v1/users`);
      setNewProfile(response.data.usersData[1]);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    request();
  }, []);
  return (
    <div>
      <UsersProfile usersProfileInfo={newProfile} />
    </div>
  );
}
