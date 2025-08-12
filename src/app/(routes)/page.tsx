import { Header, Footer } from "@/components/layout";
import { News } from "@/components/features";
import { StructuredData } from "@/components/seo";
import { generateHomePageMeta } from "@/lib/seo/generate-meta";

export default async function Home({
  searchParams,
}: {
  searchParams?: Promise<{ page?: string }>;
}) {
  const meta = generateHomePageMeta();

  return (
    <>
      <StructuredData meta={meta} />
      <div>
        <Header />
        <News searchParams={searchParams} />
        <Footer />
      </div>
    </>
  );
}
