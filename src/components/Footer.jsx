import { Typography, Box, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        marginTop: 5,
      }}
    >
      <Link href="/about" underline="hover" variant="body1">
        {"About this page"}
      </Link>
    </Box>
  );
};

export default Footer;
