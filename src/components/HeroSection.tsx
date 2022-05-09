import React from "react";
import { CardMedia, Grid, Typography } from "@mui/material";
import { useTheme, useMediaQuery, Box } from "@mui/material";
import Navbar from "./Navbar";
import { StyledPauseCircleOutlineIcon } from "../styled/StyledIcon";
import Carousel from "./Carousel"
import { ColorModeContext } from "../contexts/ColorModeContext";
import { SxProps, Theme } from "@mui/material";
import { useContext } from "react";

const waveBoxsx = {
  position: "absolute",
  bottom: "-15%",
  left: 0,
  width: "100%",
  overflow: "hidden",
  lineHeight: 0,
  zIndex: 0,
};
const wavesx = {
  position: "relative",
  display: "block",
  width: "calc(272% + 1.3px)",
  height: "322px",
};

const WaveStyles = (theme: Theme): SxProps<Theme> => {
  const defaultStyles: SxProps<Theme> = {};
  switch (theme.palette.mode) {
    case "dark":
      return {
        ...defaultStyles,

        fill: "#1E1E1E",
      };

    case "light": {
      return {
        fill: "white",
      };
    }
  }
};

const HeroSection = () => {
  const theme = useTheme();
  const MobileView = useMediaQuery(theme.breakpoints.down("md"));
  const LaptopView = useMediaQuery(theme.breakpoints.up("md"));


  return (
    <div>
      <Navbar></Navbar>

      <Box component="section" position="relative" minHeight={"50vh"}>
        <Grid container>
          <Box sx={{ position: "absolute", top: "380px", left: "150px" }}>
            <Typography
              variant={"h4"}
              mb={1.5}
              color="white"
              textAlign={"start"}
            >
              Vivamus sit amet interdum elit
            </Typography>

            <Typography
              variant={"h1"}
              mb={1.5}
              color="white"
              fontWeight={"700"}
            >
              Mancing Mania The Movie
            </Typography>

            <Typography variant={"h2"} color="white" textAlign={"start"}>
              On the air 01 . 11 . 20
            </Typography>
          </Box>

          <Grid item hidden={MobileView} xs={12}>
            <StyledPauseCircleOutlineIcon></StyledPauseCircleOutlineIcon>
            <CardMedia
              component="iframe"
              src="https://www.youtube.com/embed/Salz7uGp72c"
              title="the theory of everything"
              sx={{ zIndex: -4 }}
              height={720}
              allow="autoPlay"
            />
          </Grid>

          <Grid item hidden={LaptopView} xs={12}>
            <CardMedia
              component="img"
              src="https://res.cloudinary.com/imajin/image/upload/v1592043727/movie/banner_fgsyfg.jpg"
              title="the theory of everything"
              width={"100%"}
              height={450}
            />
          </Grid>
        </Grid>

        <Box sx={WaveStyles(theme)}>
          <Box sx={waveBoxsx} hidden={MobileView}>
            <Box sx={wavesx}>
              <svg
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
              >
                <path
                  d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                  className="shape-fill"
                ></path>
              </svg>
            </Box>
          </Box>
        </Box>


        <Carousel></Carousel>
      </Box>
    </div>
  );
};

export default HeroSection;
