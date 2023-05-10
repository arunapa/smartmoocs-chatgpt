import Link from "next/link";
import {
  Container,
  Button,
  Header,
  Layout
} from "../components";

import styles from "../styles/Home.module.scss";

const Home = () => {
  return (
    <Layout className={styles.content}>
      {/* <div className={styles.homepage} /> */}
      <Container className={styles.centerFrame}>
        <Header as="h1" textAlign="center">SmartMOOCs</Header>
        <p className={styles.subtitle}>A project dedicated to enhancing the online learning experience 
        by providing tools and resources for instructors and students of Massive Open Online Courses. 
        The student experience is enhanced by providing a visualization of the relative difficulty 
        of each part of the lecture. Instructors can access surveys submitted by students to rank 
        the difficulty of topics in each lecture which assists instructors in better understanding 
        which course topics require more attention.</p>
        <p className={styles.subtitle}>Start your optimized learning experience now!</p>
        <Link href="/courses" passHref>
          <Button className={styles.button} as="button">Courses</Button>
        </Link>
      </Container>
    </Layout>
  )
}

export default Home;
