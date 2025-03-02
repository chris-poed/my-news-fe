import { Typography, Box, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      <Link href="/about" underline="hover">
        {"About this page"}
      </Link>
    </Box>
  );
};

export default Footer;
