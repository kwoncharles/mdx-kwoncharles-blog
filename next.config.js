const withMdx = require('next-mdx-enhanced');

module.exports = withMdx({
  layoutPath: 'src/components/post-layout',
  defaultLayout: true,
  fileExtensions: ['mdx'],
  remarkPlugins: [],
  rehypePlugins: [],
  usesSrc: false,
  extendFrontMatter: {
    // process: (mdxContent, frontMatter) => {},
    phase: 'prebuild|loader|both',
  },
  reExportDataFetching: false,
})()
