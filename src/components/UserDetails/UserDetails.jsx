import { Card } from "@mantine/core";
import React from "react";
import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
  const singleUser = useLoaderData();
  const { name, email, phone, address, userName } = singleUser;
  // console.log(singleUser);
  return (
    <div>
      <Card>
        <h4>Name: {name}</h4>
        <p>Email: {email}</p>
        <span>Phone: {phone}</span>
        <p>City: {address.city}</p>
        <p>UserName :{userName}</p>
      </Card>
    </div>
  );
};

export default UserDetails;
