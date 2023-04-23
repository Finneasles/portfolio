import { PublicationsPage } from "@/components";
import { getAllPostsWithFrontMatter } from "@/utils";

export default function Home({ postsData }) {
  return <PublicationsPage pageTitle={"Publications"} posts={postsData} />;
}

export async function getStaticProps() {
  const postsData = await getAllPostsWithFrontMatter("posts");
  return {
    props: {
      postsData,
    },
  };
}
