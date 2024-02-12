import Layout from "@/components/layout";
import Image from "next/image";

export default function Home() {
  return (
    <Layout>
      <main className="flex  flex-col items-center justify-between p-24">
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          Content
        </div>
      </main>
    </Layout>
  );
}
