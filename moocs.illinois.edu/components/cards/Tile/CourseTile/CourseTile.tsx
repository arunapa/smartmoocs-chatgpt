import Tile from "../Tile";
import { CourseTileProps } from "./ICourseTileProps";

/**
 * Tile for an individual course.
 */
const CourseTile = ({imageUrl = "https://marketing.illinois.edu/build/images/header-design.9cbc9bfd.jpg", ...rest}: CourseTileProps) => {
    return <Tile imageUrl={imageUrl} {...rest} />
}

export default CourseTile;