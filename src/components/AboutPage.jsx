import { Container, Link, Typography } from "@mui/material";

const AboutPage = () => {
  return (
    <>
      <Link href="/" underline="hover" variant="body1">
        {"Back to articles"}
      </Link>
      <Container maxWidth={"sm"}>
        <Typography variant="body1">
          Welcome to My News - a full-stack community-driven news website to
          showcase the skills I've learnt on my software development bootcamp
          with Northcoders.
          <Link
            href="https://github.com/chris-poed/my-news-fe"
            underline="hover"
          >
            {"View the GitHub repo."}
          </Link>
        </Typography>
      </Container>
    </>
  );
};

export default AboutPage;
