import React from "react";
import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";
import { Container } from "@mantine/core";

const Posts = () => {
  const posts = useLoaderData();
  const initialPosts = posts.slice(0, 50);
  return (
    <Container className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 my-8">
      {initialPosts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </Container>
  );
};

export default Posts;
