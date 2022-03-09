import { Box, Flex, Text, Icon } from "@chakra-ui/react";
import { useContext } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { fetchApi, baseURL } from "../utils/fetchApi";

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Flex alignItems="center" justifyContent="center" marginRight="1">
      <Icon
        as={FaArrowAltCircleLeft}
        onClick={() => scrollPrev()}
        fontSize="2xl"
        cursor="pointer"
      />
    </Flex>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Flex justifyContent="center" alignItems="center" marginLeft="1">
      <Icon
        as={FaArrowAltCircleRight}
        onClick={() => scrollNext()}
        fontSize="2xl"
        cursor="pointer"
      />
    </Flex>
  );
};

const Banner = ({ data }) => {
  return (
    <ScrollMenu
      LeftArrow={LeftArrow}
      RightArrow={RightArrow}
      style={{ overflow: "hidden" }}
    >
      {data.map((item) => (
        <Box itemId={item.id}>
          <a href={item?.url}>
            <Box
              width="300px"
              height="200px"
              bg="blackAlpha.300"
              margin="10px"
              borderRadius="10px"
              borderColor="gray.200"
              borderWidth="2px"
              overflow="hidden"
              position="relative"
            >
              <img
                src={item?.image?.url}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                alt="image"
              />
              <Box
                position="absolute"
                height="100px"
                bg="blackAlpha.800"
                width="100%"
                bottom="0"
                padding="5px"
              >
                <Text fontWeight="bold" fontSize="xl" color="white">
                  {item.title}
                </Text>
              </Box>
            </Box>
          </a>
        </Box>
      ))}
    </ScrollMenu>
  );
};

export default Banner;

// export async function getStaticProps() {
//   //   params: {pageNumber: '1', pageSize: '10', withThumbnails: 'false', location: 'us'},
//   const data = await fetchApi(
//     `${baseURL}/api/search/TrendingNewsAPI?pageNumber=1&pageSize=10&withThumbnails=false&location=us`
//   );

//   console.log(data);
//   return {
//     props: {
//       data: data?.value,
//     },
//   };
// }
