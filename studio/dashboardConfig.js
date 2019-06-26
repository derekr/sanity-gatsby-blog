export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d12eedb02c3185e7216c202',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-hzbra1ph',
                  apiId: '9d614cb9-a3e9-4f1e-99cb-a5595cfbf6ba'
                },
                {
                  buildHookId: '5d12eedb86bb69310ac48a41',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-spqag2tn',
                  apiId: 'b1c6d831-3e0f-4e45-bbcf-0b41d150cd3f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/derekr/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-spqag2tn.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
