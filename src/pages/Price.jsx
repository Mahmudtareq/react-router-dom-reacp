import React from "react";
import { useLoaderData } from "react-router-dom";
import User from "../components/User/User";
import { Container } from "@mantine/core";

const Price = () => {
  const users = useLoaderData();

  return (
    <Container className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 my-8">
      {users.map((user) => (
        <User user={user} key={user.id} />
      ))}
    </Container>
  );
};

export default Price;
