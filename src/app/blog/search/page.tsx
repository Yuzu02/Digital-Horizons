import SearchBar from "@/components/blog/SearchInput";
import React from "react";

const page = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-4 text-2xl font-bold">Buscar Blogs</h1>
      <SearchBar />
    </div>
  );
};

export default page;
