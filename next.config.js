const withMdx = require('next-mdx-enhanced');

module.exports = withMdx({
  layoutPath: 'src/layout/post',
  defaultLayout: true,
  fileExtensions: ['mdx'],
  remarkPlugins: [],
  rehypePlugins: [
    require('mdx-prism'),
    require('rehype-slug'),
    require('rehype-autolink-headings'),
  ],
  usesSrc: false,
  extendFrontMatter: {
    // process: (mdxContent, frontMatter) => {},
    phase: 'prebuild|loader|both',
  },
  reExportDataFetching: false,
})();
