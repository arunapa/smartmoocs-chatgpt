import Link from "next/link";
import { useRouter } from "next/router";
import { KeyboardEventHandler } from "react";

import type CourseraIconProps from "./ICourseraIconProps";
import { csx } from "../../../util";

import styles from "./CourseraIcon.module.scss";

const CourseraIcon = ({
    href,
    className,
    iconHref="https://s3.us-east-2.amazonaws.com/smartmoocs.illinois.edu/public/coursera_icon.png"
}: CourseraIconProps) => {
    const router = useRouter();

    /**
     * On key-press handler.
     * @param e Synthetic keyboard event.
     */
    const onKeyPress: KeyboardEventHandler<HTMLDivElement> = (e) => {
        if (e.key === "Enter") {
            router.push(href);
        }
    }

    return (
        <Link href={href}>
            <div
                tabIndex={0}
                onKeyPress={onKeyPress}
                className={csx(styles.courseraIcon, className)}
            >
                <div className={styles.visible}>
                    <img src={iconHref} className={styles.icon} />
                </div>
                <div className={styles.hidden}>Watch on Coursera</div>
            </div>
        </Link>
    )
}

export default CourseraIcon;