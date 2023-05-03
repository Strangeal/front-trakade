import { Box, Divider, Grid, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import theme from "../Theme";

type Props = {};

const InventSummary = (props: Props) => {
  const isTable = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Grid container sx={{}}>
      <Grid item xs={12}>
        <Typography variant="h6" sx={{ mb: 3 }}>
          Inventory Summary
        </Typography>
        <Grid container spacing={1}>
          <Grid item xs={6} md={12}>
            <Box
              sx={{
                display: "flex",
                boxShadow: 3,
                p: 2,
                borderRadius: 2,
                bgcolor: "#FFFFFF",
                [theme.breakpoints.up("md")]: { p: 1 },
              }}
            >
              <Divider
                orientation="vertical"
                flexItem
                sx={{
                  borderWidth: 1,
                  borderColor: "#0000FF",
                  height: "inherit",
                  [theme.breakpoints.up("md")]: { display: "none" },
                }}
              />
              <Box
                sx={{
                  ml: 2,
                  [theme.breakpoints.up("md")]: {
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                  },
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    width: "100%",
                    [theme.breakpoints.up("md")]: {
                      textTransform: "uppercase",
                    },
                  }}
                >
                  In Hand
                </Typography>
                {isTable ? (
                  <Divider
                    sx={{
                      borderWidth: 1,
                      height: "inherit",
                    }}
                    orientation="vertical"
                    flexItem
                  />
                ) : (
                  ""
                )}
                <Typography
                  variant="h6"
                  sx={{ [theme.breakpoints.up("md")]: { ml: 1, mr: 2 } }}
                >
                  500
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default InventSummary;
