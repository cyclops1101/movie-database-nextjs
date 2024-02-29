import Head from "next/head";
import MovieSearch from "./components/MovieSearch";
import { config } from "dotenv";
config();

export default function Home() {
  return (
    <div className="bg-black min-h-screen">
      <Head>
        <title>Movie Database</title>
        <meta name="description" content="Movie Database" />
      </Head>
      <main className="container mx-auto py-10 px-4 flex flex-col items-center justify-flex-start">
        <h1 className="text-4xl mb-8 font-bold">Movie Database</h1>
        <MovieSearch />
      </main>
    </div>
  );
}
