const withMdx = require('next-mdx-enhanced');

const rehypePlugins = [
  require('mdx-prism'),
  require('rehype-slug'),
  require('rehype-autolink-headings'),
];

const withToc = true;

if (withToc) {
  rehypePlugins.push(require('rehype-toc'));
}

module.exports = withMdx({
  layoutPath: 'src/layout/post',
  defaultLayout: true,
  fileExtensions: ['mdx'],
  remarkPlugins: [],
  rehypePlugins,
  usesSrc: false,
  extendFrontMatter: {
    // process: (mdxContent, frontMatter) => {},
    phase: 'prebuild|loader|both',
  },
  reExportDataFetching: false,
})();
