import { AbstractImageProps, Image as OrbiterImage } from "./Image.tsx";
import { ComponentProps, ReactElement, ReactNode, forwardRef, useEffect, useState } from "react";
import { OmitInternalProps, isNil, mergeProps, slot, useRefState } from "../../shared/index.ts";
import { useResponsiveValue } from "../../styling/index.ts";

const DefaultElement = "img";

export interface InnerAsyncImageProps extends AbstractImageProps<typeof DefaultElement> {
    /**
     * React children.
     */
    children: ReactNode;
    /**
     * The number of milliseconds to delay the rendering of the fallback.
     */
    delay?: number;
    /**
     * The allowed number of retry to load the async image.
     */
    retryCount?: number;
}

function InnerAsyncImage({
    as = DefaultElement,
    children,
    delay = 250,
    forwardedRef,
    retryCount = 5,
    src,
    ...rest
}: InnerAsyncImageProps) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [failureCount, setFailureCount] = useState(0);

    const [canRender, setCanRender] = useState(false);
    const [canRenderTimeoutIdRef, setCanRenderTimeoutId] = useRefState<ReturnType<typeof setTimeout>>();

    const srcValue = useResponsiveValue(src);

    if (retryCount < 1) {
        throw new Error("An async image retry count must be equal or greater to 1.");
    }

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setCanRender(true);
        }, delay);

        setCanRenderTimeoutId(timeoutId);

        return () => {
            clearTimeout(timeoutId);
            setCanRenderTimeoutId(null);
        };
    }, [delay, setCanRenderTimeoutId]);

    // Reset when the image "src" change.
    useEffect(() => {
        setIsLoaded(false);
        setFailureCount(0);
    }, [srcValue]);

    useEffect(() => {
        if (!isLoaded && failureCount < retryCount) {
            let image = new Image();

            const disposeImage = () => {
                if (!isNil(image)) {
                    image.onload = null;
                    image.onerror = null;
                    image = null;
                }
            };

            image.src = srcValue;

            image.onload = () => {
                disposeImage();

                setIsLoaded(true);

                if (!isNil(canRenderTimeoutIdRef.current)) {
                    clearTimeout(canRenderTimeoutIdRef.current);
                    setCanRenderTimeoutId(null);
                }
            };

            image.onerror = () => {
                disposeImage();

                setFailureCount(failureCount + 1);
            };

            return () => {
                disposeImage();
            };
        }
    }, [srcValue, retryCount, isLoaded, failureCount, canRenderTimeoutIdRef, setCanRenderTimeoutId]);

    if (!canRender && !isLoaded) {
        return null;
    }

    if (isLoaded) {
        return (
            <OrbiterImage
                {...mergeProps(
                    rest,
                    {
                        as,
                        ref: forwardedRef,
                        src: srcValue
                    }
                )}
            />
        );
    }

    return children as ReactElement;
}

InnerAsyncImage.defaultElement = DefaultElement;

export const AsyncImage = slot("image", forwardRef<any, OmitInternalProps<InnerAsyncImageProps>>((props, ref) => (
    <InnerAsyncImage {...props} forwardedRef={ref} />
)));

export type AsyncImageProps = ComponentProps<typeof AsyncImage>;
