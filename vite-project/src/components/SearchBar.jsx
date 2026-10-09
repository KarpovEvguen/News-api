import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { searchNews } from "../redux/newsThunks";
import { Form, Input, SearchButton } from "../styles/SearchBar.style";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("search") || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search.trim()) return;

    setSearchParams({ search });
    dispatch(searchNews(search));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Search news..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <SearchButton type="submit">Search</SearchButton>
    </Form>
  );
}