import { Button, Container } from "@mantine/core";
import React, { useEffect, useState } from "react";

const UseEffectHook = () => {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);
  const [user, setUser] = useState([]);
  useEffect(() => {
    // Fetch data from an API
    const fetchdata = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const jsondata = await response.json();
        setUser(jsondata);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchdata(); // Call the async function immediately
    // cleanup function
    return () => {};
  }, []);

  return (
    <Container className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 mt-10">
      {user.map((item) => (
        <div className="bg-red-100 rounded-md p-4" key={item.id}>
          <li className="p-2 text-purple-600 list-none">Name: {item.name}</li>
          <li className="p-2 text-dark list-none">Website: {item.website}</li>
        </div>
      ))}
    </Container>
  );
};

export default UseEffectHook;
