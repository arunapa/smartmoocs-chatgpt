import Link from "next/link";
import { withRouter } from "next/router";
import { Breadcrumb } from "semantic-ui-react";

import { LayoutBreadcrumbsProps, ILayoutBreadcrumbProps } from "./ILayoutBreadcrumbsProps";

const LinkableBreadcrumb = ({ text, href }: ILayoutBreadcrumbProps) => {
    return !!href ? <Link href={href}>{text}</Link> : <>{text}</>;
}

/**
 * Breadcrumbs for the Layout
 */
const LayoutBreadcrumbs = ({ breadcrumbs, router, className }: LayoutBreadcrumbsProps) => (
    <Breadcrumb icon="right angle" aria-label="Breadcrumbs" className={className}>
        {breadcrumbs?.map((breadcrumb, index) => (
            <>
            <Breadcrumb.Section link={!!breadcrumb.href} active={index === breadcrumbs.length - 1}>
                <div
                    tabIndex={breadcrumb.href !== undefined ? 0 : -1}
                    onKeyPress={(e) => {if (breadcrumb.href && e.key === "Enter") router.push(breadcrumb.href)}}
                >
                    <LinkableBreadcrumb {...breadcrumb} />
                </div>
            </Breadcrumb.Section>
            {index !== breadcrumbs.length - 1 && <Breadcrumb.Divider icon="right angle" />}
            </>
        ))}
    </Breadcrumb>
)

export default withRouter(LayoutBreadcrumbs);