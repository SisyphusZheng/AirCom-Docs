"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8130],{7735:e=>{e.exports=JSON.parse('{"archive":{"blogPosts":[{"id":"trying","metadata":{"permalink":"/blog/trying","editUrl":"https://github.com/aircomponents/UI/blog/2024-12-26-welcome/index.md","source":"@site/i18n/en/docusaurus-plugin-content-blog/2024-12-26-welcome/index.md","title":"A first attempt at a component library","description":"Web Components is a collection of different technologies that allow us to build encapsulated, reusable UI components. Web Components includes technologies such as Custom Elements, Templates, and Shadow DOM, and can be used in any modern browser independently of a framework. This allows Web Components to maintain consistent behavior and styles across different JavaScript frameworks or libraries, and is ideal for building cross-platform, modular UI components.","date":"2024-12-26T00:00:00.000Z","tags":[],"readingTime":4.915,"hasTruncateMarker":true,"authors":[],"frontMatter":{"slug":"trying","title":"A first attempt at a component library","authors":[],"tags":[]},"unlisted":false},"content":"\x3c!-- truncate --\x3e\\n# Web Components Introduction\\nWeb Components is a collection of different technologies that allow us to build encapsulated, reusable UI components. Web Components includes technologies such as Custom Elements, Templates, and Shadow DOM, and can be used in any modern browser independently of a framework. This allows Web Components to maintain consistent behavior and styles across different JavaScript frameworks or libraries, and is ideal for building cross-platform, modular UI components.\\nFor more information about Web Components, please refer to the official documentation: [Web Components Overview](https://developer.mozilla.org/en-US/docs/Web/Web_Components)\\n# Stencil Introduction\\nStencil is a framework that focuses on building Web Components, helping developers build efficient, modular components using native Web technologies. Stencil provides features such as incremental compilation, on-demand loading, and automatic optimization to generate lightweight Web components. It supports TypeScript and JSX, allowing developers to efficiently develop and maintain components.\\nFor detailed documentation on Stencil, please refer to: [Stencil Documentation](https://stenciljs.com/docs)\\n# Tailwind CSS Introduction\\nTailwind CSS is a practical CSS framework that helps developers build responsive UIs in a declarative way through predefined utility classes. Unlike traditional CSS frameworks, Tailwind CSS provides a high degree of customizability, allowing developers to customize their own design systems according to project requirements. At the same time, Tailwind CSS can also be used with a toolchain to implement on-demand loading, which greatly reduces the volume of generated CSS.\\nYou can read more about Tailwind CSS at [TailwindCSS Documentation](https://tailwindcss.com/docs)\\n# React vs Stencil\\nWhile developing `air-components`, I gained a deeper understanding of the similarities and differences between Stencil and React. Although they are different technology stacks, they have many similarities in component-based development:\\n## Similarities\\n1. **JSX syntax**: React and Stencil both use similar JSX syntax to structure components, making development very similar.\\n2. **Component-based thinking**: Both follow the component-based development philosophy, encouraging developers to break down the UI into multiple widgets and combine these widgets to build a complete interface.\\n3. **Lifecycle management**: React uses lifecycle methods such as `componentDidMount`, while Stencil uses hooks such as `connectedCallback` and `disconnectedCallback`.\\n4. **State management**: React manages state through `state` and `setState`, while Stencil uses the `@State()` decorator.\\n5. **Prop passing**: React passes data to child components via `props`, while Stencil defines properties via the `@Prop()` decorator.\\n## Differences\\n1. **Framework dependency**: Stencil generates native Web Components that can be used in any modern browser, while React depends on its ecosystem.\\n2. **Performance optimization**: Stencil provides on-demand loading and incremental compilation, which is suitable for developing lightweight components, while React is more suitable for building complex single-page applications.\\nCompared with React, I realized that Stencil provides more flexibility in component-based development, especially for cross-platform development that does not rely on a specific framework.\\n# air-components and air-components-start\\n`air-components` is a simple, efficient and easily extensible library of UI components that provides some commonly used UI components such as buttons (`air-button`), cards (`air-card`) and paragraphs (`air-paragraph`). These components are carefully designed to maintain a responsive performance on different devices and can be seamlessly integrated into any modern framework or native web project.\\nTo help developers get started quickly, I created `air-components-start`. This is a simplified template project that comes preconfigured with the necessary tools and dependencies, based on best practices and reduces the workload of developers starting from scratch.\\n![Insert image description here](https://i-blog.csdnimg.cn/direct/ccc22c07e0d246478d3c3d31797b312b.jpeg#pic_center)\\n## Using `air-components-start`\\n1. Clone the template project:\\n```bash\\ngit clone https://github.com/SisyphusZheng/air-components-start.git\\n```\\n2. Install dependencies:\\n```bash\\ncd air-components-start && npm install\\n```\\n3. Start the development environment:\\n```bash\\nnpm start\\n```\\n# Framework structure\\n## Why Stencil + Tailwind CSS\\n### Stencil advantages\\n1. **Native support for Web Components**: No need to rely on other front-end frameworks, components can be run directly in any modern browser.\\n2. **Automatic optimization**: Provides code cleaning and efficient packaging functions to generate lightweight components.\\n3. **Support for TypeScript**: Provides type safety and higher development efficiency.\\n4. **High performance**: Faster development and faster running speeds through incremental compilation and on-demand loading.\\n### Tailwind CSS advantages\\n1. **Class names are design**: Responsive layouts and custom designs can be implemented quickly by using predefined tool classes.\\n2. **Highly customizable**: The design system can be easily adjusted using configuration files.\\n3. **Load on demand**: The tool chain can be combined to greatly reduce the size of the generated CSS.\\n# Practical process\\n## 1. Environment setup\\nDuring the initialization of the `air-components` project, I took the following steps:\\n1. **Initialize the project**: Quickly create a new project using the official Stencil CLI.\\n2. **Integrate Tailwind CSS**: Use the open source [stencil-tailwind-plugin\\n](https://www.npmjs.com/package/stencil-tailwind-plugin)\\n3. **Configuration file optimization**: Tailor `tailwind.config.js` and Stencil configuration files to your project\'s needs.\\n## 2. Building basic components\\nThe current `air-components` includes the following basic components:\\n### air-button\\nA fully functional button component that supports multiple states (default, hover, disabled, etc.) and provides a consistent design style.\\n### air-card\\nA reusable card component that supports a combination of images, titles, and descriptions.\\n## 3. Style management\\n1. **Global styles**: Global style rules such as color themes and font settings are defined in `global.css`.\\n2. **Component-specific styles**: Each component is independently styled using Tailwind CSS utility class names to ensure modularity and ease of maintenance.\\n## Design reference: quakdUI\\nTo improve the design inspiration of air-components, I referenced quakdUI as an excellent example of a design system. quakdUI provides a clean, modern, and highly customizable design style. Its components focus on visual consistency and simplicity, which is very consistent with the design philosophy of air-components. You can adjust the color, spacing, and layout of components based on the design philosophy of quakdUI to give them a consistent look and feel in different UI environments.\\n# Summary\\nBy developing `air-components` using Stencil and Tailwind CSS, we can quickly build efficient, responsive UI components. These components not only have excellent cross-platform compatibility, but also reduce the learning curve for developers through the template project `air-components-start`, providing a solid foundation for building modern web applications."}]}}')}}]);