import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { getFiles, getPostBySlug } from "@/utils";
import { ContentPage } from "@/components";
import { useRouter } from "next/router";

function Content({ frontMatter, markdownBody, t }) {
  const router = useRouter();

  return (
    <ContentPage
      {...{ source: { frontMatter, markdownBody }, t }}
      router={router}
    />
  );
}

export default Content;

export async function getStaticProps({ params }: Params) {
  const { frontMatter, markdownBody } = await getPostBySlug(params.content);

  return {
    props: {
      frontMatter,
      markdownBody,
    },
  };
}

export async function getStaticPaths() {
  const posts = await getFiles();
  const paths = posts.map((filename: string) => ({
    params: {
      content: filename.replace(/\.md/, ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}
