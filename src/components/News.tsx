import React from "react";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { StyledButton } from "../styled/StyledButton";
import { useContext } from "react";
import { ColorModeContext } from "../contexts/ColorModeContext";
import { SxProps, Theme, useTheme } from "@mui/material";

const waveBoxsx = {
  position: "absolute",
  bottom: "-200%",
  left: 0,
  width: "100%",
  overflow: "hidden",
  lineHeight: 0,
  zIndex: 0,
};
const wavesx = {
  position: "relative",
  display: "block",
  width: "calc(125% + 1.3px)",
  height: "240px",
};

const wave2Boxsx = {
  position: "absolute",
  bottom: "-570%",
  right: "95.2%",
  width: "100%",
  overflow: "hidden",
  lineHeight: 0,
};
const wave2sx = {
  position: "relative",
  display: "block",
  width: "calc(150% + 1.3px)",
  height: "750px",
  transform: "rotate(90deg)",
  zIndex: 0,
  fill: "#E91E63",
};

const NewsStyles = (theme: Theme): SxProps<Theme> => {
  const defaultStyles: SxProps<Theme> = {};
  switch (theme.palette.mode) {
    case "dark":
      return {
        ...defaultStyles,

        fill: "#880E4F",
      };

    case "light": {
      return {
        ...defaultStyles,
        fill: "#F8BBD0",
      };
    }
  }
};

const News = () => {
  const theme = useTheme();
  return (
    <div>
      <Box component="section" mb={30} position={"relative"}>
        <Container>
          <Grid container m={6}>
            <Stack direction={"row"} spacing={4} flexGrow={1}>
              <Grid item xs={12} md={6}>
                <Box textAlign={"start"}>
                  <Box
                    component="img"
                    sx={{
                      float: "left",
                      width: 120,
                      height: 135,
                      borderRadius: 2,
                      mr: "30px",
                    }}
                    alt="lake rocks"
                    src="https://res.cloudinary.com/walden-global-services/image/upload/v1544584529/dandelion/3.jpg"
                  />
                  <Typography
                    sx={{ color: "#757575", fontSize: ".8em", fontWeight: 800 }}
                  >
                    NEWS
                  </Typography>
                  <Typography fontSize={"1.1em"}>
                    Sed imperdiet enim ligula, vitae viverra justo porta vel.
                    Duis eget felis bibendum, pretium mi sed, placerat ante.
                  </Typography>
                  <StyledButton
                    sx={{
                      color: "#304FFE",
                      mt: "10px",
                      p: "5px 10px",
                      ":hover": { backgroundColor: "#F2F2F2" },
                      ":focus": { backgroundColor: "white" },
                    }}
                  >
                    Read More
                  </StyledButton>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box textAlign={"start"}>
                  <Box
                    component="img"
                    sx={{
                      float: "left",
                      width: 120,
                      height: 135,
                      borderRadius: 2,
                      mr: "30px",
                    }}
                    alt="lake rocks"
                    src="https://res.cloudinary.com/walden-global-services/image/upload/v1544584529/dandelion/4.jpg"
                  />
                  <Typography
                    sx={{ color: "#757575", fontSize: ".8em", fontWeight: 800 }}
                  >
                    NEWS
                  </Typography>
                  <Typography fontSize={"1.1em"}>
                    Sed imperdiet enim ligula, vitae viverra justo porta vel.
                    Duis eget felis bibendum, pretium mi sed, placerat ante.
                  </Typography>
                  <StyledButton
                    sx={{
                      color: "#304FFE",
                      mt: "10px",
                      p: "5px 10px",
                      ":hover": { backgroundColor: "#F2F2F2" },
                      ":focus": { backgroundColor: "white" },
                    }}
                  >
                    Read More
                  </StyledButton>
                </Box>
              </Grid>
            </Stack>
          </Grid>
        </Container>

        <Box sx={NewsStyles(theme)}>
          <Box sx={waveBoxsx}>
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
        <Box sx={wave2Boxsx}>
          <Box sx={wave2sx}>
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
    </div>
  );
};

export default News;
