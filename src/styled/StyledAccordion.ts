import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import styled from "@emotion/styled";





export const StyledAccordion= styled(Accordion)(() => ({
  
  
fontSize:"1.2em",
  boxShadow: "0px 2px 4px -1px rgb(128 128 128 / 20%), 0px 4px 5px 0px rgb(128 128 128 / 14%), 0px 1px 10px 0px rgb(128 128 128 / 12%);"

}


));
     
export const StyledAccordionSummary= styled(AccordionSummary)(() => ({
  borderRadius:"20px 20px 0px 0px",
  height:"60px",


  
}));

export const StyledExpandMoreIcon= styled(ExpandMoreIcon)(() => ({
  
  color:"#E91E63",
  "&:hover":{
    color:"white"
  }

}));


export const StyledAccordionDetails= styled(AccordionDetails)(() => ({

  
        height:"80px",
    
  
}));