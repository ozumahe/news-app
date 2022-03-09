import Head from "next/head";
import { Box } from "@chakra-ui/react";

import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>News app</title>
      </Head>
      <Box>
        <header style={{ position: "sticky", top: "0", zIndex: "100" }}>
          <Navbar />
        </header>
        <main>{children}</main>
        <footer>
          <h1>Footer</h1>
        </footer>
      </Box>
    </>
  );
};

export default Layout;
