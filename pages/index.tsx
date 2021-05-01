import Head from 'next/head';
import HomePage from '@/screen/home';
import Layout from '@/components/layout';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <HomePage />
      </Layout>
    </>
  );
}
