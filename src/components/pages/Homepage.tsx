import {
  PublicationsSection as Publications,
  ProjectsSection as Projects,
  HeroSection as Hero,
  Layout,
} from "@/components";
import { useTranslation } from "react-i18next";

const pageTitle = "Home";

const Page = ({ posts, router }) => {
  const { t } = useTranslation();

  return (
    <Layout title={t("home_label")} router={router} transparentNav={true}>
      <Hero />
      <div className="body-container">
        <div className="main-section">
          <Projects allPosts={posts} src={"home"} />
          <Publications allPosts={posts} src={"home"} />
        </div>
      </div>
    </Layout>
  );
};

export default Page;
