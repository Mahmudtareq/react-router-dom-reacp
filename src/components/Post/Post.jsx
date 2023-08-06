import { Button, Card, Group } from "@mantine/core";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Post = ({ post }) => {
  const { body, title, id } = post;
  const navigate = useNavigate();
  const handlenavigation = () => {
    navigate(`/post/${id}`);
  };
  return (
    <div>
      <Card className="bg-indigo-400 p-4 h-[280px]">
        <h3 className="text-yellow-50 ">Name: {title}</h3>
        <p>{body}</p>
        {/* <Button variant="white" color="teal" className=" my-3">
          <Link to={`/post/${id}`} className="no-underline">
            Show Details
          </Link>
              </Button> */}
        <Group position="right">
          <Button
            variant="gradient"
            gradient={{ from: "teal", to: "lime", deg: 105 }}
            radius="md"
            size="md"
            onClick={handlenavigation}
          >
            Details
          </Button>
        </Group>
      </Card>
    </div>
  );
};

export default Post;
