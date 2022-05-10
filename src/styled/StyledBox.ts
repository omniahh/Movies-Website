import { styled} from "@mui/material/styles";
import { Box } from "@mui/material";

import { keyframes } from "@emotion/react";



const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;



const pulse= keyframes `



  0% {
    -moz-box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.4);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.4);
  }
  70% {
    -moz-box-shadow: 0 0 0 25px rgba(0, 0, 0, 0);
    box-shadow: 0 0 0 25px rgba(0, 0, 0, 0);
  }
  100% {
    -moz-box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  },

`



//navbar
export const LogoBox = styled(Box)(() => ({
      
  maxWidth: "65px",
  padding:"0",
  margin:"0",

  

  "&:hover": {
   
    animation: `${spin} .9s infinite ease`

  },
}));

//carousel
export const CarouselBox= styled(Box)(()=>({

position:"absolute",
top:"80%",
left:"18%",
zIndex:9,
width:"1000px",
backgroundColor:"rgb(158,158,158,.3)",
height:"450px",
borderRadius:35,
backdropFilter: "blur(20px)"

}))

//featured movies
export const FeaturedMoviesBox =styled(Box)(()=>({

  position: "relative",
  width: 260,
  height: 400,
  overflow: "hidden",
  borderRadius: 15,
}));

// export const FeaturedMoviesImg= styled(Box)(()=>({

//   width: 260,
//   height: 360,
//   borderRadius: 4,
//   boxShadow:
//     "0px 2px 4px -1px rgb(128 128 128 / 20%), 0px 4px 5px 0px rgb(128 128 128 / 14%), 0px 1px 10px 0px rgb(128 128 128 / 12%);",
//   position: "absolute",
//   top: 0,
//   left: 0,

// }));
export const OverlayBox= styled(Box)(()=>({

  width: "100%",
  height: "90%",
  opacity: "0",
  borderRadius: 15,
  position: "absolute",
  top: "0px",
  left: "0px",
  transition: "0.25s all ease-in-out",

  "&:hover": {
    opacity: 0.7,
    cursor: "pointer",
     fontSize:"1.5em",
    backgroundImage: "linear-gradient(-44deg, #304FFE 6%, #E91E63 100%)",
  },

}))

export const CaptionNewBox= styled(Box)(()=>({

    color: "white",
    borderRadius:20,
    backgroundColor: "black",
    position: "absolute",
    top: "3%",
    left: "8%",
    padding: "4px 12px",
    textTransform:"uppercase"
 
}));


//top categories
export const TopCategoriesBox = styled(Box)(() => ({
      
 
    position: "relative",
    overflow: "hidden",
    borderRadius:20,

    "&:hover": {
       backgroundImage:
         "linear-gradient(to left , rgba(0, 0,250, 0) 0, #000 160%)",
       animation: `${pulse} 1s ease-in`,
      
    
 
    },
}));



//free movies
export const FreeMoviesBox= styled(Box)(()=>({

    position: "relative",
    height: 350,
    overflow: "hidden",
    borderRadius: 15,
    "&:hover": { cursor: "pointer" },


}))

export const FreeMoviesImgBox= styled(Box)(()=>({

  position: "absolute",
  height: "100%",
  width: "100%",
  overflow: "hidden",
  borderRadius: 15,
  transition: "transform .3s ease-in-out",

}))


export const  FreeMoviesOverlay= styled(Box)(()=>({
  
    width: "100%",
    height: "100%",
    opacity: 0.5,
    borderRadius: 15,
    backgroundImage: "linear-gradient(-44deg, #304FFE 6%, #E91E63 100%)",
    position: "absolute",
    top: "0px",
    left: "0px",

}))


export const FreeMovieBox = styled(Box)(() => ({
      
     


    "&:hover": {
     transform:"scale(1.2)",

  
    }
}));


export const waveBoxContainer=styled(Box)(() =>({
  position: "absolute",
  width: "100%",
  overflow: "hidden",
  lineHeight: 0,


}))


export const wavBox = styled(Box)(() => ({
  position: "relative",
  display: "block",
  width: "calc(140% + 1.3px)",
  height: "391px",
  transform: "rotateY(180deg)",
  fill: "#FEF1F6",


}))



export const FooterIconBox= styled(Box)(()=>({

    width: "2.5em",
    padding:"5px 1px 1px 1px",
    backgroundColor: "rgb(0,0,0,.1)",
    borderRadius: "50%",
    

}))