import { Button, Card } from "@mantine/core";
import React from "react";
import { Link } from "react-router-dom";

const User = ({ user }) => {
  const { name, phone, email, id } = user;
  return (
    <div className="">
      <Card className="bg-indigo-400 p-4 h-[180px]">
        <h3 className="text-yellow-50">Name: {name}</h3>
        <p>Phone: {phone}</p>
        <span>Email: {email}</span>
        <Button variant="white" color="teal" className=" my-3">
          <Link to={`/user/${id}`} className="no-underline">
            Show Details
          </Link>
        </Button>
      </Card>
    </div>
  );
};

export default User;
