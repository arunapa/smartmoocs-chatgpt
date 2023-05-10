import Link from "next/link";
import Head from "next/head";
import { Grid } from "semantic-ui-react";
import {
    Container,
    Header,
    Menu,
    MenuItem,
    LayoutBreadcrumbs
} from "../../../components";

import { csx } from "../../../util";
import { LayoutProps, ogDefaults } from "./ILayoutProps";
import styles from "./Layout.module.scss";

const Layout = ({
    title="Smart MOOCs",
    fluid=false,
    breadcrumbsFluid=false,
    breadcrumbs,
    breadcrumbsClassName,
    className,
    children,
    externalGuide,
    openGraph
}: LayoutProps) => {
    const parsedTitle = title === "Smart MOOCs" ? title : `${title} | Smart MOOCs`;
    return (
        <div className={styles.moocs}>
            {/* Header metadata */}
            <Head>
                <title>{parsedTitle}</title>
                <meta name="og:title" content={openGraph?.ogTitle ?? ogDefaults.ogTitle} />
                <meta name="og:image" content={openGraph?.ogImage ?? ogDefaults.ogImage} />
                <meta name="description" content={openGraph?.ogDescription ?? ogDefaults.ogDescription} />
                <meta name="og:description" content={openGraph?.ogDescription ?? ogDefaults.ogDescription} />
                {openGraph?.ogVideo && <meta name="og:video" content={openGraph.ogVideo} />}
                {openGraph?.ogVideoType && <meta name="og:video:type" content={openGraph.ogVideoType} />}
                <link rel="icon" href="//cdn.brand.illinois.edu/favicon.ico" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css" />
            </Head>
            <Menu fixed="top">
                <Container>
                    <MenuItem as="a" header>
                        <Link href="/" passHref>
                            <Header as="h2" className={styles.logo}  tabIndex={0}>
                                <span className={styles.thin}>Smart</span>MOOCs
                            </Header>
                        </Link>
                    </MenuItem>
                </Container>
            </Menu>
            {breadcrumbs && <Container fluid={breadcrumbsFluid} className={styles.navbar}>
                <Grid columns={2}>
                    <Grid.Row>
                        <Grid.Column width={8} textAlign="left">
                            <LayoutBreadcrumbs breadcrumbs={breadcrumbs} className={breadcrumbsClassName} />
                        </Grid.Column>
                        <Grid.Column width={8} textAlign="right" className={styles.externalGuide}>
                            {externalGuide}
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>}
            <Container fluid={fluid} className={csx(styles.content, className)}>
                {children}
            </Container>
        </div>
    );
}

export default Layout;