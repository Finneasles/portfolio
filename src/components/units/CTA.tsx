import { useTranslation } from "react-i18next";
import { FaUser } from "react-icons/fa";
import { Button } from "@/components";
import React from "react";

export const Component = () => {
  const { t } = useTranslation();
  return (
    <div className="flex h-[44px] items-center justify-between space-x-1 drop-shadow">
      <Button
        className={"h-full bg-white px-4 text-[0056BD] text-opacity-70"}
        href="/about"
        ariaLabel={t("signIn_label")}
        icon={<FaUser />}
        variant={"secondary"}
      />
      <Button
        href="/hire"
        onClick={(e) => {
          e.preventDefault();
          const subject = encodeURIComponent("Interested In Hiring You");
          const body = encodeURIComponent(
            `Hi Fin,\n\nAI came across your website and I'd love to discuss potential projects with you and see if we can work together.\n\nABest regards,%0D%0A[Your Name]`
          );
          window.location.href = `mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}?subject=${subject}&body=${body}`;
        }}
        className="h-full px-6"
        ariaLabel={"Contact me"}
      >
        {t("hireMe_label")}
      </Button>
    </div>
  );
};

export default Component;
