import Head from "next/head";
import Image from "next/image";

import { fetchApi, baseURL } from "../utils/fetchApi";
import { Box, Flex } from "@chakra-ui/react";

import News from "../components/News";
import Banner from "../components/Banner";

export default function Home({ newsData, trendingNews }) {
  console.log(trendingNews);
  return (
    <Box>
      <Box>
        <Banner data={trendingNews} />
      </Box>
      <Box padding={"10px"} maxWidth="650px" margin="auto">
        {newsData.map((news) => (
          <News key={news.id} {...news} />
        ))}
      </Box>
    </Box>
  );
}

export async function getStaticProps() {
  //  q: 'taylor swift',
  //   pageNumber: '3',
  //   pageSize: '40',
  //   autoCorrect: 'true',
  const newsData = await fetchApi(
    `${baseURL}/api/search/NewsSearchAPI?q=latest&pageNumber=1&pageSize=50&autoCorrect=true`
  );
  const trendingNews = await fetchApi(
    `${baseURL}/api/search/TrendingNewsAPI?pageNumber=1&pageSize=50&withThumbnails=false&location=us`
  );

  return {
    props: {
      newsData: newsData?.value,
      trendingNews: trendingNews?.value,
    },
  };
}
