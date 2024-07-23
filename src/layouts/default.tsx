import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";
import SwitcherBar from "@/components/switcherBar";

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  const beforeElipsStyles =
    "before:content-[''] before:absolute xl:before:w-[750px] before:h-[550px] before:left-[50px] before:top-[-150px] before:rounded-full before:bg-gradient-to-b before:from-[#AC962244] before:to-[#44490600] before:blur-[100px] ";

  return (
    <div className="container mx-auto max-w-[1440px] max-h-[992px] px-6 flex-grow flex flex-col sm:flex-row relative">
      <Navbar />

      <div className={`relative flex flex-col max-h-[992px] flex-grow ${beforeElipsStyles}`}>
        <main className="flex-grow">
          <SwitcherBar />
          {children}
        </main>

        <footer className="w-full hidden sm:flex items-center justify-center py-3">
          <Footer />
        </footer>
      </div>
    </div>
  );
}
