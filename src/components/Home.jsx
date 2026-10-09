import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTopHeadlines } from "../redux/newsThunks";
import NewsList from "../components/NewsList";

export default function Home() {
  const dispatch = useDispatch();
  const { articles, status, error } = useSelector((state) => state.news);

  useEffect(() => {
    if (articles.length === 0) {
      dispatch(fetchTopHeadlines("technology"));
    }
  }, [dispatch, articles.length]);

  return (
    <div>
      <h2>Головна сторінка з новинами</h2>

      {status === "loading" && <p>Завантаження новин...</p>}

      {error && <p style={{ color: "red" }}>Помилка: {error}</p>}

      {status === "succeeded" && articles.length === 0 && (
        <p>No articles found.</p>
      )}

      <NewsList articles={articles} />
    </div>
  );
}