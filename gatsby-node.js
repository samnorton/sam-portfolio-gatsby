const path = require("path")

// create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      blogs: allStrapiBlogs {
        nodes {
          slug
        }
      }

      works: allStrapiWorks {
        nodes {
          slug
        }
      }
    }
  `)

  result.data.blogs.nodes.forEach(blog => {
    createPage({
      path: `/blogs/${blog.slug}`,
      component: path.resolve(`src/templates/blog-template.js`),
      context: {
        slug: blog.slug,
      },
    })
  })


  result.data.works.nodes.forEach(work => {
    createPage({
      path: `/works/${work.slug}`,
      component: path.resolve(`src/templates/work-template.js`),
      context: {
        slug: work.slug,
      },
    })
  })


// amount of blog
const blogs = result.data.blogs.nodes
// posts per page
const blogsPerPage = 3
// how many pages
const numPages = Math.ceil(blogs.length/blogsPerPage)

Array.from({ length: numPages}).forEach((_, i) => {
  createPage({
    path: i === 0 ? `blogs` : `/blogs/${i+1}`,
    component: path.resolve('src/templates/blog-list-template.js'),
    context: {
      limit: blogsPerPage,
      skip: i * blogsPerPage,
      numPages,
      currentPage: i + 1
    }
  })
})


// // amount of works
// const works = result.data.works.nodes
// // works per page
// const worksPerPage = 3
// // how many works
// const numWorkPages = Math.ceil(works.length/worksPerPage)

// Array.from({ length: numWorkPages}).forEach((_, i) => {
//   createPage({
//     path: i === 0 ? `works` : `/works/${i+1}`,
//     component: path.resolve('src/templates/work-list-template.js'),
//     context: {
//       limit: worksPerPage,
//       skip: i * worksPerPage,
//       numPages,
//       currentPage: i + 1
//     }
//   })
// })

}



exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /react-scrollspy/,
            use: loaders.null(),
          },
          {
            test: /react-router-hash-link/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}
