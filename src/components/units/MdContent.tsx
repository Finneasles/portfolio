import React, { useEffect } from "react";
import { useRemark } from "react-remark";

export const Component = ({ source }) => {
  const [content, setSource] = useRemark();
  useEffect(() => {
    setSource(source);
  }, [setSource, source]);

  return (
    <article className="mb-8 prose lg:prose-md prose-slate prose-img:rounded-xl dark:prose-headings:text-gray-200 dark:prose-p:text-slate-400">
      {content}
    </article>
  );
};

export default Component;
