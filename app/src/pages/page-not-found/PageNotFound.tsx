import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();
  const userInfo =
    sessionStorage.userInfo && JSON.parse(sessionStorage.userInfo);

  const handleClick = () => {
    userInfo?.token.length
      ? userInfo?.role === "Admin"
        ? navigate("/admin/dashboard")
        : navigate("/")
      : navigate("/login");
  };

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      className="min-h-screen items-center "
    >
      <Paper
        elevation={1}
        className="w-[600px] px-14 py-20 !rounded-xl bg-white shadow border border-gray-200"
      >
        <Grid item>
          <Typography
            variant="h4"
            className="text-[#525252] !text-3xl text-center !font-bold"
          >
            404 Page not found
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="subtitle1"
            className="!text-lg w-3/4 text-center !mx-auto !pb-6"
          >
            Please click on below button to redirect home page
          </Typography>
        </Grid>
        <Grid item>
          <Button
            aria-label="home"
            color="primary"
            variant="contained"
            fullWidth
            sx={{ padding: "15px 0", fontWeight: "700" }}
            onClick={handleClick}
          >
            Go Back
          </Button>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default PageNotFound;
