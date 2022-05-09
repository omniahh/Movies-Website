import { Stack, Typography, Box, Container, Grid } from "@mui/material";
import { StyledPlanPaper } from "../styled/StyledPaper";
// import { Stack } from '@mui/system';
import {  CardStyledButton } from "../styled/StyledButton";
import { DashedTypography, StyledTypography } from "../styled/StyledTypography";
import { LabelTypography } from "../styled/StyledTypography";

import { useContext } from "react";
import { ColorModeContext } from "../contexts/ColorModeContext";
import { SxProps, Theme, useTheme } from "@mui/material";

const waveBoxsx={
  position: "absolute",
bottom:"-57%",
  left: 0,
  width: "100%",
  overflow: "hidden",
  lineHeight: 0,

  zIndex: 0,

}
const wavesx = {
  position: "relative",
  display: "block",
  width: "calc(140% + 1.3px)",
  height: "386px",
  transform: "rotateY(180deg)",


};




const PlanCardStyles = (theme: Theme): SxProps<Theme> => {
  const defaultStyles: SxProps<Theme> = {};
  switch (theme.palette.mode) {
    case "dark":
      return {
        ...defaultStyles,

        backgroundColor: "#2B2C3F",
        fill: "#2B2C3F"
      
      };

    case "light": {
      return {
        ...defaultStyles,
        backgroundColor: "#F3F4FB",
        fill:"#F3F4FB"
      
      };
    }
  }
};


const PlanCard = () => {

  const { toggleColorMode } = useContext(ColorModeContext);
  const theme = useTheme();
  return (
    <>

      <Box mt={20} component={"section"} position="relative" sx={PlanCardStyles(theme)} >
        <Box margin={"50px"}>
          <Typography variant={"h2"} fontWeight={"600"}>
            Flexible
          </Typography>
          <Typography variant={"h2"} fontWeight={"600"} color={"#4E68FA"}>
            Pricing and Plan
          </Typography>
        </Box>

        {/* <ThemeProvider theme={CardTheme}> */}
          <Container>
            <Stack direction={"row"}>
              <Grid container>
                <Grid item xs={12} md={3}>          
                  <StyledPlanPaper   
                    sx={{
                      height: "430px",
                      marginTop: "40px",
                      "&:hover": {
                        border: "1px solid #3251FE",
                        boxShadow: "1px 1px 40px 0px #C2CAFE",
                      
                      },
                    }}
                  >
                    <Stack
                      sx={{
                        padding: "16px",
                      }}
                    >
                      <Box sx={{ padding: "25px 0px 16px" }}>
                        <LabelTypography variant="h6" style={{color:"#1A237E"}}>
                          BASIC
                        </LabelTypography>

                        <Typography variant="h2" fontWeight={600}>Free</Typography>
                      </Box>

                      <DashedTypography>
                        Nam sollicitudin dignissim
                      </DashedTypography>
                      <DashedTypography>Cras convallis lacus</DashedTypography>

                      <DashedTypography
                        sx={{
                          borderBottom: 0,
                        }}
                      >
                        Quisque ut metus
                      </DashedTypography>
                    </Stack>

                    <Box sx={{ padding: "16px" }}>
                      <StyledTypography>
                        Interdum et malesuada fames ac ante ipsum primis in
                        faucibus.
                      </StyledTypography>
                      <CardStyledButton
                        sx={{
                          backgroundColor: "#304FFE",
                          ":hover": { backgroundColor: "#1A237E" },
                        }}
                      >
                        {" "}
                        CHOOSE PLAN
                      </CardStyledButton>
                    </Box>
                  </StyledPlanPaper>
                </Grid>

                <Grid item xs={12} md={3}>
                  <StyledPlanPaper sx={{ zIndex: "3", border:"1px solid #E91E63" , overflow:"hidden" }} >
                    <Stack
                      sx={{
                        padding: "16px",
                      }}
                    >

                      <Box sx={{
                            left: "-30%",
                            width: "160%",
                            bottom: "72%",
                            height: "400px",
                            position: "absolute",
                            background:
                              "linear-gradient(145deg, #304FFE 40%, #E91E63 80%)",
                            borderRadius: "50%", zIndex:-2}}></Box>
                      <Box
                        sx={{
                          padding: "25px 0px 16px",
                      
                       
                        }}
                      >
                        <LabelTypography variant="h6" style={{color:"white"}}>BEST VALUE</LabelTypography>

                        <Typography variant="h2" color="white" fontWeight={600}>$24</Typography>
                      </Box>

                      <DashedTypography>
                        Nam sollicitudin dignissim
                      </DashedTypography>

                      <DashedTypography>Cras convallis lacus</DashedTypography>
                      <DashedTypography>Quisque ut metus</DashedTypography>
                      <DashedTypography>Vivamus sit amet</DashedTypography>
                      <DashedTypography
                        sx={{
                          borderBottom: 0,
                        }}
                      >
                        Cras convallis lacus orci
                      </DashedTypography>
                    </Stack>
                    <Box sx={{ padding: "16px" }}>
                      <StyledTypography>
                        Interdum et malesuada fames ac ante ipsum primis in
                        faucibus.
                      </StyledTypography>
                      <CardStyledButton> CHOOSE PLAN</CardStyledButton>
                    </Box>
                  </StyledPlanPaper>
                </Grid>

                <Grid item xs={12} md={3}>
                  <StyledPlanPaper sx={{ zIndex: "1" }}>
                    <Stack
                      sx={{
                        padding: "16px",
                      }}
                    >
                      <Box sx={{ padding: "25px 0px 16px" }}>
                        <LabelTypography variant="h6">PRO</LabelTypography>

                        <Typography variant="h2" fontWeight={600}>$54</Typography>
                      </Box>

                      <DashedTypography>
                        Nam sollicitudin dignissim
                      </DashedTypography>

                      <DashedTypography>Cras convallis lacus</DashedTypography>
                      <DashedTypography>Nulla lobortis nunc</DashedTypography>
                      <DashedTypography>Vitae scelerisque</DashedTypography>
                      <DashedTypography
                        sx={{
                          borderBottom: 0,
                        }}
                      >
                        Duis sed augue
                      </DashedTypography>
                    </Stack>
                    <Box sx={{ padding: "16px" }}>
                      <StyledTypography>
                        Interdum et malesuada fames ac ante ipsum primis in
                        faucibus.
                      </StyledTypography>
                      <CardStyledButton> CHOOSE PLAN</CardStyledButton>
                    </Box>
                  </StyledPlanPaper>
                </Grid>

                <Grid item xs={12} md={3}>
                  <StyledPlanPaper >
                    <Stack
                      sx={{
                        padding: "16px",
                      }}
                    >
                      <Box sx={{ padding: "25px 0px 16px" }}>
                        <LabelTypography variant="h6">ENTERPRISE</LabelTypography>

                        <Typography variant="h2" fontWeight={600}>$99</Typography>
                      </Box>

                      <DashedTypography >
                        Nam sollicitudin dignissim
                      </DashedTypography>

                      <DashedTypography>
                        Pellentesque ac bibendum
                      </DashedTypography>
                      <DashedTypography>Vestibulum consequat</DashedTypography>
                      <DashedTypography>Vestibulum consequat</DashedTypography>
                      <DashedTypography
                        sx={{
                          borderBottom: 0,
                        }}
                      >
                        Duis sed augue
                      </DashedTypography>
                    </Stack>
                    <Box sx={{ padding: "16px" }}>
                      <StyledTypography>
                        Interdum et malesuada fames ac ante ipsum primis in
                        faucibus.
                      </StyledTypography>
                      <CardStyledButton> CHOOSE PLAN</CardStyledButton>
                    </Box>
                  </StyledPlanPaper>
                </Grid>
              </Grid>
            </Stack>
          </Container>
        {/* </ThemeProvider> */}


        
   
<Box sx={PlanCardStyles(theme)}>
   
        <Box sx={waveBoxsx}>
          <Box sx={wavesx}>
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
    </svg>
    
          </Box>
        </Box>
        </Box>
      </Box>
    </>
  );
};

export default PlanCard;
