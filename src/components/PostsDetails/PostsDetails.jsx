import { Button, Card, Text, Title } from "@mantine/core";
import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const PostsDetails = () => {
  const singlePost = useLoaderData();
  const { title, body } = singlePost;
  const navigate = useNavigate();
  const handleGoback = () => {
    navigate(-1);
  };
  //   console.log(singlePost);
  return (
    <div>
      <Card className="bg-red-300  w-[500px] mx-auto my-4">
        <Title
          order={3}
          className="text-start text-emerald-200 my-3 capitalize
        "
        >
          {title}
        </Title>
        <Text className="text-justify text-yellow-100">{body}</Text>
        <Button
          onClick={handleGoback}
          className="my-3"
          variant="gradient"
          gradient={{ from: "indigo", to: "cyan" }}
        >
          Go Back
        </Button>
      </Card>
    </div>
  );
};

export default PostsDetails;
