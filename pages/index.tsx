import Head from 'next/head';
import Layout from '@/components/layout';
import Link from 'next/link';
import Layout from '@/layout';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Link
          href="/post/improve-your-hooks-with-ref"
          passHref
        >
          <a>
            go to post
          </a>
        </Link>
      </Layout>
    </>
  );
}
