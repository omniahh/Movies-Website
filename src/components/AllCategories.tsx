import {
  StyledFavoriteIcon,
  StyledStarIcon,
  StyledRocketIcon,
  StyledVideocamIcon,
  StyledBoltIcon,
  StyledEmojiIcon,
} from "../styled/StyledIcon";

import { Box, Container, Stack } from "@mui/material";
import {
  AllCategoriesTypography,
  SectionTypography,
} from "../styled/StyledTypography";

import { useContext } from "react";
import { ColorModeContext } from "../contexts/ColorModeContext";
import { SxProps, Theme, useTheme } from "@mui/material";

const waveBoxsx = {
  position: "absolute",
  bottom: "-95%",
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

const AllCategoriesStyles = (theme: Theme): SxProps<Theme> => {
  const defaultStyles: SxProps<Theme> = {};
  switch (theme.palette.mode) {
    case "dark":
      return {
        ...defaultStyles,

        fill: "#2B2C3F",
      };

    case "light": {
      return {
        ...defaultStyles,
        fill: "#F3F4FB",
      };
    }
  }
};

const AllCategories = () => {
  const { toggleColorMode } = useContext(ColorModeContext);
  const theme = useTheme();

  return (
    <div>
      <Box
        component="section"
        mt={15}
        position={"relative"}
        sx={AllCategoriesStyles(theme)}
      >
        <Container>
          <Box margin={"50px"}>
            <SectionTypography variant={"h2"}>All</SectionTypography>
            <SectionTypography variant={"h2"} color={"#4E68FA"}>
              Categories
            </SectionTypography>
          </Box>

          <Stack
            direction="row"
            spacing={10}
            justifyContent={"center"}
            sx={{ sm: { width: "400px" } }}
          >
            <Box>
              <StyledFavoriteIcon></StyledFavoriteIcon>
              <AllCategoriesTypography>ROMANTIC</AllCategoriesTypography>
            </Box>
            <Box>
              <StyledStarIcon></StyledStarIcon>
              <AllCategoriesTypography>SUPER HEROES</AllCategoriesTypography>
            </Box>

            <Box>
              <StyledRocketIcon></StyledRocketIcon>
              <AllCategoriesTypography>SCI-FI</AllCategoriesTypography>
            </Box>

            <Box>
              <StyledVideocamIcon></StyledVideocamIcon>
              <AllCategoriesTypography>HOLLYWOOD</AllCategoriesTypography>
            </Box>
            <Box>
              <StyledBoltIcon></StyledBoltIcon>
              <AllCategoriesTypography>ACTIONS</AllCategoriesTypography>
            </Box>
            <Box>
              <StyledEmojiIcon></StyledEmojiIcon>
              <AllCategoriesTypography>COMEDY</AllCategoriesTypography>
            </Box>
          </Stack>
        </Container>
        <Box sx={AllCategoriesStyles(theme)}>
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
      </Box>
    </div>
  );
};

export default AllCategories;
