// import { set } from "mongoose";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

function UserSignup() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  //   const [newUser, setNewUser] = useState({});
  const submithandler = (e) => {
    e.preventDefault();
    const newUser = {
      email: email,
      firstName: firstName,
      lastName: lastName,
      password: password,
    };
    console.log(newUser);
    // setNewUser(newUser);
    console.log("User created successfully!");
    setEmail("");
    setFirstName("");
    setLastName("");
    setPassword("");
  };
  const navigate = useNavigate();
  return (
    <div class="h-screen w-full flex flex-col justify-between">
      <div class="bg-black text-3xl text-white px-8 py-4 font-semibold w-full">
        Uber
      </div>
      <form onSubmit={submithandler} class="px-3 py-4 w-full gap-3">
        <p class="font-semibold ">What's your email address?</p>
        <input
          type="email"
          placeholder="example@gmail.com"
          class="border-2 border-none bg-[#eeeeee] w-full rounded-md px-4 py-2 mb-4"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p class="font-semibold ">Enter your name.</p>
        <div class="flex display-col gap-3  w-full">
          <input
            type="text"
            placeholder="First Name"
            class="w-1/2 border-white  rounded-md px-4 py-2 mb-4 bg-[#EEEEEE]"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />

          <input
            type="text"
            placeholder="Last Name"
            class="mr-5 w-1/2 border-2 border-white bg-[#eeeeee] rounded-md px-4 py-2 mb-4"
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <p class="font-semibold">Enter your password(atleast 6 characters).</p>
        <input
          type="password"
          placeholder="Password"
          class="bg-[#eeeeee] border-2 border-none rounded-md px-4 py-2 mb-4 w-full"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button class="text-white bg-black text-center w-full text-1.5xl  py-2 rounded-md">
          Register
        </button>
      </form>
      <div class="flex display-col gap-3 justify-between w-full px-3 py-4 ">
        <div class="w-1/2">
          <div>
            <p class="te">Already a user?</p>
          </div>

          <div>
            <Link
              to="/usersignin"
              class="   bg-[#10b461] flex items-center justify-center text-white font-semibold mb-5 rounded-lg px-4 py-2 w-0.8 text-lg placeholder:text-base"
            >
              signin as user
            </Link>
          </div>
        </div>

        <div class="w-1/2">
          <div>
            <p class="text-right">wanna join fleet?</p>
          </div>

          <div class="">
            <Link
              to="/captainsignup"
              class="   bg-[#b44c10] flex items-center justify-center text-white font-semibold mb-5 rounded-lg px-4 py-2 w-0.8 text-lg placeholder:text-base"
            >
              Captain signup
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default UserSignup;
