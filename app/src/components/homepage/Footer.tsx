import Typography from "@mui/material/Typography";
import CopyrightIcon from "@mui/icons-material/Copyright";
import Box from "@mui/material/Box";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";

const Footer = () => {
  return (
    <Box className="bg-[#beede4] text-gray-800 p-8 sm:p-12">
      <Box className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8 sm:gap-16">
        <Box className="flex flex-col gap-2">
          <Typography variant="h6" className="text-[#61c4a9] font-bold">
            About Us
          </Typography>
          <Typography
            variant="body2"
            className="hover:text-[#61c4a9] cursor-pointer"
          >
            Terms And Conditions
          </Typography>
          <Typography
            variant="body2"
            className="hover:text-[#61c4a9] cursor-pointer"
          >
            Privacy Policy
          </Typography>
          <Typography
            variant="body2"
            className="hover:text-[#61c4a9] cursor-pointer"
          >
            Purchase Policy
          </Typography>
        </Box>
        <Box className="flex flex-col gap-2">
          <Typography variant="h6" className="text-[#61c4a9] font-bold">
            Follow Us
          </Typography>
          <Box className="flex items-center gap-4">
            <InstagramIcon
              fontSize="large"
              className="cursor-pointer hover:text-[#61c4a9]"
            />
            <FacebookIcon
              fontSize="large"
              className="cursor-pointer hover:text-[#61c4a9]"
            />
            <XIcon
              fontSize="large"
              className="cursor-pointer hover:text-[#61c4a9]"
            />
          </Box>
        </Box>
        <Box className="flex flex-col gap-2">
          <Typography variant="h6" className="text-[#61c4a9] font-bold">
            Contact Us
          </Typography>
          <Typography variant="body2">
            Email: support@movietickets.com
          </Typography>
          <Typography variant="body2">Phone: +123 456 7890</Typography>
        </Box>
      </Box>
      <Box className="mt-8 text-center border-t border-gray-400 pt-4">
        <Typography
          variant="body2"
          className="flex justify-center items-center gap-1"
        >
          <CopyrightIcon fontSize="small" />
          2024 MovieTickets. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
