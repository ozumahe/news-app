import Link from "next/link";
import { useState } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { FaArrowCircleUp, FaArrowCircleDown } from "react-icons/fa";

const DefaultNewsImage = "../assets/images/defaultNewsImage.jpg";

const News = ({ id, title, description, body, image }) => {
  const [showBody, setShowBody] = useState(false);

  return (
    <Box marginBottom="20px" cursor="pointer">
      <Box
        width="100%"
        borderColor="gray.200"
        borderRadius="10px"
        overflow="hidden"
        borderWidth="2px"
      >
        <Box width="100%">
          <img
            src={image.url}
            alt="image"
            style={{ objectFit: "contain", width: "100%", height: "100%" }}
          />
        </Box>
        <Box padding="10px">
          <Text fontSize="md" fontWeight="bold">
            {title}
          </Text>
          <Flex
            fontSize="2xl"
            color="blue.300"
            justifyContent="end"
            onClick={() => setShowBody(!showBody)}
          >
            {showBody ? <FaArrowCircleUp /> : <FaArrowCircleDown />}
          </Flex>
          <Box>
            {showBody ? (
              <Text>{body}</Text>
            ) : (
              <Text>
                {description.length > 200
                  ? `${description.substring(0, 200)}...`
                  : description}
              </Text>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default News;
