import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Breadcrumbs, { BreadcrumbsProps } from ".";
import { usePathname } from "next/navigation";

// Custom mock for usePathname
const MockedBreadcrumbs: React.FC<BreadcrumbsProps> = (props) => {
  // Mock implementation of usePathname
  (usePathname as jest.Mock).mockReturnValue(
    "/courses/exclusive-courses/winter%20driving%20course/content/reserve"
  );

  return <Breadcrumbs {...props} />;
};

const meta: Meta<typeof Breadcrumbs> = {
  title: "Components/Breadcrumbs",
  component: Breadcrumbs,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Breadcrumbs>;

// Default Example
export const Default: Story = {
  args: {
    capitalizeLinks: true,
  },
  render: (args) => <MockedBreadcrumbs {...args} />,
};

// Custom Separator Example
export const CustomSeparator: Story = {
  args: {
    separator: ">",
    containerClasses:
      "flex max-w-fit flex-wrap gap-2 py-5 px-10 !text-[--nav-items] text-sm",
    listItemClasses: "mx-2 text-sm hover:!text-[--hover-items] font-normal",
    activeClasses: "!text-[--other-navs] font-normal",
    capitalizeLinks: true,
    maxVisibleItems: 5,
  },
  render: (args) => <MockedBreadcrumbs {...args} />,
};

// Without Home Icon Example
export const WithoutHomeIcon: Story = {
  args: {
    homeElement: "",
    separator: "/",
    containerClasses:
      "flex max-w-fit flex-wrap gap-2 py-5 px-10 !text-[--nav-items] text-sm",
    listItemClasses: "mx-2 text-sm hover:!text-[--hover-items] font-normal",
    activeClasses: "!text-[--other-navs] font-normal",
    capitalizeLinks: true,
    maxVisibleItems: 5,
  },
  render: (args) => <MockedBreadcrumbs {...args} />,
};

// Custom Home Element Example
export const CustomHomeElement: Story = {
  args: {
    homeElement: "🏠",
    separator: "/",
    containerClasses:
      "flex max-w-fit flex-wrap gap-2 py-5 px-10 !text-[--nav-items] text-sm",
    listItemClasses: "mx-2 text-sm hover:!text-[--hover-items] font-normal",
    activeClasses: "!text-[--other-navs] font-normal",
    capitalizeLinks: true,
    maxVisibleItems: 5,
  },
  render: (args) => <MockedBreadcrumbs {...args} />,
};

// Long Breadcrumbs Example
export const LongBreadcrumbs: Story = {
  args: {
    maxVisibleItems: 2,
    containerClasses:
      "flex max-w-fit flex-wrap gap-2 py-5 px-10 !text-[--nav-items] text-sm",
    listItemClasses: "mx-2 text-sm hover:!text-[--hover-items] font-normal",
    activeClasses: "!text-[--other-navs] font-normal",
    capitalizeLinks: true,
  },
  render: (args) => <MockedBreadcrumbs {...args} />,
};

// No Capitalization Example
export const WithoutCapitalization: Story = {
  args: {
    capitalizeLinks: false,
    containerClasses:
      "flex max-w-fit flex-wrap gap-2 py-5 px-10 !text-[--nav-items] text-sm",
    listItemClasses: "mx-2 text-sm hover:!text-[--hover-items] font-normal",
    activeClasses: "!text-[--other-navs] font-normal",
    maxVisibleItems: 5,
  },
  render: (args) => <MockedBreadcrumbs {...args} />,
};

// Dark Theme Example
export const DarkThemeBreadcrumbs: Story = {
  args: {
    containerClasses:
      "flex max-w-fit flex-wrap gap-2 py-5 px-10 !text-white !bg-gray-800 text-sm",
    listItemClasses: "mx-2 text-sm hover:!text-gray-400 font-normal",
    activeClasses: "!text-gray-100 font-bold",
    capitalizeLinks: true,
    maxVisibleItems: 5,
  },
  render: (args) => <MockedBreadcrumbs {...args} />,
};

// Single Item Breadcrumb Example
export const SingleItemBreadcrumb: Story = {
  args: {
    maxVisibleItems: 1,
    containerClasses:
      "flex max-w-fit flex-wrap gap-2 py-5 px-10 !text-[--nav-items] text-sm",
    listItemClasses: "mx-2 text-sm hover:!text-[--hover-items] font-normal",
    activeClasses: "!text-[--other-navs] font-normal",
    capitalizeLinks: true,
  },
  render: (args) => <MockedBreadcrumbs {...args} />,
};

// No Truncation Example
export const NoTruncation: Story = {
  args: {
    maxVisibleItems: 10,
    containerClasses:
      "flex max-w-fit flex-wrap gap-2 py-5 px-10 !text-[--nav-items] text-sm",
    listItemClasses: "mx-2 text-sm hover:!text-[--hover-items] font-normal",
    activeClasses: "!text-[--other-navs] font-normal",
    capitalizeLinks: true,
  },
  render: (args) => <MockedBreadcrumbs {...args} />,
};

// Custom Active Item Style Example
export const CustomActiveItemStyle: Story = {
  args: {
    activeClasses: "text-red-500 font-semibold",
    containerClasses:
      "flex max-w-fit flex-wrap gap-2 py-5 px-10 !text-[--nav-items] text-sm",
    listItemClasses: "mx-2 text-sm hover:!text-[--hover-items] font-normal",
    capitalizeLinks: true,
    maxVisibleItems: 5,
  },
  render: (args) => <MockedBreadcrumbs {...args} />,
};

// Different Path Example
export const DifferentPathExample: Story = {
  args: {
    containerClasses:
      "flex max-w-fit flex-wrap gap-2 py-5 px-10 !text-[--nav-items] text-sm",
    listItemClasses: "mx-2 text-sm hover:!text-[--hover-items] font-normal",
    activeClasses: "!text-[--other-navs] font-normal",
    capitalizeLinks: true,
    maxVisibleItems: 5,
  },
  render: (args) => {
    (usePathname as jest.Mock).mockReturnValue("/about/team/leadership");
    return <MockedBreadcrumbs {...args} />;
  },
};

// Overflow Handling Example
export const OverflowHandling: Story = {
  args: {
    maxVisibleItems: 3,
    containerClasses:
      "flex max-w-fit flex-wrap gap-2 py-5 px-10 !text-[--nav-items] text-sm",
    listItemClasses: "mx-2 text-sm hover:!text-[--hover-items] font-normal",
    activeClasses: "!text-[--other-navs] font-normal",
    capitalizeLinks: true,
  },
  render: (args) => {
    (usePathname as jest.Mock).mockReturnValue(
      "/categories/subcategory/item/details"
    );
    return <MockedBreadcrumbs {...args} />;
  },
};

// Custom Separator No Capitalization Example
export const CustomSeparatorNoCapitalization: Story = {
  args: {
    separator: ">>",
    capitalizeLinks: false,
    containerClasses:
      "flex max-w-fit flex-wrap gap-2 py-5 px-10 !text-[--nav-items] text-sm",
    listItemClasses: "mx-2 text-sm hover:!text-[--hover-items] font-normal",
    activeClasses: "!text-[--other-navs] font-normal",
    maxVisibleItems: 5,
  },
  render: (args) => <MockedBreadcrumbs {...args} />,
};
