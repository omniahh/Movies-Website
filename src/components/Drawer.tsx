import * as React from "react";
import {
  Box,
  Stack,
  Grid,
  Typography,
  FormGroup,
  FormControlLabel,
} from "@mui/material";
import Switch, { SwitchProps } from "@mui/material/Switch";
import Drawer from "@mui/material/Drawer";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import ArticleIcon from "@mui/icons-material/Article";
import { IconButton } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext } from "../contexts/ColorModeContext";
import { SxProps, Theme, useTheme } from "@mui/material";

const DrawerStyles = (theme: Theme): SxProps<Theme> => {
  const defaultStyles: SxProps<Theme> = {};
  switch (theme.palette.mode) {
    case "dark":
      return {
        ...defaultStyles,
        color: "white",
        backgroundColor: "#121212",
      };

    case "light": {
      return {
        ...defaultStyles,
        color: "#121212",
        backgroundColor: "#F3F4FB",
      };
    }
  }
};

type Anchor = "top" | "left" | "bottom" | "right";

export default function DrawerMenu() {
  const { toggleColorMode } = useContext(ColorModeContext);
  const theme = useTheme();

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 550 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Stack
        direction="row"
        padding={"20px"}
        textAlign="center"
        sx={DrawerStyles(theme)}
      >
        <Grid container>
          <Grid item md={6}>
            <IconButton>
              <ColorLensIcon fontSize="medium"></ColorLensIcon>{" "}
              <Typography ml={3} color="primary">
                THEME
              </Typography>
            </IconButton>
          </Grid>

          <Grid item md={6}>
            <IconButton>
              <ArticleIcon fontSize="medium"></ArticleIcon>{" "}
              <Typography ml={3}>EXPLORE</Typography>
            </IconButton>
          </Grid>
        </Grid>
      </Stack>

      <Box height="130px" borderRadius={4} sx={DrawerStyles(theme)} m={5}>
        <Stack direction="row" spacing={3}>
          <Grid container>
            <Grid item md={6}>
              <Stack ml={3} mt={3}>
                <Typography variant="h5">Theme Mode</Typography>
                <Stack direction="row">
                  <FormGroup>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Typography>DARK</Typography>
                      <FormControlLabel
                        control={
                          <Switch
                            checked={theme.palette.mode === "light"}
                            onChange={() => toggleColorMode()}
                          />
                        }
                        label="LIGHT"
                      />
                    </Stack>
                  </FormGroup>
                </Stack>
              </Stack>
            </Grid>

            <Grid item md={6}>
              <Stack mt={3}>
                <Typography variant="h5">Layout Direction</Typography>
                <Stack direction="row">
                  <FormGroup>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Typography>RTL</Typography>
                      <FormControlLabel
                        control={<Switch defaultChecked />}
                        label="LTR"
                      />

                      {/* <Typography>DARK</Typography> */}
                    </Stack>
                    <Typography variant="caption" ml={12}>
                      Best view in arabic
                    </Typography>
                  </FormGroup>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </Stack>
      </Box>
    </Box>
  );

  return (
    <div>
      {(["right"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Stack
            sx={{
              border: "1px solid #E91E63",
              borderRadius: 4,
              width: "5%",
              position: "fixed",
              zIndex: 3000,
              left: "93%",
              top: "33%",
              padding: "10px",
              backgroundColor: "rgb(0,0,0,0.2)",
            }}
          >
            <IconButton>
              <ColorLensIcon
                fontSize="large"
                onClick={toggleDrawer(anchor, true)}
              >
                {anchor}{" "}
              </ColorLensIcon>
            </IconButton>
            <IconButton>
              <ArticleIcon
                fontSize="large"
                onClick={toggleDrawer(anchor, true)}
              >
                {anchor}{" "}
              </ArticleIcon>
            </IconButton>
          </Stack>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
