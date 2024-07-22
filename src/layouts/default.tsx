import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container mx-auto max-w-[1440px] max-h-[992px] px-6 flex-grow flex flex-col sm:flex-row relative">
      <Navbar />

      <div className="relative flex flex-col max-h-[992px] flex-grow">
        <main className="flex-grow">{children}</main>

        <footer className="w-full hidden sm:flex items-center justify-center py-3">
          <Footer />
        </footer>
      </div>
    </div>
  );
}
