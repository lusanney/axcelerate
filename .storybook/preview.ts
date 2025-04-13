import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    layout: "padded",
    backgrounds: {
      default: "light",
      values: [
        { name: "light", value: "#f5f7fa" },
        { name: "dark", value: "#333333" },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      defaultViewport: "desktop",
      viewports: {
        mobile: {
          name: "mobile",
          styles: {
            width: "375px",
            height: "667px",
          },
          type: "mobile",
        },
        tablet: {
          name: "tablet",
          styles: {
            width: "768px",
            height: "1024px",
          },
          type: "tablet",
        },
        desktop: {
          name: "desktop",
          styles: {
            width: "1280px",
            height: "800px",
          },
          type: "desktop",
        },
      },
    },
  },
};

export default preview;
