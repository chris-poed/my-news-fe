import { Container, Link, Typography } from "@mui/material";

const AboutPage = () => {
  return (
    <>
      <Link href="/" underline="hover">
        {"Back to articles"}
      </Link>
      <Container maxWidth={"sm"}>
        <Typography variant="body1">About page</Typography>
      </Container>
    </>
  );
};

export default AboutPage;
