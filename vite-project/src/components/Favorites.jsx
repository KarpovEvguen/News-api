import { useSelector } from "react-redux";
import NewsList from "../components/NewsList";

export default function Favorites() {
  const favorites = useSelector((state) => state.favorites.items);

  if (favorites.length === 0) {
    return (
      <h2>You don't have favorite news yet.</h2>
    );
  }

  return <NewsList articles={favorites} />;
}