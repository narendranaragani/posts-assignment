import { useEffect, useState } from "react";

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
    <div>
      <h1>Post Dashboard</h1>
      <p>Total posts: {posts.length}</p>
    </div>
  </>
  )
  ;
}

export default App;
