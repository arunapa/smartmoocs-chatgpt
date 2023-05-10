import { Image as UIImage } from "semantic-ui-react";

import IImageProps from "./IImageProps";

const Image = ({children, ...rest}: IImageProps) => {
    return <UIImage {...rest}>{children}</UIImage>;
}

export default Image;