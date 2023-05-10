import { Image as UIImage } from "semantic-ui-react";

import IImageGroupProps from "./IImageGroupProps";

const ImageGroup = ({children, ...rest}: IImageGroupProps) => {
    return <UIImage.Group {...rest}>{children}</UIImage.Group>;
}

export default ImageGroup;