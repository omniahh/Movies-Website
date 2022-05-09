import { styled } from '@mui/material';
import { Typography } from '@mui/material';


//plan card
export const DashedTypography= styled(Typography)(() => ({
    color: "#6E6E6E",
    borderBottom: "2px dashed #E0E0E0",
    padding: "8px",
   
  }));


  export const StyledTypography= styled(DashedTypography)(() => ({
    color: "#7C7C7C",
    fontWeight: "300",
    fontSize: "14px",
    borderBottom: 0,
  }));



  export const LabelTypography= styled (Typography)(()=>({

          fontWeight: 600,
          color: "#E91E63",
          marginBottom: "18px",
     
    
  }))

//section
  export const SectionTypography= styled(Typography)(() => ({
 
    fontWeight:"600"
    
  }));


//
export const FreeMoviesTypography=styled(Typography)(()=>({

  fontWeight: 600,
  position: "absolute",
  color: "white",
//
  
}))
export const AllCategoriesTypography= styled(Typography)(() =>({

  fontWeight:700, fontSize:'1em'
}));


//
export const AnsweredQuestionsTypography= styled(Typography)(() =>({

 fontSize:'1.1em', textAlign:"start"
}));

//
export const FooterTypography= styled(Typography)(()=>({

  fontWeight: 400,
  fontSize: ".9em",
  marginBottom:12


}))