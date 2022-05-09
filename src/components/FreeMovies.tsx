import React from "react";
import { Paper, Box, Grid, Stack } from "@mui/material";
import FreeBreakfastIcon from "@mui/icons-material/FreeBreakfast";
import {
  FreeMoviesBox,
  FreeMoviesImgBox,
  FreeMoviesOverlay,
} from "../styled/StyledBox";
import { FreeMoviesTypography } from "../styled/StyledTypography";
import { useContext } from "react";
import { ColorModeContext } from "../contexts/ColorModeContext";
import { SxProps, Theme, useTheme } from "@mui/material";

const waveBoxsx = {
  position: "absolute",
  bottom: "-110%",
  left: 0,
  width: "100%",
  overflow: "hidden",
  lineHeight: 0,
  zIndex: 0,
};
const wavesx = {
  position: "relative",
  display: "block",
  width: "calc(140% + 1.3px)",
  height: "391px",
  transform: "rotateY(180deg)",
};

const FreeMoviesStyles = (theme: Theme): SxProps<Theme> => {
  const defaultStyles: SxProps<Theme> = {};
  switch (theme.palette.mode) {
    case "dark":
      return {
        ...defaultStyles,

        backgroundColor: "#422936",
        fill: "#422936",
      };

    case "light": {
      return {
        ...defaultStyles,
        backgroundColor: "#FEF1F6",
        fill: "#FEF1F6",
      };
    }
  }
};

const FreeMovies = () => {
  const { toggleColorMode } = useContext(ColorModeContext);
  const theme = useTheme();
  return (
    <div>
      <Box
        component={"section"}
        mt={"50px"}
        position={"relative"}
        sx={FreeMoviesStyles(theme)}
      >
        <Stack direction={"row"} m={2}>
          <Grid container columnSpacing={2}>
            <Grid item md={3}>
              <FreeMoviesBox zIndex={333}>
                <FreeMoviesImgBox
                  sx={{
                    "&:hover": {
                      transform: "translatex(10px)",
                      direction: "rtl",
                    },
                  }}
                >
                  <Box
                    component="img"
                    sx={{
                      width: "100%",
                    }}
                    alt="Popcorn."
                    src="https://res.cloudinary.com/imajin/image/upload/v1592043739/movie/trending1_lycszf.jpg"
                  />
                  <FreeMoviesOverlay></FreeMoviesOverlay>
                  <FreeMoviesTypography
                    variant="h4"
                    sx={{ bottom: "25%", left: "22%" }}
                  >
                    FREE RENT 3 DAYS
                  </FreeMoviesTypography>
                </FreeMoviesImgBox>
              </FreeMoviesBox>
            </Grid>

            <Grid item md={6} xs={12}>
              <FreeMoviesBox zIndex={333}>
                <FreeMoviesImgBox
                  sx={{ "&:hover": { transform: "scale(1.1)" } }}
                >
                  <Box
                    component="img"
                    sx={{
                      width: "100%",
                      height: "100%",
                    }}
                    alt="Cinema."
                    src="https://res.cloudinary.com/imajin/image/upload/v1592043742/movie/trending2_x3cuwt.jpg"
                  />

                  <FreeMoviesOverlay></FreeMoviesOverlay>
                </FreeMoviesImgBox>

                <FreeMoviesTypography
                  variant="h1"
                  sx={{ bottom: "45%", right: "7%" }}
                >
                  <FreeBreakfastIcon fontSize="large"></FreeBreakfastIcon> FREE{" "}
                </FreeMoviesTypography>
                <FreeMoviesTypography
                  variant="h1"
                  sx={{ bottom: "30%", right: "7%" }}
                >
                  {" "}
                  Movies{" "}
                </FreeMoviesTypography>
              </FreeMoviesBox>
            </Grid>

            <Grid item md={3}>
              <FreeMoviesBox>
                <FreeMoviesImgBox
                  zIndex={333}
                  sx={{
                    "&:hover": {
                      transform: "translatex(10px)",
                      direction: "rtl",
                    },
                  }}
                >
                  <Box
                    component="img"
                    sx={{
                      width: "100%",
                    }}
                    alt="Dancing girl."
                    src="https://res.cloudinary.com/imajin/image/upload/v1592043745/movie/trending3_dd1yxr.jpg"
                  />

                  <FreeMoviesOverlay></FreeMoviesOverlay>

                  <FreeMoviesTypography
                    variant="h4"
                    sx={{
                      bottom: "35%",
                      left: "33%",
                    }}
                  >
                    FREE UP TO 5{" "}
                  </FreeMoviesTypography>
                  <FreeMoviesTypography
                    variant="h4"
                    sx={{
                      bottom: "25%",
                      right: "30%",
                    }}
                  >
                    {" "}
                    EPISODES{" "}
                  </FreeMoviesTypography>
                </FreeMoviesImgBox>
              </FreeMoviesBox>
            </Grid>
          </Grid>
        </Stack>
        <Box sx={FreeMoviesStyles(theme)}>
          <Box sx={waveBoxsx}>
            <Box sx={wavesx}>
              <svg
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
              >
                <path
                  d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                  className="shape-fill"
                ></path>
              </svg>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default FreeMovies;
