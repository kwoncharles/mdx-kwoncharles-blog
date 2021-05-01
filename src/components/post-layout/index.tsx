import { ReactNode } from 'react';
import Layout from '../layout';
import PostHeader from './post-header';

type FrontMatter = {
  title?: string;
  description?: string;
};

export default function PostLayout({
  frontMatter,
  children,
}: {
  children: ReactNode;
  frontMatter: FrontMatter;
}) {
  console.log(frontMatter);
  return (
    <Layout>
      <div className="px-5">
        <article className="prose md:prose-lg prose-sm prose-yellow">
          <PostHeader
            title={frontMatter.title}
            description={frontMatter.description}
          />
          {children}
        </article>
      </div>
    </Layout>
  );
}
