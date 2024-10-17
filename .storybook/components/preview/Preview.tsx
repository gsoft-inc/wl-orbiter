import "./Preview.css";
export interface PreviewProps {
    filePath?: string;
    language?: string;
    scope?: string;
    features?: boolean;
    mdxSource?: string;
    children?: any;
}

export function Preview({
    filePath,
    mdxSource,
    language,
    scope,
    children,
    ...rest
}: PreviewProps) {
    return (
        <div>Preview unavailable</div>
    )
}
