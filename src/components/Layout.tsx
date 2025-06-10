import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { AnimatedPage } from "./AnimatedPage";

interface LayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Navbar />
      <main className="flex-grow pt-16">
        <AnimatedPage>
          {children}
        </AnimatedPage>
      </main>
      <Footer />
    </div>
  );
}; 