import Head from "next/head";
import Header from "../../modules/Header/Header";

interface ILayoutProps {
  title: string;
}

const Layout: React.FC<ILayoutProps> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Layout;
