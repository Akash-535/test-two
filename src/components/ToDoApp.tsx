"use client";
import { DeleteIcon } from "@/app/utils/Icons";
import React, { useState } from "react";

const ToDoApp = () => {
  const toDoForm = {
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  };
  const [value, setValue] = useState(toDoForm);
  const [error, setError] = useState(false);
  const [saveData, setSaveData] = useState([]);
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  const saveButtonHandler = (e: any) => {
    e.preventDefault();
    setError(true);
    if (
      value.name !== "" &&
      value.email !== "" &&
      value.password !== "" &&
      value.confirmPassword !== "" &&
      value.phone !== "" &&
      value.password.length >= 6 &&
      emailRegex.test(value.email) &&
      value.phone.length >= 10 &&
      value.confirmPassword.match(value.password)
    ) {
      setSaveData([...saveData, value] as any);
      setValue(toDoForm);
      setError(false);
    }
  };
  const removeDataHandler = (index: number) => {
    setSaveData((removeData) => removeData.filter((_, i) => i !== index));
  };
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center">
        <h2 className="text-center text-4xl font-bold pb-16">TO DO List</h2>
        <form className="w-full flex flex-wrap items-center justify-center gap-8">
          <div className="w-4/12 flex justify-center items-start flex-col">
            <p className="pl-0.5 pb-1 text-xl font-medium text-start">Name</p>
            <input
              type="text"
              onChange={(e) => setValue({ ...value, name: e.target.value })}
              value={value.name}
              placeholder="Enter your name"
              className="placeholder:text-black placeholder:text-lg placeholder:font-medium font-medium text-lg text-black rounded-xl px-3 py-4 w-full border border-black outline-none"
            />
            {error && !value.name && (
              <p className="text-red-500 text-base font-medium pl-1">
                Please enter your name
              </p>
            )}
          </div>
          <div className="w-4/12">
            <p className="pl-0.5 pb-1 text-xl font-medium">Email</p>
            <input
              type="email"
              onChange={(e) => setValue({ ...value, email: e.target.value })}
              value={value.email}
              placeholder="Enter your email"
              className="placeholder:text-black placeholder:text-lg placeholder:font-medium font-medium text-lg text-black rounded-xl px-3 py-4 w-full border border-black outline-none"
            />
            {error && !value.email ? (
              <p className="text-red-500 text-base font-medium pl-1">
                Please enter your email
              </p>
            ) : !emailRegex.test(value.email) && value.email.length > 0 ? (
              <p className="text-red-500 text-base font-medium pl-1">
                Email must be unique
              </p>
            ) : (
              ""
            )}
          </div>
          <div className="w-4/12 flex justify-center items-start flex-col">
            <p className="pl-0.5 pb-1 text-xl font-medium text-start">Phone</p>
            <input
              type="number"
              onChange={(e) => setValue({ ...value, phone: e.target.value })}
              value={value.phone}
              placeholder="Enter your phone number"
              className="placeholder:text-black placeholder:text-lg placeholder:font-medium font-medium text-lg text-black rounded-xl px-3 py-4 w-full border border-black outline-none"
            />
            {error && value.phone.length === 0 && !value.phone ? (
              <p className="text-red-500 text-base font-medium pl-1">
                Please enter your phone number
              </p>
            ) : value.phone.length < 10 && value.phone.length > 0 ? (
              <p className="text-red-500 text-base font-medium pl-1">
                Enter valid phone number
              </p>
            ) : (
              ""
            )}
          </div>
          <div className="w-4/12">
            <p className="pl-0.5 pb-1 text-xl font-medium">Password</p>
            <input
              type="password"
              onChange={(e) => setValue({ ...value, password: e.target.value })}
              value={value.password}
              placeholder="Enter your password"
              className="placeholder:text-black placeholder:text-lg placeholder:font-medium font-medium text-lg text-black rounded-xl px-3 py-4 w-full border border-black outline-none"
            />
            {error && value.password.length === 0 && !value.password ? (
              <p className="text-red-500 text-base font-medium pl-1">
                Please enter your password
              </p>
            ) : value.password.length < 6 && value.password.length > 0 ? (
              <p className="text-red-500 text-base font-medium pl-1">
                Password must be at least 6 characters long
              </p>
            ) : (
              ""
            )}
          </div>
          <div className="w-4/12 flex justify-start items-start flex-col">
            <p className="pl-0.5 pb-1 text-xl font-medium text-start">
              Confirm your password
            </p>
            <input
              type="text"
              onChange={(e) =>
                setValue({ ...value, confirmPassword: e.target.value })
              }
              value={value.confirmPassword}
              placeholder="Confirm your password"
              className="placeholder:text-black placeholder:text-lg placeholder:font-medium font-medium text-lg text-black rounded-xl px-3 py-4 w-full border border-black outline-none"
            />
            {error && !value.confirmPassword ? (
              <p className="text-red-500 text-base font-medium pl-1">
                Please confirm your password
              </p>
            ) : !value.password.match(value.confirmPassword) &&
              value.confirmPassword.length > 0 ? (
              <p className="text-red-500 text-base font-medium pl-1">
                Password not matched
              </p>
            ) : (
              ""
            )}
          </div>
        </form>
        <button
          onClick={saveButtonHandler}
          className="bg-black text-white px-4 py-2.5 my-10 border border-transparent text-base font-normal rounded-lg hover:text-black hover:bg-transparent hover:border-black duration-300 ease-linear text-center flex justify-center items-center"
        >
          Add Data
        </button>
        <div className="border border-white rounded-lg">
          <div className="flex text-center">
            <p className="min-w-48 py-4">Name</p>
            <p className=" border-x border-white min-w-48 py-4">Email</p>
            <p className=" min-w-48 py-4 border-r-0">Phone</p>
          </div>
          {saveData.map((obj, i) => (
            <div key={i} className="flex text-center border-t border-white">
              <button onClick={() => removeDataHandler(i)}>
                <DeleteIcon />
              </button>
              <p className="min-w-48 p-2">{obj.name}</p>
              <p className="border-x border-white min-w-48 p-2">{obj.email}</p>
              <p className="p-2 min-w-48">{obj.phone}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToDoApp;
