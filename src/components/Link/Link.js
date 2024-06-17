import { LinkText, LinkTouch } from "./Style"

export const Link = ({ textLink, fontSize, color, onPress, fontFamily }) => {

    return (
        <LinkTouch
            onPress={onPress}>
            <LinkText
                fontSize={fontSize}
                color={color}
                fontFamily={fontFamily}
            >
                {textLink}
            </LinkText>
        </LinkTouch>
    );

}