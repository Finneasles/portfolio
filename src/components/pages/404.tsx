import { HeroSection as Hero, Layout } from "@/components";
import { useState } from "react";

const pageTitle = "Page not found";
export const Page = ({ router }) => {
  const [title] = useState(pageTitle);

  return (
    <Layout
      title={title}
      navbar={false}
      footer={false}
      cookieConsent={false}
      router={router}
      transparentNav={true}
    >
      <Hero size={"full"} src={"404"}/>
    </Layout>
  );
};

export default Page;
