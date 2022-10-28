import Head from "next/head";
//import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
// import { useEffect } from "react";
// import { useMoralis } from "react-moralis";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

// export default function Home() {
//   const { isAuthenticated, authenticate } = useMoralis();
//   const router = useRouter();

//   useEffect(() => {
//     if (isAuthenticated) router.replace("/dashboard");
//   }, [isAuthenticated]);

export default function Home() {
  return (
    <div>
      <Head>
        <title>Moralis IO template</title>
        <meta
          name="description"
          content="A basic template of Moralis IO and 
      NEXTJS apps for commerce and advertising"
        />
        {/* // should try to add cdns here} */}
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossorigin="anonymous"
        />
      </Head>
      {/* onClick={() =>
          authenticate({ signingMessage: "Authorize linking of your wallet" })
        } */}
      <button className={styles.button}>Login using Metamask</button>

      {/* gallery component */}
      <Container fluid>
        //need to credit authors
        <Row>
          <Col xs="6" md="4">
            <Image
              src="/assets/images/photo1.jpg"
              className={styles.imageBorder}
              fluid
            />
          </Col>
          <Col xs="6" md="4">
            <Image
              src="/assets/images/photo2.jpg"
              className={styles.imageBorder}
              fluid
            />
          </Col>

          <Col xs="12" md="4">
            <Image
              src="/assets/images/photo6.jpg"
              className={styles.imageBorder}
              fluid
            />
          </Col>
        </Row>
        <Row>
          <Col xs="12" md="4">
            <Image
              src="/assets/images/photo3.jpg"
              className={styles.imageBorder}
              fluid
            />
          </Col>
          <Col xs="6" md="4">
            <Image
              src="/assets/images/photo4.jpg"
              className={styles.imageBorder}
              fluid
            />
          </Col>
          <Col xs="12" md="4">
            <Image
              src="/assets/images/photo5.jpg"
              className={styles.imageBorder}
              fluid
            />
          </Col>
        </Row>
      </Container>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
