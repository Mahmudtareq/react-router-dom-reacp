import { Center, Text, Title } from "@mantine/core";
import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  return (
    <div id="error-page" className="w-[500px] mx-auto ">
      <Center className="mt-8">
        <Title order={2}>Oops!</Title>
        <Title order={4} className="text-blue-500">
          Sorry, an unexpected error has occurred.
        </Title>
        <Text className="text-red-600 ">
          <i>{error.statusText || error.message}</i>
        </Text>
      </Center>
    </div>
  );
};

export default Error;
