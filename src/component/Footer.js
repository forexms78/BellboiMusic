import { Box, Link, Typography } from "@mui/material";
import Copyright from "./Copyright";


function Footer() {

  
    return (
        <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          문의하기
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
        인스타그램 :
            <Link color="inherit" href="https://www.instagram.com/ringmybellboi/">
           Bellboi
        </Link>{' '}
        </Typography>
        <Copyright />
      </Box>
      
    );
  }

  export default Footer;
