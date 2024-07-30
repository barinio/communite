import ContentTransition from "@/components/ContentTransition";

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="m-auto w-[390px] md:w-full">
      <section className="w-[390px] md:w-auto flex flex-col items-center justify-center gap-4 py-10 md:py-5 ">
        <ContentTransition>
          <div className="w4k:w-full w4k:flex-1 flex flex-col xl:flex-row items-center justify-center pl-0   pr-5  gap-10">
            {children}
          </div>
        </ContentTransition>
      </section>
    </main>
  );
}
