import { Button, colors } from "@mui/material";
import { styled } from "@mui/material/styles";


 
   export const StyledButton = styled(Button)(() => ({
      
      boxSizing: "border-box",
      fontFamily: "Roboto,sans-serif",
      fontWeight: 500,
      borderRadius: 999,
      padding: "2px 16px",
      color: "white",
      fontSize: "1em",
      textTransform: "initial",
      "&:focus": {
        backgroundColor: "#e91e63",
      },
      "&:hover": {
        backgroundColor: "#424242",
        transition:
          "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
      },
    }));



     
   export const RegisterButton = styled(Button)(() => ({
    minWidth: "60px",
    boxSizing: "border-box",
    fontFamily: "Roboto,sans-serif",
    fontWeight: 700,
    borderRadius: 999,
    padding: "4px 30px",
    color: "#4D67FA",
    fontSize: "1em",
    textTransform: "uppercase",
      backgroundColor: "#C5CAE9",
      "&:hover":{
          backgroundColor: "#C5CAE9"
      }
    
  }));

    export const CardStyledButton = styled(StyledButton)(() => ({
      
     
        backgroundColor: "#E91E63",
        padding: "8px 22px",
        margin: "6px 0px 0px ",
        ":hover": { backgroundColor: "#880E4F" },
     
    }));




    export const ExploreButton = styled(StyledButton)(() => ({
      
     
      backgroundColor: "transparent",
    
           padding: "3px 120px",
         


        
      margin: "6px 0px 0px ",
      position: "absolute",
      top:"60%",
     right:"5%",
      fontWeight:500,
      fontSize:"1.1em",
      border:"1px white solid",
      "&:focus": {
        backgroundColor: "rgb(0,0,0,.1)",
      },
    "&:hover":{
      backgroundColor: "rgb(0,0,0,.1)"
  }

   
  }));


  export const GetStartedButton = styled(Button)(() => ({
    minWidth: "60px",
    boxSizing: "border-box",
    fontFamily: "Roboto,sans-serif",
margin:45,
    borderRadius: 999,
    padding: "8px 20px",
    color: "white",
    fontSize: ".9em",
    textTransform: "uppercase",
      backgroundColor: "#304FFE",
      "&:hover":{
          backgroundColor: "#1A237E"
      }
    
  }));



  export const StyledMenuButton= styled(Button)(()=>({

    color:"Black",  border:"1px solid #304FFE",




  }))