import { useRouter } from "next/router";
import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { baseURL, fetchApi } from "../utils/fetchApi";
import News from "../components/News";

const Search = ({ newsData }) => {
  const router = useRouter();

  return (
    <Box>
      <Box padding={"10px"} maxWidth="650px" margin="auto">
        {newsData.map((news) => (
          <News key={news.id} {...news} />
        ))}
      </Box>
    </Box>
  );
};

export default Search;

export async function getServerSideProps({ query }) {
  const search = query.search;

  const newsData = await fetchApi(
    `${baseURL}/api/search/NewsSearchAPI?q=${search}&pageNumber=1&pageSize=50&autoCorrect=true`
  );

  return {
    props: {
      newsData: newsData?.value,
    },
  };
}
