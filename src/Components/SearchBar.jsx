import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function SearchBar() {
  return (
    <div className="flex w-2/5 justify-between rounded-md bg-searchBar px-3 py-2">
      <div className="self-center text-white">
        User
        <ArrowDropDownIcon className="mx-2 cursor-pointer" />
      </div>
      <input
        className="flex-1 bg-searchBar text-white outline-none"
        type="text"
        placeholder="Enter your github username"
      />
      <button className="ml-2 rounded-md bg-golden px-3 py-2 font-bold text-dark-blue hover:opacity-75">
        Search
      </button>
    </div>
  );
}

export default SearchBar;
