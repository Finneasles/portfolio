import React, { useEffect, useState } from "react";
import {
  Button,
  HeroCTAComponent,
  HeroDecorComponent,
  HeroTypographyComponent,
} from "@/components";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ImNpm } from "react-icons/im";
import { useTranslation } from "react-i18next";
import { useEntryEffect, useTypingEffect } from "@/hooks";

export const sizes = [{ lg: 64, md: 48, sm: 32 }];

interface SizeValues {
  lg: number;
  md: number;
  sm: number;
}

function getSizeValue(sizeKey: keyof SizeValues): number | undefined {
  const [size] = sizes;
  return size[sizeKey];
}

export const Section = ({ size }: { size?: string; className?: string }) => {
  return (
    <section className="hero-section">
      <div className="relative mx-auto flex h-full w-full max-w-4xl items-center justify-between transition-all">
        <div className="relative z-[2] w-full flex-1 flex-wrap items-center">
          <HeroTypographyComponent />
          <HeroCTAComponent />
        </div>
        <div className="absolute top-0 bottom-0 hidden w-full justify-end lg:flex">
          <div className="h-full w-[50%] content-center items-center justify-center">
            <HeroDecorComponent />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
