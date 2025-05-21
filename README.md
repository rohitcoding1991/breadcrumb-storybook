# breadcrumbs-ts

A dynamic React component for rendering customizable breadcrumbs. This repository serves as a **Storybook demo** and development environment for the component. Built with **React.js**, **TypeScript**, and **Storybook**.

![React](https://img.shields.io/badge/-ReactJs-61DAFB?logo=react&logoColor=white&style=flat)
![TypeScript](https://img.shields.io/badge/-TypeScript-007ACC?logo=typescript&logoColor=white&style=flat)
![Storybook](https://img.shields.io/badge/-Storybook-FF4785?logo=storybook&logoColor=white&style=flat)
![](https://img.shields.io/badge/npm-v10.8.2-green)
![](https://img.shields.io/badge/license-MIT-orange)

<br>

## Features

- **Custom Home Route**: Easily set your home route to any desired path.
- **Custom Styles**: Apply unique styles to the home route, individual routes, and the active route.
- **Breadcrumb Capitalization**: Option to capitalize breadcrumb labels.
- **Limit Breadcrumbs**: Set a maximum number of breadcrumbs to display.
- **Fully Dynamic**: Dynamically generates breadcrumbs based on your route structure.

<br>

## Installation

This project uses Storybook to showcase and test the component in isolation.

```bash
git clone https://github.com/your-username/breadcrumbs-ts.git
cd breadcrumbs-ts
npm install
npm run storybook
```

<br>
<br>

## Usage Example

Here's a basic example of how to integrate the `breadcrumbs-ts` component into your project:

```bash
import Breadcrumbs from 'breadcrumbs-ts';

const ExamplePage = () => {
  return (
    <Breadcrumbs
      homeElement="Home"
      separator="/"
      activeClasses="text-indigo-500"
      containerClasses="grid py-5 px-10 text-gray-400 gap-1 text-sm"
      listItemClasses="c-hover c-margin c-font-weight c-text"
      capitalizeLinks
    />
  );
};

export default ExamplePage;
```

<br>
<br>

| Prop Name        | Type    | Description                                                                             | Default  |
| ---------------- | ------- | --------------------------------------------------------------------------------------- | -------- |
| homeElement      | string  | Custom element for the home route (text or component).                                  | `'Home'` |
| separator        | string  | Custom separator between breadcrumbs.                                                   | `'/' `   |
| activeClasses    | string  | CSS classes to apply to the active breadcrumb.                                          | `''`     |
| containerClasses | string  | CSS classes for the breadcrumb container.                                               | `''`     |
| listItemClasses  | string  | CSS classes for individual breadcrumb items.                                            | `'' `    |
| capitalizeLinks  | boolean | Capitalizes each breadcrumb label.                                                      | `false`  |
| maxVisibleItems  | number  | Sets the maximum number of breadcrumbs to display. Remaining breadcrumbs are collapsed. | `5`      |

<br>
<br>

# Customization

You can customize the following parts of the breadcrumbs:

**Home Element**: Replace the default home route label with custom text or a React component.

**Separator**: Define a custom separator between breadcrumb items.

**Style Customization**: Apply custom CSS classes to the container, breadcrumb items, and the active breadcrumb.

**Capitalize Links**: Enable automatic capitalization of breadcrumb labels.

<br>
<br>

## Folder Structure
<br>

```
├── .storybook/         # Storybook configuration
├── src/
│   ├── components/
│   │   └── Breadcrumbs.tsx
│   └── stories/
│       └── Breadcrumbs.stories.tsx
├── tsconfig.json
└── README.md
```
<br>

# License

This project is licensed under the MIT License.

<br>
<br>

This version reflects the correct usage of the `Breadcrumbs` component, including props like `homeElement`, `separator`, `activeClasses`, `containerClasses`, `listItemClasses` and `maxVisibleItems`.
