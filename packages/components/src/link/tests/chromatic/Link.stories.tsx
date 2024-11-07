import { Inline } from "@components/layout/index.ts";
import { Link } from "@components/link/index.ts";
import LaunchImage from "./LaunchImage";

import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Chromatic/Link",
    component: Link,
    parameters: {
        chromatic: {
            delay: 100
        }
    }
} as Meta<typeof Link>;

export default meta;

type LinkStory = StoryObj<typeof meta>;

export const Styling: LinkStory = {
    name: "styling",
    render: () => (
        <Inline>
            <Link border="warning" href="#">
                <LaunchImage />
            </Link>
            <Link className="border-red" href="#">
                <LaunchImage />
            </Link>
            <Link style={{ border: "1px solid red" }} href="#">
                <LaunchImage />
            </Link>
        </Inline>
    )
};
