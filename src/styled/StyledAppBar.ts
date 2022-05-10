import styled from "@emotion/styled";
import { AppBar } from "@mui/material";

export const StyledAppBar= styled(AppBar)(()=>({

     background: "rgb(0,0,0,0.6)" ,
      height: "4em" ,
      backdropFilter: "blur(15px)",

      xs:{
          maxWidth:"320px"
      }
}))