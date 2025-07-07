import React, { createContext, useState } from "react";

// Create context
export const UserContext = createContext();

// Provider component
export const UserProvider = ({ children }) => {
  const [firstName, setFirstName] = useState("");
  const [phoneNum,setPhoneNum]  = useState("");
  const [email,setEmail] =useState("");
  const [message,setMessage]=useState("");
  const [subject,setSubject]=useState("");

  const value = {
    firstName,
    setFirstName,
    phoneNum,
    setPhoneNum,
    email,
    setEmail,
    message,
    setMessage,
    subject,
    setSubject
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};
