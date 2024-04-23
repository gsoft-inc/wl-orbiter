import { AsyncImage } from "../../image";
import { Box } from "../../box";
import { ComponentProps, forwardRef, useMemo } from "react";
import { Img } from "../../html";
import {
    InternalProps,
    OmitInternalProps,
    SlotProps,
    StyledComponentProps,
    createSizeAdapter,
    cssModule,
    isNil,
    isNilOrEmpty,
    isString,
    mergeProps,
    normalizeSize,
    omitProps,
    slot
} from "../../shared";
import { ResponsiveProp, useResponsiveValue } from "../../styling";
import { Text } from "../../typography";

const DefaultElement = "div";

export interface InnerAvatarProps extends SlotProps, InternalProps, StyledComponentProps<typeof DefaultElement | "image"> {
    /**
     * The name of the person in the avatar.
     */
    name: string;
    /**
     * The allowed number of retry to load a remote image.
     */
    retryCount?: number;
    /**
     * An avatar can vary in size.
     */
    size?: ResponsiveProp<"xs" | "sm" | "md" | "lg" | "xl">;
    /**
     * The url of a remote image or an image object.
     */
    src?: string;
}

function AvatarImage({
    "aria-label": ariaLabel,
    name,
    retryCount,
    size,
    src
}: any) {
    if (!isString(src)) {
        return (
            <Img alt={name} className="o-ui-avatar-image" src={src} />
        );
    }

    return (
        <AsyncImage
            alt={name}
            className="o-ui-avatar-image"
            retryCount={retryCount}
            src={src}
        >
            <AvatarInitials
                aria-label={ariaLabel}
                name={name}
                size={size}
            />
        </AsyncImage>
    );
}

function getColorIndexForInitial(name: string, maxNumberOfColor: number) {
    let hashCode = 0;

    for (let i = name.length - 1; i >= 0; i--) {
        const character = name.charCodeAt(i);
        const shift = i % 8;

        hashCode ^= (character << shift) + (character >> (8 - shift));
    }

    return hashCode % maxNumberOfColor;
}

function AvatarInitials({ "aria-label": ariaLabel, name, size }: Partial<InnerAvatarProps>) {
    const initials = useMemo(() => {
        const cleanName = name.replace(/\s+/g, " ").trim();
        const [firstName, lastName] = cleanName.split(" ");
        const letters = !isNil(firstName) && !isNil(lastName)
            ? `${firstName.charAt(0)}${lastName.charAt(0)}`
            : firstName.charAt(0);

        return size === "xs" && letters.length > 1 ? letters.charAt(0) : letters;
    }, [name, size]);

    const variantToUse = useMemo(() => `option${getColorIndexForInitial(name, 8) + 1}`, [name]);

    const initialValue = size === "xs" ? initials.at(0) : initials;
    const tokenBackgroundColor = `var(--hop-decorative-${variantToUse}-surface-strong)`;
    const tokenTextColor = `var(--hop-decorative-${variantToUse}-text)`;

    return (
        <AvatarText
            aria-label={ariaLabel ?? name}
            role="img"
            size={size}
            style={{
                backgroundColor: tokenBackgroundColor,
                color: tokenTextColor
            }}
        >
            {initialValue}
        </AvatarText>
    );
}

/* eslint-disable sort-keys, sort-keys-fix/sort-keys-fix */
const textSize = createSizeAdapter({
    "xs": "xs",
    "sm": "xs",
    "md": "md",
    "lg": "lg",
    "xl": "xl",
    "2xl": "2xl"
});
/* eslint-enable sort-keys, sort-keys-fix/sort-keys-fix */

export function AvatarText(props: any) {
    const {
        children,
        size,
        ...rest
    } = omitProps(props, ["src"]);

    return (
        <Text
            {...mergeProps(
                rest,
                {
                    className: "o-ui-avatar-text",
                    size: textSize(size)
                }
            )}
        >
            {children}
        </Text>
    );
}

export function InnerAvatar({
    "aria-label": ariaLabel,
    as = DefaultElement,
    forwardedRef,
    name,
    retryCount,
    size,
    src,
    ...rest
}: InnerAvatarProps) {
    const sizeValue = useResponsiveValue(size);

    const content = !isNilOrEmpty(src)
        ? (
            <AvatarImage
                aria-label={ariaLabel}
                name={name}
                retryCount={retryCount}
                size={sizeValue}
                src={src}
            />
        ) : (
            <AvatarInitials
                aria-label={ariaLabel}
                name={name}
                size={sizeValue}
            />
        );

    return (
        <Box
            {...mergeProps(
                rest,
                {
                    as,
                    className: cssModule(
                        "o-ui-avatar",
                        normalizeSize(sizeValue)
                    ),
                    ref: forwardedRef
                }
            )}
        >
            {content}
        </Box>
    );
}

InnerAvatar.defaultElement = DefaultElement;

/**
 * An avatar is a graphical representation of a user and typically appears in list and card views, along side a user's information and/or content that they have created
 *
 * [Documentation](https://wl-orbiter-website.netlify.app/?path=/docs/avatar--default-story)
*/
export const Avatar = slot("avatar", forwardRef<any, OmitInternalProps<InnerAvatarProps>>((props, ref) => (
    <InnerAvatar {...props} forwardedRef={ref} />
)));

export type AvatarProps = ComponentProps<typeof Avatar>;
