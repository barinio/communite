import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";
import SwitcherBar from "@/components/switcherBar";

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  const beforeElipsStyles =
    "before:content-[''] before:absolute xl:before:w-[750px] before:h-[550px] before:left-[50px] before:top-[-150px] before:rounded-full before:bg-gradient-to-b before:from-[#AC962244] before:to-[#44490600] before:blur-[100px] ";

  return (
    <div className="relative container mx-auto max-w-[1440px] px-2 xl:px-6 flex">
      <Navbar />

      <div className={`m-auto w-[390px] md:w-full relative flex flex-col ${beforeElipsStyles}`}>
        <main>
          <SwitcherBar />
          {children}
        </main>

        <footer className="w-[390px] md:w-full hidden sm:flex items-center justify-center py-3">
          <Footer />
        </footer>
      </div>
    </div>
  );
}
