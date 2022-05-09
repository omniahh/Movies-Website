
import { fontSize } from '@mui/system';
import { styled } from "@mui/material/styles";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RocketIcon from "@mui/icons-material/Rocket";
import StarIcon from "@mui/icons-material/Star";
import VideocamIcon from "@mui/icons-material/Videocam";
import BoltIcon from "@mui/icons-material/Bolt";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import SlowMotionVideoIcon from "@mui/icons-material/SlowMotionVideo";
import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SettingsIcon from "@mui/icons-material/Settings";

//navbar

export const StyledSettingsIcon= styled(SettingsIcon)({
  
    ":hover": {
      backgroundColor: "rgb(0,0,0,.2)", borderRadius:"50%" , padding:"6px"
    
    },
  
})




//hero section - video
export const StyledPauseCircleOutlineIcon = styled(PauseCircleOutlineIcon)({
  fontSize: "7em",
  color: "white",
  position: "absolute",
  top: "40%",
  left: "47%",
  opacity: 0,
  cursor: "pointer",
  fontWeight: 100,
  transition: "0.25s all ease-in-out",
  "&:hover": {
    opacity: 1,
    fontSize: "7em",
  },
});

//featured movies
export const StyledSlowMotionVideoIcon = styled(SlowMotionVideoIcon)({
  fontSize: "3em",
  color: "white",
  position: "absolute",
  top: "42%",
  left: "38%",
  cursor: "pointer",
});

//all categories

const Iconsx = {
  padding: "16px 8px",
  color: "#fff",
  fontSize: "6em",
  borderRadius: "20px",
  backgroundImage: "linear-gradient(120deg, #E91E63, #304FFE)",
 
};

export const StyledFavoriteIcon = styled(FavoriteIcon)(() => Iconsx);
export const StyledRocketIcon = styled(RocketIcon)(() => Iconsx);
export const StyledStarIcon = styled(StarIcon)(() => Iconsx);
export const StyledVideocamIcon = styled(VideocamIcon)(() => Iconsx);
export const StyledBoltIcon = styled(BoltIcon)(() => Iconsx);
export const StyledEmojiIcon = styled(EmojiEmotionsIcon)(() => Iconsx);

//footer
const FooterIconsx = {
  color: "#304FFE",

};

export const StyledFacebookIcon = styled(FacebookIcon)(() => FooterIconsx);
export const StyledTwitterIcon = styled(TwitterIcon)(() => FooterIconsx);
export const StyledInstgramIcon = styled(InstagramIcon)(() => FooterIconsx);
export const StyledLinkedInIcon = styled(LinkedInIcon)(() => FooterIconsx);
