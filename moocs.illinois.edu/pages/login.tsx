import Link from "next/link";
import {
  Container,
  Input,
  Button,
  Divider,
  Grid,
  GridRow,
  GridColumn,
  Header,
  Layout
} from "../components";

import styles from "../styles/Login.module.scss";

const login = () => {
  return (
    <Layout className={styles.content}>
      {/* <div className={styles.homepage} /> */}
      <Container className={styles.centerFrame}>
      <Header as="h1">SmartMOOCs</Header>
      <Grid columns={1} className={styles.gridPosition}>
        <GridRow centered>
            <GridColumn className={styles.colPosition}>
                <Input className={styles.input} placeholder="Email" type="email"></Input>
            </GridColumn>
            <Divider className={styles.divider} />
            <GridColumn className={styles.colPosition}>
              <Input className={styles.input} placeholder="Password" type="password"></Input>
            </GridColumn>
        </GridRow>
        <GridRow>
          <GridColumn>
            <Link href="" passHref>
              <Button className={styles.button} as="button">Login</Button>
            </Link>
          </GridColumn>
        </GridRow>
      </Grid>
      </Container>
    </Layout>
  )
}

export default login;