import { Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledPlanPaper = styled(Paper)((theme) => ({
  height: 515,
  position: "relative",
  borderRadius: 40,
 
  boxShadow: "0 0 10px 0px #f8bbd0",
  maxWidth: "300px",
  marginRight: "0px",
  marginBottom:'30px',
  cursor: "pointer",
  textAlign: "center",
  width: "300px",

  "&:hover": {
    border: "1px solid #E91E63",
    boxShadow: "1px 1px 40px 0px lightpink",
    zIndex: "15",
  
  },
}));

export const StyledFreeMoviePaper = styled(Paper)(() => ({
  height: 300,
  position: "relative",
  borderRadius: "30px",
  border: "transparent 1px",
  maxWidth: "300px",
  marginRight: "20px",
  cursor: "pointer",
  textAlign: "center",
  width: 300,

  "&:hover": {
    scale: 1.2,
    boxShadow: "1px 1px 30px 0px lightpink",
  },
}));



 export const StyledFeaturedMoviesPaper = styled(Paper)(()=>({

  width: 260,
  height: 60,
  position: "relative",
  left: 0,
  top: 340,



}))