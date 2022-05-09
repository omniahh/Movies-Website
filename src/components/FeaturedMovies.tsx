import { Stack, Typography, Container, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import { StyledSlowMotionVideoIcon } from "../styled/StyledIcon";
import { StyledFeaturedMoviesPaper } from "../styled/StyledPaper";
import {
  CaptionNewBox,
  FeaturedMoviesBox,
  OverlayBox,
} from "../styled/StyledBox";
import { SectionTypography } from "../styled/StyledTypography";
import { Movies } from "../data/featuredMovies";
import { useContext } from "react";
import { ColorModeContext } from "../contexts/ColorModeContext";
import { SxProps, Theme, useTheme } from "@mui/material";



const FeaturedMoviesStyles = (theme: Theme): SxProps<Theme> => {
  const defaultStyles: SxProps<Theme> = {};
  switch (theme.palette.mode) {
    case "dark":
      return {
        ...defaultStyles,
        fill: "#422936",
      };

    case "light": {
      return {
        fill: "#FEF1F6",
      };
    }
  }
};

const waveBoxsx = {
  position: "absolute",
  bottom: "-30%",
  left: 0,
  width: "100%",
  overflow: "hidden",
  lineHeight: 0,
  zIndex: 0,
};
const wavesx = {
  position: "relative",
  display: "block",
  width: "calc(114% + 1.3px)",
  height: "243px",
  transform: "rotateY(180deg)",
};

const imgsx = {
  width: 260,
  height: 360,
  borderRadius: 4,

  boxShadow:
    "0px 2px 4px -1px rgb(128 128 128 / 20%), 0px 4px 5px 0px rgb(128 128 128 / 14%), 0px 1px 10px 0px rgb(128 128 128 / 12%);",
  position: "absolute",
  top: 0,
  left: 0,
};

const FeaturedMovies = () => {
  const theme = useTheme();

  return (
    <Box
      mt={50}
      component="section"
      position={"relative"}
      sx={FeaturedMoviesStyles(theme)}
    >
      <Container>
        <Grid container>
          <Stack direction={"row"} alignItems="center" flexWrap={"wrap"}>
            <Grid item sm={12} md={3}>
              <Box textAlign={"start"}>
                <SectionTypography variant="h2">Featured</SectionTypography>
                <SectionTypography variant="h2" color={"#304FFE"}>
                  Movies
                </SectionTypography>
                <Typography
                  marginTop={"15px"}
                  fontSize="1.1em"
                  fontWeight={400}
                >
                  Watch and download full film, seasons and episodes movies & TV
                  show online or stream right to your smart TV, game console,
                  PC, Mac, mobile, tablet and more
                </Typography>
              </Box>
            </Grid>
            {Movies.map((el) => {
              return (
                <Grid item sm={12} md={3} key={el.id} zIndex={333}>
                  <FeaturedMoviesBox component={"figure"}>
                    <StyledFeaturedMoviesPaper>
                      <Typography
                        sx={{
                          fontWeight: 800,
                          position: "relative",
                          top: "28px",
                        }}
                      >
                        {" "}
                        {el.title}
                      </Typography>
                    </StyledFeaturedMoviesPaper>

                    <Box
                      component="img"
                      sx={imgsx}
                      alt="The Lorem"
                      src={el.image}
                    />
                    <OverlayBox>
                      <StyledSlowMotionVideoIcon></StyledSlowMotionVideoIcon>
                    </OverlayBox>
                    <CaptionNewBox>New</CaptionNewBox>
                  </FeaturedMoviesBox>
                </Grid>
              );
            })}
          </Stack>
        </Grid>
      </Container>
      <Box sx={FeaturedMoviesStyles(theme)}>
        <Box sx={waveBoxsx}>
          <Box sx={wavesx}>
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
            </svg>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default FeaturedMovies;
