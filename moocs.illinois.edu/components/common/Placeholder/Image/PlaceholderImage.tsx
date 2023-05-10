import { Placeholder as UIPlaceholder } from "semantic-ui-react";

import IPlaceholderImageProps from "./IPlaceholderImageProps";

const PlaceholderImage = ({children, ...rest}: IPlaceholderImageProps) => {
    return <UIPlaceholder.Image {...rest}>{children}</UIPlaceholder.Image>
}

export default PlaceholderImage;