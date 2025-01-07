---
slug: trying
title: 组件库的初步尝试
authors: []
tags: []
---

<!-- truncate -->

# Web Components 简介

Web Components 是一组不同的技术，允许我们构建封装式的、可重用的 UI 组件。Web Components 包括自定义元素（Custom Elements）、模板（Template）、影子 DOM（Shadow DOM）等技术，可以独立于框架在任何现代浏览器中使用。这使得 Web Components 能够在不同的 JavaScript 框架或库中保持一致的行为和样式，是构建跨平台、模块化 UI 组件的理想选择。

有关 Web Components 的更多信息，可以参考官方文档：[Web Components Overview](https://developer.mozilla.org/en-US/docs/Web/Web_Components)

# Stencil 简介

Stencil 是一个专注于构建 Web Components 的框架，能够帮助开发者以原生 Web 技术构建高效、模块化的组件。Stencil 提供了增量编译、按需加载、自动优化等功能，可以生成轻量级的 Web 组件，支持 TypeScript 和 JSX，使得开发者可以高效地开发和维护组件。

关于 Stencil 的详细文档，请参考：[Stencil Documentation](https://stenciljs.com/docs)

# Tailwind CSS 简介

Tailwind CSS 是一款实用的 CSS 框架，通过预定义的实用工具类，帮助开发者以声明式的方式构建响应式的 UI。与传统的 CSS 框架不同，Tailwind CSS 提供了极高的可定制性，开发者可以根据项目需求定制自己的设计系统。同时，Tailwind CSS 配合工具链使用，还可以实现按需加载，极大地减少生成的 CSS 体积。

您可以阅读更多关于 Tailwind CSS 的内容，参考：[TailwindCSS Documentation](https://tailwindcss.com/docs)

# React 与 Stencil 的对比

在开发 `air-components` 的过程中，我深入了解了 Stencil 和 React 之间的异同。虽然它们是不同的技术栈，但在组件化开发方面有许多相似之处：

## 相似点

1. **JSX 语法**：React 和 Stencil 都使用类似的 JSX 语法来构建组件的结构，使得开发方式非常相似。
2. **组件化思想**：两者都遵循组件化开发思想，鼓励开发者将 UI 拆解成多个小组件，通过组合这些小组件构建完整界面。
3. **生命周期管理**：React 使用 `componentDidMount` 等生命周期方法，而 Stencil 使用 `connectedCallback`、`disconnectedCallback` 等钩子。
4. **状态管理**：React 通过 `state` 和 `setState` 管理状态，Stencil 使用 `@State()` 装饰器。
5. **属性传递**：React 中通过 `props` 向子组件传递数据，Stencil 中通过 `@Prop()` 装饰器定义属性。

## 不同点

1. **框架依赖**：Stencil 生成的是原生 Web Components，可以在任何现代浏览器中使用，而 React 则依赖其生态系统。
2. **性能优化**：Stencil 提供按需加载和增量编译，适合开发轻量级组件，而 React 更适合构建复杂的单页应用。

通过对比，我意识到在组件化开发时，Stencil 提供了更多灵活性，尤其适合不依赖特定框架的跨平台开发。

# air-components 和 air-components-start

`air-components` 是一个简单、高效且易于扩展的 UI 组件库，提供了一些常用的 UI 组件，如按钮（`air-button`）、卡片（`air-card`）和段落（`air-paragraph`）。这些组件经过精心设计，能够在不同设备上保持响应式表现，并且可以无缝集成到任何现代框架或原生 Web 项目中。

为了帮助开发者快速上手，我创建了 `air-components-start`。这是一个简化的模板项目，预先配置了必要的工具和依赖，基于最佳实践，减少了开发者从零开始的工作量。
![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/ccc22c07e0d246478d3c3d31797b312b.jpeg#pic_center)

## 使用 `air-components-start`

1. 克隆模板项目：

```bash
git clone https://github.com/SisyphusZheng/air-components-start.git
```

2. 安装依赖：

```bash
cd air-components-start && npm install
```

3. 启动开发环境：

```bash
npm start
```

# 框架结构

## 为什么选择 Stencil + Tailwind CSS

### Stencil 的优势

1. **原生支持 Web Components**：无需依赖其他前端框架，组件可以直接在任何现代浏览器中运行。
2. **自动优化**：提供代码清理和高效打包功能，生成轻量级组件。
3. **支持 TypeScript**：提供类型安全和更高的开发效率。
4. **高性能**：通过增量编译和按需加载，实现更快的开发和运行速度。

### Tailwind CSS 的优势

1. **类名即设计**：通过使用预定义工具类，快速实现响应式布局和定制化设计。
2. **高度可定制**：通过配置文件轻松调整设计系统。
3. **按需加载**：结合工具链极大减少生成的 CSS 体积。

# 实践过程

## 1. 环境搭建

在 `air-components` 项目的初始化过程中，我采取了以下步骤：

1. **初始化项目**：使用 Stencil 官方 CLI 快速创建新项目。
2. **集成 Tailwind CSS**：通过开源插件[stencil-tailwind-plugin
](https://www.npmjs.com/package/stencil-tailwind-plugin)
3. **配置文件优化**：根据项目需求，调整 `tailwind.config.js` 和 Stencil 配置文件。

## 2. 构建基础组件

当前 `air-components` 包含以下基础组件：

### air-button

一个功能全面的按钮组件，支持多种状态（默认、悬停、禁用等），并提供一致的设计风格。

### air-card

可复用的卡片组件，支持图片、标题和描述内容的组合。

## 3. 样式管理

1. **通用样式**：在 `global.css` 中定义全局样式规则，例如颜色主题和字体设置。
2. **组件内样式**：每个组件通过 Tailwind CSS 的实用类名实现独立样式，确保模块化和易维护。

## 设计参考：quakdUI
为了提升 air-components 的设计灵感，我参考了 quakdUI 作为设计系统的一个优秀范例。quakdUI 提供了一种简洁、现代且高度定制化的设计风格，它的组件在视觉上注重一致性和简洁性，这与 air-components 的设计理念非常契合。你可以根据 quakdUI 的设计理念，调整组件的颜色、间距和排版，使其在不同的 UI 环境中保持一致的外观和用户体验。

# 总结

通过使用 Stencil 和 Tailwind CSS 开发 `air-components`，我们能够快速构建高效、响应式的 UI 组件。这些组件不仅具有出色的跨平台兼容性，还通过模板项目 `air-components-start` 降低了开发者的上手门槛，为构建现代化 Web 应用提供了坚实的基础。