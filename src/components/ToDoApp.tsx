"use client";
import { DeleteIcon } from "@/utils/Icons";
import React, { useState } from "react";
import CustomInput from "./common/CustomInput";
import { DATA_TABLE } from "@/utils/helper";
interface ToDoData {
  name: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}
const ToDoApp = () => {
  const toDoForm = {
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  };
  const [value, setValue] = useState<ToDoData>(toDoForm);
  const [error, setError] = useState(false);
  const [saveData, setSaveData] = useState<ToDoData[]>([]);
  const [showPassword, setShowPassword] = useState(false);
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  const showPasswordHandler = (e: any) => {
    e.preventDefault();
    setShowPassword((showPassword) => !showPassword);
  };

  const saveButtonHandler = (e: any) => {
    e.preventDefault();
    setError(true);
    if (
      value.name !== "" &&
      value.email !== "" &&
      value.phone !== "" &&
      value.password !== "" &&
      value.confirmPassword !== "" &&
      value.password.length >= 6 &&
      emailRegex.test(value.email) &&
      value.phone.length >= 10 &&
      value.confirmPassword.match(value.password) &&
      saveData.some((obj) => obj.email !== value.email)
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
    <div className="min-h-screen flex justify-center items-center py-20">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center">
        <h2 className="text-center text-4xl font-bold pb-16">TO DO List</h2>
        <form className="w-full flex flex-wrap items-center justify-center gap-8 max-lg:flex-col">
          <div className="w-4/12 max-lg:w-8/12 flex justify-center items-start flex-col">
            <p className="pl-0.5 pb-1 text-xl font-medium text-start max-lg:text-lg max-md:text-sm">
              Name
            </p>
            <CustomInput
              myOnChange={(e) => setValue({ ...value, name: e.target.value })}
              myValue={value.name}
              myType="text"
              myPlaceholder="Enter your name"
              myClass="w-full"
            />
            {error && !value.name && (
              <p className="text-red-500 text-base font-medium pl-1 max-lg:text-sm">
                Please enter your name
              </p>
            )}
          </div>
          <div className="w-4/12 max-lg:w-8/12">
            <p className="pl-0.5 pb-1 text-xl font-medium max-lg:text-lg max-md:text-sm">
              Email
            </p>
            <CustomInput
              myOnChange={(e) => setValue({ ...value, email: e.target.value })}
              myValue={value.email}
              myType="email"
              myPlaceholder="Enter your email"
              myClass="w-full"
            />
            {error && !value.email ? (
              <p className="text-red-500 text-base font-medium pl-1 max-lg:text-sm">
                Please enter your email
              </p>
            ) : !emailRegex.test(value.email) && value.email.length > 0 ? (
              <p className="text-red-500 text-base font-medium pl-1 max-lg:text-sm">
                Email must be unique
              </p>
            ) : saveData.some((obj) => obj.email === value.email) ? (
              <p className="text-red-500 text-base font-medium pl-1 max-lg:text-sm">
                Email is already exists
              </p>
            ) : (
              ""
            )}
          </div>
          <div className="w-4/12 max-lg:w-8/12">
            <p className="pl-0.5 pb-1 text-xl font-medium text-start max-lg:text-lg max-md:text-sm">
              Phone
            </p>
            <CustomInput
              myOnChange={(e) => setValue({ ...value, phone: e.target.value })}
              myValue={value.phone}
              myType="number"
              myPlaceholder="Enter your phone number"
              myClass="w-full"
            />
            {error && value.phone.length === 0 && !value.phone ? (
              <p className="text-red-500 text-base font-medium pl-1 max-lg:text-sm">
                Please enter your phone number
              </p>
            ) : value.phone.length < 10 && value.phone.length > 0 ? (
              <p className="text-red-500 text-base font-medium pl-1 max-lg:text-sm">
                Enter valid phone number
              </p>
            ) : (
              ""
            )}
          </div>
          <div className="w-4/12 max-lg:w-8/12">
            <p className="pl-0.5 pb-1 text-xl font-medium max-lg:text-lg max-md:text-sm">
              Password
            </p>
            <div className="border border-black rounded-xl flex items-center justify-between pr-2">
              <CustomInput
                myOnChange={(e) =>
                  setValue({ ...value, password: e.target.value })
                }
                myValue={value.password}
                myType={showPassword ? "text" : "password"}
                myPlaceholder="Enter your passowrd"
                myClass="w-full border-0"
              />
              <button onClick={showPasswordHandler}>
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            {error && value.password.length === 0 && !value.password ? (
              <p className="text-red-500 text-base font-medium pl-1 max-lg:text-sm">
                Please enter your password
              </p>
            ) : value.password.length < 6 && value.password.length > 0 ? (
              <p className="text-red-500 text-base font-medium pl-1 max-lg:text-sm">
                Password must be at least 6 characters long
              </p>
            ) : (
              ""
            )}
          </div>
          <div className="w-4/12 max-lg:w-8/12 flex justify-start items-start flex-col">
            <p className="pl-0.5 pb-1 text-xl font-medium text-start max-lg:text-lg max-md:text-sm">
              Confirm your password
            </p>
            <CustomInput
              myOnChange={(e) =>
                setValue({ ...value, confirmPassword: e.target.value })
              }
              myValue={value.confirmPassword}
              myType="password"
              myPlaceholder="Confirm your passoword"
              myClass="w-full"
            />
            {error && !value.confirmPassword ? (
              <p className="text-red-500 text-base font-medium pl-1 max-lg:text-sm">
                Please confirm your password
              </p>
            ) : !value.password.match(value.confirmPassword) &&
              value.confirmPassword.length > 0 ? (
              <p className="text-red-500 text-base font-medium pl-1 max-lg:text-sm">
                Password not matched
              </p>
            ) : (
              ""
            )}
          </div>
          <div className="w-4/12 max-lg:hidden"></div>
        </form>
        <button
          onClick={saveButtonHandler}
          className="bg-black text-white px-4 py-2.5 my-10 border border-transparent text-base font-normal rounded-lg hover:text-black hover:bg-transparent hover:border-black duration-300 ease-linear text-center flex justify-center items-center"
        >
          Add Data
        </button>
        <div className="w-full overflow-x-auto">
          <table className="table-auto w-full min-w-[500px] max-w-[1000px] mx-auto overflow-x-auto">
            <thead>
              <tr className="border-b border-black rounded-xl">
                {DATA_TABLE.map((obj, i) => (
                  <th
                    key={i}
                    className={`px-3 py-3 text-center whitespace-nowrap border-t border-black ${
                      i === 0 ? "border-x" : "border-r"
                    }`}
                  >
                    {obj}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {saveData.map((obj, i) => (
                <tr key={i} className="border-b border-black rounded-lg">
                  <td className="border-x border-t whitespace-nowrap px-4 py-3 text-center border-black">
                    {obj.name}
                  </td>
                  <td className="border-r border-t whitespace-nowrap px-4 py-3 text-center border-black">
                    {obj.email}
                  </td>
                  <td className="border-r border-t whitespace-nowrap px-4 py-3 text-center border-black">
                    {obj.phone}
                  </td>
                  <td className="border-r border-t whitespace-nowrap px-4 py-3 text-center border-black">
                    {obj.password}
                  </td>
                  <td className="border-r border-t whitespace-nowrap px-4 py-3 text-center border-black">
                    <button
                      onClick={() => removeDataHandler(i)}
                      className="py-1 px-2"
                    >
                      <DeleteIcon />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ToDoApp;
