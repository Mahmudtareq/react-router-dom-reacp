import React from "react";
import Menubar from "../Menubar/Menubar";
import { Outlet, useNavigation } from "react-router-dom";
import FooterPage from "../../pages/FooterPage";
import { Center, Loader } from "@mantine/core";

const Root = () => {
  const navigation = useNavigation();
  return (
    <>
      <Menubar />
      <Center className="mt-5 ">
        {navigation.state === "loading" && <Loader color="red" size="xl" />}
      </Center>
      <Outlet />
      <FooterPage />
    </>
  );
};

export default Root;
