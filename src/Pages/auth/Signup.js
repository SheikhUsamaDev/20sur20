import React from "react";
import SignUp from "../../Components/SignUp";
import { useAuth } from "../../hook/useAuth";

export default function Signup() {
  useAuth();
  return (
    <div>
      <SignUp />
    </div>
  );
}
