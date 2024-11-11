import { ExternalLink, ExternalLinkProps } from "@stories/components";
import { Flex } from "@components/layout/index.ts";
import { Img } from "@components/html/index.ts";
import { getGithubUrl } from "./getGithubUrl.ts";
import GithubLogo from "./assets/logo-github-32.png";

interface GithubLinkProps extends Omit<ExternalLinkProps, "href"> {
    path: string;
    logo?: boolean;
}


export function GithubLink({ path, logo = false, children, ...rest }: GithubLinkProps) {
    if (logo) {
        return (
            <Flex inline alignItems="center">
                <Img src={GithubLogo} alt="Github" width={320} height={320} marginRight={80} />
                <ExternalLink href={getGithubUrl(path)} {...rest}>{children}</ExternalLink>
            </Flex>
        );
    }

    return (
        <ExternalLink
            {...rest}
            href={getGithubUrl(path)}
        >
            {children}
        </ExternalLink>
    );
}
