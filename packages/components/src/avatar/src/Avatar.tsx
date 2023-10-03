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
    size?: ResponsiveProp<"2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl">;
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

const O365InitialsColorsForName = [
    "#99B433",
    "#6BA5E7",
    "#E773BD",
    "#00A300",
    "#1E7145",
    "#FF0097",
    "#7E3878",
    "#603CBA",
    "#5E4B8B",
    "#00ABA9",
    "#2D89EF",
    "#2B5797",
    "#DA532C",
    "#B91D47"
];

function AvatarInitials({ "aria-label": ariaLabel, name, size }: Partial<InnerAvatarProps>) {
    const initials = useMemo(() => {
        const cleanName = name.replace(/\s+/g, " ").trim();

        const [firstName, lastName] = cleanName.split(" ");

        return !isNil(firstName) && !isNil(lastName)
            ? `${firstName.charAt(0)}${lastName.charAt(0)}`
            : firstName.charAt(0);
    }, [name]);

    const color = useMemo(() => {
        let hashCode = 0;

        for (let i = name.length - 1; i >= 0; i--) {
            const character = name.charCodeAt(i);
            const shift = i % 8;

            hashCode ^= (character << shift) + (character >> (8 - shift));
        }

        return O365InitialsColorsForName[hashCode % O365InitialsColorsForName.length];
    }, [name]);

    return (
        <AvatarText
            aria-label={ariaLabel ?? name}
            role="img"
            size={size}
            style={{
                backgroundColor: color
            }}
        >
            {initials}
        </AvatarText>
    );
}

/* eslint-disable sort-keys, sort-keys-fix/sort-keys-fix */
const textSize = createSizeAdapter({
    "2xs": "xs",
    "xs": "xs",
    "sm": "sm",
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
 * [Documentation](https://wl-orbiter-website.netlify.app//?path=/docs/avatar--default-story)
*/
export const Avatar = slot("avatar", forwardRef<any, OmitInternalProps<InnerAvatarProps>>((props, ref) => (
    <InnerAvatar {...props} forwardedRef={ref} />
)));

export type AvatarProps = ComponentProps<typeof Avatar>;
