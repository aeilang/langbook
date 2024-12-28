import { type HomeLayoutProps } from "fumadocs-ui/home-layout";
import Image from "next/image";

/**
 * Shared layout configurations
 *
 * you can configure layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
const Icon = () => {
  return (
    <div className="flex space-x-1 justify-center items-center">
      <Image src="/gobook/icon.png" alt="lang" width={25} height={25} />
      <h1>LangBook</h1>
    </div>
  );
};

export const baseOptions: HomeLayoutProps = {
  nav: {
    title: <Icon />,
    url: "/",
  },
  githubUrl: "http://github.com/aeilang/langbook",
};
