export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5ce85489a5e4b6bead90d444',
                  title: 'Sanity Studio',
                  name: 'virtual-pitching-studio',
                  apiId: '758e91d6-d563-424c-af4b-f226ca46ccb4'
                },
                {
                  buildHookId: '5ce8548943aa2468774486fb',
                  title: 'Landing pages Website',
                  name: 'virtual-pitching',
                  apiId: '2bc5e3af-70b5-4128-87fc-0af8ac86c2da'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/gerdums/virtual-pitching',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://virtual-pitching.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
