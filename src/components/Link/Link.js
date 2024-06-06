import { LinkText, LinkTouch } from "./Style"

export const Link = ({ textLink, fontSize, color, onPress }) => {

    return (
        <LinkTouch
            onPress={onPress}>
            <LinkText
                fontSize={fontSize}
                color={color}
            >{textLink}</LinkText>
        </LinkTouch>
    );



}