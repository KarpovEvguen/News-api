import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../redux/favoritesSlice";
import { Card, Image, Content, Title, Description, Button } from "../styles/NewsCard.styles";

const placeholder = "https://placehold.co/400x250?text=No+Image";

export default function NewsCard({ article }) {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.items);

  if (!article) return null;

  const isFavorite = favorites.some((favorite) => favorite?.url === article.url);

  const handleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(article.url));
    } else {
      dispatch(addFavorite(article));
    }
  };

  return (
    <Card>
      <Image src={article.urlToImage || placeholder} alt={article.title || "News"} />
      <Content>
        <Title>{article.title || "No title available"}</Title>
        <Description>{article.description || "No description available"}</Description>
        <Button onClick={handleFavorite} $isFavorite={isFavorite}>
          {isFavorite ? "❤️ Remove" : "🤍 Add to favorites"}
        </Button>
      </Content>
    </Card>
  );
}