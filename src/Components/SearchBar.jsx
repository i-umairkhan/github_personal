import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Divider from "@mui/material/Divider";
import { Alert, Collapse } from "@mui/material";
import { useState } from "react";

function SearchBar() {
  const [user, setUser] = useState("");
  const [error, setError] = useState("");
  const fetchUser = async () => {
    const res = await fetch(`https://api.github.com/users/${user}`);
    const data = await res.json();
    console.log(data);
    if (data.message == "Not Found") {
      setError("Error");
    } else {
      setError("");
    }
  };
  return (
    <div className="w-2/5">
      <div className="flex  justify-between rounded-md bg-searchBar px-3 py-2">
        <div className="self-center text-white">
          User
          <ArrowDropDownIcon className="mx-2 cursor-pointer" />
        </div>
        <Divider className="bg-gray-500" orientation="vertical" />
        <input
          className="ml-3 flex-1 bg-searchBar text-gray-300 outline-none"
          type="text"
          onChange={(e) => setUser(e.target.value)}
          value={user}
          placeholder="Enter your github username"
        />
        <button
          className="ml-2 rounded-md bg-golden px-3 py-2 font-bold text-dark-blue hover:opacity-75"
          onClick={fetchUser}
        >
          Search
        </button>
      </div>
      {error ? (
        <Alert
          className="mt-4"
          onClose={() => {
            setError("");
            setUser("");
          }}
          severity="error"
        >
          No User Found with this usename.
        </Alert>
      ) : null}
    </div>
  );
}

export default SearchBar;
