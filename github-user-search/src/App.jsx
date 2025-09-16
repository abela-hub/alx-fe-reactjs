import { useState } from "react";
import Search from "./components/Search";
import SearchResults from "./components/SearchResults";
import { searchUsers } from "./services/githubService";

function App() {
  const [users, setUsers] = useState([]);

  const handleSearch = async (filters) => {
    try {
      const results = await searchUsers(filters);
      setUsers(results);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        GitHub User Search
      </h1>
      <Search onSearch={handleSearch} />
      <SearchResults users={users} />
    </div>
  );
}

export default App;
