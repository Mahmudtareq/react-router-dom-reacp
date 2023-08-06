import { Container } from "@mantine/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { BarChart, Bar, ResponsiveContainer } from "recharts";

const Axios = () => {
  const [phone, setPhone] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = axios.get(
          "https://openapi.programming-hero.com/api/phones?search=iphone"
        );
        const data = (await response).data;
        setPhone(data.data); //check data inside data
        setLoading(false);
      } catch (error) {
        setError("Error fetching data");
        setLoading(false);
      }
    };
    fetchdata();
  }, []);
  if (loading) {
    return <div className="text-blue-600 text-lg">Loading</div>;
  }
  if (error) {
    return <p className="text-red-700 text-lg">{error}</p>;
  }
  const phoneData = phone.map((phoneItem) => {
    const p = phoneItem.slug.split("-");
    const price = parseInt(p[1]);
    const singlePhone = {
      name: phoneItem.phone_name,
      price: price,
    };
    return singlePhone;
  });
  return (
    <Container>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={phoneData}>
          <Bar dataKey="price" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </Container>
  );
};

export default Axios;
