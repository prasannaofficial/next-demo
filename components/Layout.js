import Head from "next/head";
import Navbar from "./Navbar";

const Layout = (props) => (
  <div>
    <Head>
      <title>BlogPosts</title>
      <link
        rel="stylesheet"
        href="https://bootswatch.com/4/cerulean/bootstrap.css"
      ></link>
    </Head>
    <Navbar />
    <div className="container">{props.children}</div>
  </div>
);

export default Layout;