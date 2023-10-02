"use client";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import Profile from "@components/profile";
import React from "react";

const ProfileBase = () => {
  const { data: session } = useSession();

  const [posts, setPosts] = useState();
  const router = useRouter();

  useEffect(() => {
    const fetchpost = async () => {
      const url = `/api/users/${session?.user.id}/posts`;
      const resp = await fetch(url);

      const data = await resp.json();
      setPosts(data);
    };
    if (session?.user.id) fetchpost();
  }, []);

  const handleEdit = (post) => {
    router.push(`/update-prompt?id=${post._id}`);
  };

  const handleDelete = async (post) => {
    const hasConfirmed = confirm(
      "Are you sure you want to delete this prompt?"
    );
    console.log(post);
    if (hasConfirmed) {
      try {
        const response = await fetch(`/api/prompt/${post._id.toString()}`, {
          method: "DELETE",
        });
        const filteredPost = posts.filter((p) => p._id !== post._id);

        setPosts(filteredPost);
      } catch (error) {
        console.log("err", error);
      }
    }
  };
  return (
    <Profile
      name="My"
      desc="welcome to your persionalized page"
      data={posts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    >
      Profile
    </Profile>
  );
};

export default ProfileBase;
