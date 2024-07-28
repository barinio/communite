import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";
import SwitcherBar from "@/components/switcherBar";

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  const beforeElipsStyles =
    "before:content-[''] before:absolute xl:before:w-[750px] before:h-[550px] before:left-[50px] before:top-[-150px] before:rounded-full before:bg-gradient-to-b before:from-[#AC962244] before:to-[#44490600] before:blur-[100px] ";

  return (
    // container px-2 xl:px-6
    <div className=" w4k:w-full w4k:mx-0 w4k:max-w-full h-full min-h-screen flex">
      <Navbar />

      <div className={`relative flex-1 flex flex-col ${beforeElipsStyles}`}>
        <SwitcherBar />

        <main className="m-auto w-[390px] md:w-full">
          <section className="w-[390px] md:w-auto flex flex-col items-center justify-center gap-4 py-10 md:py-5 ">
            {/* md:pl-12 lg:pr-28 */}
            <div className="w4k:w-full w4k:flex-1 flex flex-col xl:flex-row items-center justify-center pl-0   pr-5  gap-10">
              {children}
            </div>
          </section>
        </main>

        <footer className="xl:pt-0 w4k:gap-20 mx-auto gap-5 md:pl-10 lg:gap-10 w-[390px] md:w-full hidden sm:flex items-center justify-center py-3">
          <Footer />
        </footer>
      </div>
    </div>
  );
}
