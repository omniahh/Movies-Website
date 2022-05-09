import React, { useState } from "react";
import {
  Typography,
  useMediaQuery,
  useTheme,
  Container,
  Grid,
  Stack,
  Box,
  Button,
} from "@mui/material";
import {
  AnsweredQuestionsTypography,
  SectionTypography,
} from "../styled/StyledTypography";
import {
  StyledAccordion,
  StyledAccordionSummary,
  StyledAccordionDetails,
  StyledExpandMoreIcon,
} from "../styled/StyledAccordion";
import { Questions } from "../data/answeredQuestions";


const AnsweredQuestions = () => {
  const theme = useTheme();
  const mobileView = useMediaQuery(theme.breakpoints.down("md"));

  const [color, setColor] = useState("black");
  const [backgroundColor, setBackgroundColor] = useState("white");
  const [arrowColor, setArrowColor] = useState("#E91E63");
  const handleClick = () => {
    return (
      setColor((old) => (old === "black" ? "white" : "black")),
      setBackgroundColor((old) => (old === "white" ? "#E91E63" : "white")),
      setArrowColor((old) => (old === "#E91E63" ? "white" : "#E91E63"))
    );
  };
  // console.log(handleClick);
  return (
    <div>
      <Box mt={20} component={"section"} position={"relative"}>
        <Container>
          <Grid container>
            <Grid item sm={12} md={6}>
              <Stack direction={"column"} spacing={2}>
                <Box textAlign={"start"}>
                  <SectionTypography variant="h2">Frequently</SectionTypography>
                  <SectionTypography variant="h2" color={"#304FFE"}>
                    Answered Questions
                  </SectionTypography>
                  <Typography variant={"h4"} marginTop={"15px"}>
                    Have a question? Check out our frequently asked questions to
                    find your answer.
                  </Typography>

                  <Box
                    hidden={mobileView}
                    component="img"
                    sx={{
                      m: 6,
                      width: 250,
                      height: 240,
                    }}
                    alt=" Answered Questions"
                    src="http://luxiren.indisains.com/_next/static/images/faq-b09fb3c9b96b0ee06930bb494c74af54.png"
                  />
                </Box>
              </Stack>
            </Grid>

            <Grid item sm={12} md={6}>
              <Stack direction={"column"} spacing={3}>
                {Questions.map((e) => {
                  return (
                    <Button
                      sx={{ padding: "0px", textTransform: "initial" }}
                      disableRipple
                    >
                      <StyledAccordion key={e.id}>
                        <StyledAccordionSummary
                          sx={{
                            color: color,
                            backgroundColor: backgroundColor,
                          }}
                          onClick={handleClick}
                          expandIcon={
                            <StyledExpandMoreIcon
                              onClick={handleClick}
                              sx={{ color: arrowColor }}
                            />
                          }
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          <Typography>{e.question}</Typography>
                        </StyledAccordionSummary>
                        <StyledAccordionDetails>
                          <AnsweredQuestionsTypography>
                            {e.answer}
                          </AnsweredQuestionsTypography>
                        </StyledAccordionDetails>
                      </StyledAccordion>
                    </Button>
                  );
                })}
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default AnsweredQuestions;
