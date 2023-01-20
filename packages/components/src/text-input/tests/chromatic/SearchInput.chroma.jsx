import { Inline, Stack } from "@components/layout";

import { Div } from "@components/html";
import { EmailMajorIcon } from "@components/icons";
import { SearchInput } from "@components/text-input";

export default {
    title: "Chromatic/SearchInput",
    component: SearchInput
};

export const Default = () => (
    <Stack>
        <SearchInput aria-label="Label" />
        <SearchInput loading aria-label="Label"></SearchInput>
        <SearchInput disabled aria-label="Label"></SearchInput>
        <SearchInput readOnly aria-label="Label"></SearchInput>
        <SearchInput fluid aria-label="Label"></SearchInput>
        <Div width="10%">
            <SearchInput fluid aria-label="Label"></SearchInput>
        </Div>
        <SearchInput loading fluid aria-label="Label"></SearchInput>
    </Stack>
);

Default.storyName = "default";

export const Placeholder = () => (
    <Stack>
        <SearchInput placeholder="Where to?" />
        <SearchInput loading placeholder="Where to?" />
        <SearchInput disabled placeholder="Where to?"></SearchInput>
        <SearchInput readOnly placeholder="Where to?"></SearchInput>
        <SearchInput fluid placeholder="Where to?"></SearchInput>
        <Div width="10%">
            <SearchInput fluid placeholder="Where to?"></SearchInput>
        </Div>
        <SearchInput loading fluid placeholder="Where to?"></SearchInput>
    </Stack>
);

Placeholder.storyName = "placeholder";

export const Value = () => (
    <Stack>
        <SearchInput defaultValue="Mars" aria-label="Label" />
        <SearchInput loading defaultValue="Mars" aria-label="Label" />
        <SearchInput disabled defaultValue="Mars" aria-label="Label" />
        <SearchInput readOnly defaultValue="Mars" aria-label="Label" />
        <Inline>
            <SearchInput placeholder="Where to?" defaultValue="Mars" />
            <SearchInput value="Mars" />
        </Inline>
        <SearchInput fluid defaultValue="Mars" aria-label="Label"></SearchInput>
        <Div width="10%">
            <SearchInput fluid defaultValue="Mars" aria-label="Label"></SearchInput>
        </Div>
        <SearchInput loading fluid defaultValue="Mars" aria-label="Label"></SearchInput>
    </Stack>
);

Value.storyName = "value";

export const CustomIcon = () => (
    <Stack>
        <SearchInput icon={<EmailMajorIcon />} placeholder="Where to?" aria-label="Label" />
        <SearchInput icon={<EmailMajorIcon />} defaultValue="SpaceX will win the race!" aria-label="Label" />
        <SearchInput loading icon={<EmailMajorIcon />} placeholder="Where to?" />
        <SearchInput disabled icon={<EmailMajorIcon />} placeholder="Where to?" />
        <SearchInput readOnly icon={<EmailMajorIcon />} placeholder="Where to?" />
        <SearchInput fluid icon={<EmailMajorIcon />} placeholder="Where to?" />
        <Div width="10%">
            <SearchInput fluid icon={<EmailMajorIcon />} placeholder="Where to?" />
        </Div>
    </Stack>
);

CustomIcon.storyName = "custom icon";

export const NoIcon = () => (
    <Stack>
        <SearchInput icon={null} placeholder="Where to?" />
        <SearchInput icon={null} defaultValue="SpaceX will win the race!" />
        <SearchInput loading icon={null} placeholder="Where to?" />
        <SearchInput disabled icon={null} placeholder="Where to?" />
        <SearchInput readOnly icon={null} placeholder="Where to?" />
        <SearchInput fluid icon={null} placeholder="Where to?" />
        <Div width="10%">
            <SearchInput fluid icon={null} placeholder="Where to?" />
        </Div>
    </Stack>
);

NoIcon.storyName = "no icon";

export const States = () => (
    <Stack>
        <SearchInput active placeholder="Where to?" />
        <Inline>
            <SearchInput focus placeholder="Where to?" />
            <SearchInput defaultValue="Mars" focus placeholder="Where to?" />
            <SearchInput loading defaultValue="Mars" focus placeholder="Where to?" />
        </Inline>
        <Inline>
            <SearchInput hover placeholder="Where to?" />
            <SearchInput defaultValue="Mars" hover placeholder="Where to?" />
            <SearchInput loading defaultValue="Mars" hover placeholder="Where to?" />
        </Inline>
        <Inline>
            <SearchInput focus hover placeholder="Where to?" />
            <SearchInput defaultValue="Mars" focus hover placeholder="Where to?" />
            <SearchInput loading defaultValue="Mars" focus hover placeholder="Where to?" />
        </Inline>
        <SearchInput disabled placeholder="Where to?" />
        <SearchInput readOnly placeholder="Where to?" />
    </Stack>
);

States.storyName = "states";

export const Zoom = () => (
    <Stack>
        <Div className="zoom-in">
            <SearchInput placeholder="Where to?" />
        </Div>
        <Div className="zoom-out">
            <SearchInput placeholder="Where to?" />
        </Div>
    </Stack>
);

Zoom.storyName = "zoom";

export const Styling = () => (
    <Inline>
        <SearchInput border="alert-6" aria-label="Label" />
        <SearchInput className="border-red" aria-label="Label" />
        <SearchInput style={{ border: "1px solid red" }} aria-label="Label" />
        <SearchInput wrapperProps={{ className: "border-red" }} aria-label="Label" />
        <SearchInput wrapperProps={{ style: { border: "1px solid red" } }} aria-label="Label" />
    </Inline>
);

Styling.storyName = "styling";
