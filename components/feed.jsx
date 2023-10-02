"use client";
import React from "react";
import { useState, useEffect } from "react";

import Promptcard from "./promptcard";
const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((post) => (
        <Promptcard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  );
};
const feed = () => {
  const [searchText, setSearchText] = useState("");
  const [posts, setPosts] = useState([]);

  const handleSearcgChange = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    const fetchpost = async () => {
      const resp = await fetch("api/prompt");
      const data = await resp.json();

      setPosts(data);
    };
    fetchpost();
  }, []);

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="search for a tag or a username"
          value={searchText}
          onChange={handleSearcgChange}
          required
          className="search_input peer"
        ></input>
      </form>

      <PromptCardList data={posts} handleTagClick={() => {}} />
    </section>
  );
};

export default feed;
