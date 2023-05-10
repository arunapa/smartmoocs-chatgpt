/** Basic components with class names. */
export interface IClassNameProps {
    /** A class name string. */
    className?: string;
}

export type PropsWithClassName<P = {}> = P & IClassNameProps;