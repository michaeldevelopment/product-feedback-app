import "../styles/globals.css";
import Provider from "../graphql/Provider";
import Link from "next/link";

function MyApp({ Component, pageProps }) {
  return (
    <Provider>
      <Link href="/">home</Link>
      <Link href="/about">about</Link>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
