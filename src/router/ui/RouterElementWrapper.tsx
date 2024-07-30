import { Suspense } from "react";

import Footer from "@/components/footer";
import { Navbar } from "@/components/navbar";
import SwitcherBar from "@/components/switcherBar";
import { PageLoader } from "@/components/PageLoader";

const RouterElementWrapper = ({ children }: { children: React.ReactNode }) => {
  const beforeElipsStyles =
    "before:content-[''] before:absolute xl:before:w-[750px] before:h-[550px] before:left-[50px] before:top-[-150px] before:rounded-full before:bg-gradient-to-b before:from-[#AC962244] before:to-[#44490600] before:blur-[100px] ";

  return (
    <div className=" w4k:w-full w4k:mx-0 w4k:max-w-full h-full min-h-screen flex">
      <Suspense fallback="">
        <Navbar />

        <div className={`relative flex-1 flex flex-col ${beforeElipsStyles}`}>
          <SwitcherBar />

          <Suspense fallback={<PageLoader />}>{children}</Suspense>

          <footer className="xl:pt-0 w4k:gap-20 mx-auto gap-5 md:pl-10 lg:gap-10 w-[390px] md:w-full hidden sm:flex items-center justify-center py-3">
            <Footer />
          </footer>
        </div>
      </Suspense>
    </div>
  );
};

export default RouterElementWrapper;
