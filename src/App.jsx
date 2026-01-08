import { useEffect, useState } from "react";
import PostCard from "./components/PostCard.jsx";

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
  
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen w-screen">
        Loading...
      </div>
    );
  }

  if (error)
    return <p className="text-center text-red-500 mt-10">Error: {error}</p>;

  return (
    <>
      <div className="min-h-screen bg-[#050a18] px-6 py-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
