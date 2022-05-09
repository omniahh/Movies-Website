import React from "react";

import {
  Box,
  Typography,
  Container,
  Grid,
  Stack,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { ExploreButton } from "../styled/StyledButton";
import { TopCategoriesBox} from "../styled/StyledBox";






const TopCategories = () => {
  const mobiletheme = useTheme();
  const mobileView = useMediaQuery(mobiletheme.breakpoints.down("md"));


 
  return (
    <div>
     
    
        <Box component={"section"} mt={"80px"} >
          <Container>
            <Stack direction={"row"} mb={3}>
              <Grid container columnSpacing={3}>
                <Grid item md={6}>
                  <Stack
                    height="170px"
                    justifyContent={"center"}
                    textAlign={"start"}
                  >
                    <Typography
                      variant={"h2"}
                      zIndex={333} 
                    >
                      Top
                    </Typography>
                    <Typography
                      variant={"h2"}
                      color={"#304FFE"} zIndex={333}
                    >
                      Categories
                    </Typography>
                  </Stack>
                </Grid>

                <Grid item md={3} xs={12}>
                  <TopCategoriesBox
                    sx={{
                      backgroundColor: "#E79A1C",

                      height: "170px",
                    }}
                  >
                    <Box
                      component="img"
                      src="https://res.cloudinary.com/imajin/image/upload/v1592043717/movie/cat1_jcxhfm.png"
                      title="Academy Awards"
                      sx={{
                        width: "16%",
                        position: "relative",
                        top: "25%",
                        right: "32%",
                      }}
                    />

                    <Box
                      textAlign={"start"}
                      sx={{ position: "absolute", top: "35%", left: "30%" }}
                    >
                      <Typography variant="h6">Academy Awards</Typography>
                      <Typography color={"white"}>24 items</Typography>
                    </Box>
                  </TopCategoriesBox>
                </Grid>
                <Grid item md={3} xs={12}>
                  <TopCategoriesBox
                    sx={{
                      backgroundColor: "#E91E63",
                      sm: {
                        mt: 2,
                      },
                      height: "170px",
                    }}
                  >
                    <Box
                      component="img"
                      src="https://res.cloudinary.com/imajin/image/upload/v1592043718/movie/cat2_e8w6bj.png"
                      title="Animations"
                      sx={{
                        width: "30%",
                        position: "relative",
                        top: "30%",
                        right: "25%",
                      }}
                    />

                    <Box
                      textAlign={"start"}
                      sx={{ position: "absolute", top: "35%", left: "40%" }}
                    >
                      <Typography variant="h6">Animations</Typography>
                      <Typography color={"white"}>24 items</Typography>
                    </Box>
                  </TopCategoriesBox>
                </Grid>
              </Grid>
            </Stack>

            <Stack direction={"row"}>
              <Grid container columnSpacing={3}>
                <Grid item md={6}>
                  <Stack direction={"column"} gap={3}>
                    <TopCategoriesBox
                      sx={{
                        backgroundColor: "#1A237E",

                        height: "290px",
                      }}
                    >
                      <Box
                        component="img"
                        src="https://res.cloudinary.com/imajin/image/upload/v1592043718/movie/cat3_pfb5um.png"
                        title="Actions"
                        sx={{
                          position: "absolute",
                          bottom: "-75%",
                          right: "45%",
                          width: "75%",
                          opacity: 0.15,
                        }}
                      />
                      <Box
                        component="img"
                        src="https://res.cloudinary.com/imajin/image/upload/v1592043718/movie/cat3_pfb5um.png"
                        title="Actions"
                        sx={{
                          position: "relative",
                          bottom: "0%",
                          right: "28%",
                          width: "35%",
                        }}
                      />

                      <Box
                        textAlign={"start"}
                        sx={{ position: "absolute", top: "30%", left: "42%" }}
                      >
                        <Typography variant="h3">Actions</Typography>
                        <Typography color={"white"}>24 items</Typography>
                      </Box>
                      <Box hidden={mobileView}>
                        <ExploreButton>Explore</ExploreButton>
                      </Box>
                    </TopCategoriesBox>

                    <Grid container columnSpacing={3}>
                      <Grid item>
                        <TopCategoriesBox
                          sx={{
                            backgroundColor: "#14A8B9",
                            sm: {
                              mb: 2,
                            },

                            height: "165px",
                          }}
                        >
                          <Box
                            component="img"
                            src="https://res.cloudinary.com/imajin/image/upload/v1592043724/movie/cat4_k7pe72.png"
                            title="Romance Drama"
                            sx={{
                              width: "45%",
                              position: "relative",
                              top: "48%",
                              right: "20%",
                            }}
                          />

                          <Box
                            textAlign={"start"}
                            sx={{
                              position: "absolute",
                              top: "25%",
                              left: "50%",
                            }}
                          >
                            <Typography variant="h6">Romance</Typography>
                            <Typography variant="h6">Drama</Typography>
                            <Typography color={"white"}>24 items</Typography>
                          </Box>
                        </TopCategoriesBox>
                      </Grid>

                      <Grid item>
                        <TopCategoriesBox
                          sx={{
                            backgroundColor: "#289F41",

                            height: "165px",
                          }}
                        >
                          <Box
                            component="img"
                            src="https://res.cloudinary.com/imajin/image/upload/v1592043721/movie/cat5_v9qfbf.png"
                            title="Comedy"
                            sx={{
                              width: "45%",
                              position: "relative",
                              top: "55%",
                              right: "17%",
                            }}
                          />

                          <Box
                            textAlign={"start"}
                            sx={{
                              position: "absolute",
                              top: "35%",
                              left: "55%",
                            }}
                          >
                            <Typography variant="h6">Comedy</Typography>
                            <Typography color={"white"}>24 items</Typography>
                          </Box>
                        </TopCategoriesBox>
                      </Grid>
                    </Grid>
                  </Stack>
                </Grid>

                <Grid item md={6}>
                  <TopCategoriesBox sx={{ backgroundColor: "#DB3223", height: "480px" }}>
                    <Box
                      component="img"
                      src="https://res.cloudinary.com/imajin/image/upload/v1592043747/movie/cat6_vuiakg.png"
                      title="Super Heroes"
                      sx={{
                        position: "absolute",
                        top: "-20%",
                        right: "24%",
                        width: "95%",
                        opacity: 0.15,
                      }}
                    />
                    <Box
                      component="img"
                      src="https://res.cloudinary.com/imajin/image/upload/v1592043747/movie/cat6_vuiakg.png"
                      title="Super Heroes"
                      sx={{
                        width: "47%",
                        position: "relative",
                        top: "3%",
                        right: "20%",
                      }}
                    />
                    <Box hidden={mobileView}>
                      <ExploreButton
                        sx={{
                          top: "47%",
                          left: "55%",
                          md: { padding: "3px 85px" },
                        }}
                      >
                        Explore
                      </ExploreButton>
                    </Box>
                    <Box
                      textAlign={"start"}
                      sx={{ position: "absolute", top: "30%", left: "55%" }}
                    >
                      <Typography variant="h3">Super Heroes</Typography>
                      <Typography color={"white"}>24 items</Typography>
                    </Box>
                  </TopCategoriesBox>
                </Grid>
              </Grid>
            </Stack>
          </Container>
        </Box>
 
   
    </div>
  );
};

export default TopCategories;
