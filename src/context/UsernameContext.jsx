import React from "react";

export const UsernameContext = React.createContext();

export const UsernameStorage = ({ children }) => {
  const [value, setValue] = React.useState("");
  const [username, setUsername] = React.useState("rodrigomsrocha");

  function updateSearch(inputValue) {
    setValue(inputValue);
  }

  function updateUsername(search) {
    setUsername(search);
  }

  return (
    <UsernameContext.Provider
      value={{
        value,
        setValue,
        username,
        setUsername,
        updateSearch,
        updateUsername,
      }}
    >
      {children}
    </UsernameContext.Provider>
  );
};
