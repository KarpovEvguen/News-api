import NewsCard from "./NewsCard";
import { List } from "../styles/NewsList.styles";

export default function NewsList({ articles = [] }) {
  if (!articles || articles.length === 0) {
    return null; 
  }

  return (
    <List>
      {articles.map((article) => (
        <NewsCard key={article.url} article={article} />
      ))}
    </List>
  );
}