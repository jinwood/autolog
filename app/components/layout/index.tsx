import { ReactNode } from "react";
import { RedirectToSignIn, SignedIn, SignedOut } from "@clerk/nextjs";
import Header from "./header";
import Footer from "./footer";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <SignedIn>
        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
      <Footer />
    </div>
  );
};

export default Layout;
