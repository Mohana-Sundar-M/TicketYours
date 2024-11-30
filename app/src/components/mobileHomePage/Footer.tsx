import Typography from "@mui/material/Typography";
import CopyrightIcon from "@mui/icons-material/Copyright";
import Box from "@mui/material/Box";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";

const Footer = () => {
  return (
    <Box 
      component="footer"
      className="bg-[#beede4] text-gray-800 p-4 sm:p-6"
    >
      <Box className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-8">
        <Box className="flex flex-col gap-1">
          <Typography variant="h6" className="text-[#61c4a9] font-semibold text-sm"> {/* Smaller font size for heading */}
            About Us
          </Typography>
          <Typography
            variant="body2"
            className="hover:text-[#61c4a9] cursor-pointer text-xs"  
          >
            Terms And Conditions
          </Typography>
          <Typography
            variant="body2"
            className="hover:text-[#61c4a9] cursor-pointer text-xs"
          >
            Privacy Policy
          </Typography>
          <Typography
            variant="body2"
            className="hover:text-[#61c4a9] cursor-pointer text-xs"
          >
            Purchase Policy
          </Typography>
        </Box>
        <Box className="flex flex-col gap-1">
          <Typography variant="h6" className="text-[#61c4a9] font-semibold text-sm">
            Follow Us
          </Typography>
          <Box className="flex items-center gap-3">
            <InstagramIcon
              fontSize="medium"
              className="cursor-pointer hover:text-[#61c4a9]"
            />
            <FacebookIcon
              fontSize="medium"
              className="cursor-pointer hover:text-[#61c4a9]"
            />
            <XIcon
              fontSize="medium"
              className="cursor-pointer hover:text-[#61c4a9]"
            />
          </Box>
        </Box>
        <Box className="flex flex-col gap-1">
          <Typography variant="h6" className="text-[#61c4a9] font-semibold text-sm">
            Contact Us
          </Typography>
          <Typography variant="body2" className="text-xs">
            Email: support@movietickets.com
          </Typography>
          <Typography variant="body2" className="text-xs">Phone: +123 456 7890</Typography>
        </Box>
      </Box>
      <Box className="mt-6 text-center border-t border-gray-400 pt-2">
        <Typography
          variant="body2"
          className="flex justify-center items-center gap-1 text-xs"  
        >
          <CopyrightIcon fontSize="small" />
          2024 MovieTickets. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
