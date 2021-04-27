import React from 'react';
import { getMDXComponent } from 'mdx-bundler/client';
import { bundleMDX } from 'mdx-bundler';
import { GetStaticProps } from 'next';

export default function Page({ code, frontmatter, error }) {
  const Component = React.useMemo(
    () => (error
      ? () => <div>글을 찾을 수 없습니다.</div>
      : getMDXComponent(code)),
    [code],
  );
  return (
    <div>
      {/* {frontmatter} */}
      <Component />
    </div>
  );
}

export async function getStaticPaths() {
  const titles = [
    'improve-your-hooks-with-ref',
  ];

  return {
    paths: titles.map((title) => ({
      params: { title },
    })),
    fallback: 'blocking',
  };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  let response: Response;

  try {
    response = await fetch(`http://localhost:3000/content/${params?.title}.mdx`);

    if (typeof response?.status === 'number' && response.status % 100 === 2) {
      const { code, frontmatter } = await bundleMDX(await response.text());
      return {
        props: {
          code,
          frontmatter,
        },
      };
    }
  } catch (e) {
    // error handling
  }

  return {
    notFound: true,
  };
};
