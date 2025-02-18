const GITHUB_REPOSITORY_URL = "https://github.com/workleap/wl-orbiter/tree/master";

export function getGithubUrl(relativePath: string) {
    return `${GITHUB_REPOSITORY_URL}${relativePath.startsWith("/") ? relativePath : `/${relativePath}`}`;
}
