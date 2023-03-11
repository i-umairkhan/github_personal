/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#001A2A",
        golden: "#FDCB72",
        searchBar: "#052940",
      },
    },
  },
  plugins: [],
};
