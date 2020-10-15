import Head from "next/head";
import Nav from "./Nav";
import Footer from "./Footer";

export default function MainLayout({ children }) {
  return (
    <div>
      <Head>
        <meta charSet="UTF-8"></meta>
        <title>Petfinder</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <div className="min-h-screen flex flex-col items-center">{children}</div>
      <Footer />
    </div>
  );
}
