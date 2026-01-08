import { useEffect, useState, useMemo } from "react";
import PostCard from "./components/PostCard.jsx";
import useDebounce from "./hooks/useDebounce.js";
import SearchBar from "./components/SearchBar.jsx";
import { BeatLoader } from "react-spinners";
import UserFilter from "./components/UserFilter.jsx";
import Pagination from "./components/Pagination.jsx";

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [selectedUser, setSelectedUser] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const postPerPages =9;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  const debounceSearch = useDebounce(searchText, 500);
  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesSearch = post.title
        .toLowerCase()
        .includes(debounceSearch.toLowerCase());
      const matchesUser =
        selectedUser === "" || post.userId === Number(selectedUser);
      return matchesSearch && matchesUser;
    });
  }, [posts, debounceSearch, selectedUser]);


  //Pagination Logic
  const totalPages = Math.ceil(filteredPosts.length / postPerPages);
  const startIndex = (currentPage - 1) * postPerPages;
  const endIndex = startIndex + postPerPages;

  const paginatedPosts = filteredPosts.slice(startIndex, endIndex);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen w-screen">
        <BeatLoader />
      </div>
    );
  }
  if (error)
    return <p className="text-center text-red-500 mt-10">Error: {error}</p>;

  return (
    <>
      <div className="min-h-screen bg-[#050a18] px-6 py-10">
        <div className="max-w-7xl mx-auto">
          <SearchBar searchText={searchText} setSearchText={setSearchText} />
          <UserFilter
            selectedUser={selectedUser}
            setSelectedUser={setSelectedUser}
          />
          {paginatedPosts.length === 0 ? (
            <div className="flex items-center justify-center h-[60vh]">
              <p className="text-gray-400 text-lg">No posts found</p>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {paginatedPosts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          )}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </>
  );
}

export default App;
