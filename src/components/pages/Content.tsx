import {
  RelatedArticlesSection,
  CommentSection,
  MdContent,
  Thumbnail,
  Author,
  HeroSection as Hero,
  Layout,
} from "@/components";
import { useState } from "react";

export const Page = ({ source, router }) => {
  const [author] = useState(source.frontMatter.author);
  const [title] = useState(source.frontMatter.title);
  const [description] = useState(source.frontMatter.description);
  const [thumbnail] = useState(source.frontMatter.figure);
  const [thumbnailCaption] = useState(source.frontMatter.figcaption);
  const [content] = useState(source.markdownBody);
  const [comments] = useState(source.frontMatter.comments);
  const [isPage] = useState(source.frontMatter.page);
  const [hero] = useState(source.frontMatter.hero);
  const [slug] = useState(source.slug);
  const [relatedArticles] = useState(source.frontMatter.relatedArticles);
  const articleStyle =
    "format format-sm sm:format-base lg:format-lg format-blue dark:format-invert w-full";
  return (
    <Layout
      title={title}
      router={router}
      pageDesc={description}
      thumbSrc={thumbnail}
      transparentNav={hero ? true : false}
    >
      {hero ? <Hero src={"about"} pageDesc={description} /> : null}
      <div className="body-container">
        <main className="main-section">
          <article className={articleStyle + hero ? "" : "py-32"}>
            <header className="not-format mb-2 lg:mb-6">
              <h1 className="section-title-l">{title}</h1>
              {!isPage && description ? <p>{description}</p> : null}
              {thumbnail ? (
                <Thumbnail
                  src={thumbnail}
                  alt={title + " Thumbnail"}
                  caption={thumbnailCaption}
                />
              ) : null}
            </header>
            <div className="space-y-24">
              <div>
                <MdContent source={content} />
              </div>{" "}
              <footer>
                {author ? <Author data={author} /> : null}
                {comments ? (
                  <CommentSection data={{ title }} router={router} />
                ) : null}
              </footer>
            </div>
          </article>
        </main>
      </div>
      {relatedArticles ? <RelatedArticlesSection /> : null}
    </Layout>
  );
};

export default Page;
