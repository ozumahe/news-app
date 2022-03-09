import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  InputRightAddon,
  InputGroup,
  Input,
  Box,
  Flex,
  Text,
  background,
} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import { baseURL, fetchApi } from "../utils/fetchApi";
import { fetchData } from "../utils/fetchData";

const Navbar = () => {
  const [value, setValue] = React.useState("");
  const [autoCompleteFData, setautoCompleteFData] = useState([]);
  const [filteredData, setFilteredData] = useState(fetchData);
  const [showBox, setShowBox] = useState(false);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const filter = filteredData.filter((data) => {
    return data.includes(`${value}`);
  });

  return (
    <>
      <Flex
        justifyContent="space-around"
        position="sticky"
        top="0"
        bg="white"
        padding="10px"
        borderBottomWidth="3px"
        borderColor="gray.200"
      >
        <Box>
          <Text fontWeight="bold" color="blue.400" fontSize="2xl">
            NewsApp
          </Text>
        </Box>
        <Flex flex="0.9">
          <InputGroup size="sm">
            <Input value={value} onChange={handleChange} />
            <InputRightAddon children="SEARCH" />
          </InputGroup>
        </Flex>
      </Flex>
      {value ? (
        <Box
          width="100%"
          position="absolute"
          top="60px"
          margin="auto"
          bg=" rgba( 0, 0, 0, 0.5 );"
          backdropBlur="blur( 7.5px )"
          border="1px solid rgba( 255, 255, 255, 0.18 )"
        >
          <Box maxWidth="650px" margin="auto">
            {filter.map((fil) => (
              <Link href={`/search?search=${fil}`}>
                <Box
                  onClick={() => setValue("")}
                  fontSize="lg"
                  borderBottomWidth="2px"
                  borderColor="blue.200"
                  width="100%"
                  _hover={{ background: "gray.100" }}
                  bg="white"
                  padding="8px"
                  cursor="pointer"
                >
                  {fil}
                </Box>
              </Link>
            ))}
          </Box>
        </Box>
      ) : null}
    </>
  );
};

export default Navbar;
