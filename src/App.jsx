import NewsCard from './components/NewsCard'
import NewsList from './components/NewsList'
import Favorites from './components/Favorites'
import Home from './components/Home';
import { Routes, Route } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import './App.css'


export default function App() {
  return (
    <div>
      <NewsCard></NewsCard>
      <NewsList></NewsList>
      <SearchBar />

      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

