import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/zh-Hans/blog',
    component: ComponentCreator('/zh-Hans/blog', '9c9'),
    exact: true
  },
  {
    path: '/zh-Hans/blog/archive',
    component: ComponentCreator('/zh-Hans/blog/archive', 'c6a'),
    exact: true
  },
  {
    path: '/zh-Hans/blog/authors',
    component: ComponentCreator('/zh-Hans/blog/authors', 'eed'),
    exact: true
  },
  {
    path: '/zh-Hans/blog/authors/zhizheng',
    component: ComponentCreator('/zh-Hans/blog/authors/zhizheng', 'd06'),
    exact: true
  },
  {
    path: '/zh-Hans/blog/trying',
    component: ComponentCreator('/zh-Hans/blog/trying', 'a34'),
    exact: true
  },
  {
    path: '/zh-Hans/markdown-page',
    component: ComponentCreator('/zh-Hans/markdown-page', '1d3'),
    exact: true
  },
  {
    path: '/zh-Hans/search',
    component: ComponentCreator('/zh-Hans/search', '5a1'),
    exact: true
  },
  {
    path: '/zh-Hans/design',
    component: ComponentCreator('/zh-Hans/design', 'b7d'),
    routes: [
      {
        path: '/zh-Hans/design',
        component: ComponentCreator('/zh-Hans/design', '2de'),
        routes: [
          {
            path: '/zh-Hans/design',
            component: ComponentCreator('/zh-Hans/design', 'cd9'),
            routes: [
              {
                path: '/zh-Hans/design/guide/color',
                component: ComponentCreator('/zh-Hans/design/guide/color', '606'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/zh-Hans/design/Intro',
                component: ComponentCreator('/zh-Hans/design/Intro', '923'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/zh-Hans/docs',
    component: ComponentCreator('/zh-Hans/docs', '298'),
    routes: [
      {
        path: '/zh-Hans/docs',
        component: ComponentCreator('/zh-Hans/docs', 'ab8'),
        routes: [
          {
            path: '/zh-Hans/docs',
            component: ComponentCreator('/zh-Hans/docs', '9b8'),
            routes: [
              {
                path: '/zh-Hans/docs/basic-components/avatar',
                component: ComponentCreator('/zh-Hans/docs/basic-components/avatar', '084'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/zh-Hans/docs/basic-components/button',
                component: ComponentCreator('/zh-Hans/docs/basic-components/button', '73e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/zh-Hans/docs/basic-components/button-group',
                component: ComponentCreator('/zh-Hans/docs/basic-components/button-group', '614'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/zh-Hans/docs/basic-components/card',
                component: ComponentCreator('/zh-Hans/docs/basic-components/card', '69a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/zh-Hans/docs/basic-components/icon',
                component: ComponentCreator('/zh-Hans/docs/basic-components/icon', '8d4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/zh-Hans/docs/basic-components/input',
                component: ComponentCreator('/zh-Hans/docs/basic-components/input', '78f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/zh-Hans/docs/basic-components/rating',
                component: ComponentCreator('/zh-Hans/docs/basic-components/rating', 'e38'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/zh-Hans/docs/basic-components/tag',
                component: ComponentCreator('/zh-Hans/docs/basic-components/tag', 'c5f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/zh-Hans/docs/basic-components/text',
                component: ComponentCreator('/zh-Hans/docs/basic-components/text', '3f2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/zh-Hans/docs/category/基础组件',
                component: ComponentCreator('/zh-Hans/docs/category/基础组件', '3d2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/zh-Hans/docs/feature-components/chat',
                component: ComponentCreator('/zh-Hans/docs/feature-components/chat', '02b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/zh-Hans/docs/feature-components/previewer',
                component: ComponentCreator('/zh-Hans/docs/feature-components/previewer', '5f2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/zh-Hans/docs/feature-components/user-profile',
                component: ComponentCreator('/zh-Hans/docs/feature-components/user-profile', '095'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/zh-Hans/docs/intro',
                component: ComponentCreator('/zh-Hans/docs/intro', '16f'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/zh-Hans/',
    component: ComponentCreator('/zh-Hans/', 'fba'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
