import React from "react";
import {
  Box,
  Stack,
  Grid,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { GetStartedButton, StyledMenuButton } from "../styled/StyledButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import LanguageIcon from "@mui/icons-material/Language";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { FooterTypography } from "../styled/StyledTypography";
import { FooterIconBox } from "../styled/StyledBox";
import {
  StyledFacebookIcon,
  StyledInstgramIcon,
  StyledLinkedInIcon,
  StyledTwitterIcon,
} from "../styled/StyledIcon";
import { useContext } from "react";
import { SxProps, Theme } from "@mui/material";

const FooterStyles = (theme: Theme): SxProps<Theme> => {
  const defaultStyles: SxProps<Theme> = {};
  switch (theme.palette.mode) {
    case "dark":
      return {
        ...defaultStyles,

        backgroundColor: "#880E4F",
      };

    case "light": {
      return {
        ...defaultStyles,
        backgroundColor: "#F8BBD0",
      };
    }
  }
};

const Footer = () => {
  const theme = useTheme();
  const mobileView = useMediaQuery(theme.breakpoints.down("md"));

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Box component={"footer"} height="600px" sx={FooterStyles(theme)}>
        <Container>
          <Typography fontSize={"2.4em"} fontWeight={600}>
            What are you waiting for?
          </Typography>

          <GetStartedButton>Get Started</GetStartedButton>
          <Grid container mt={5} columnSpacing={8}>
            <Grid item md={3} hidden={mobileView}>
              <Box
                component="img"
                style={{ maxWidth: "65px" }}
                src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNzIwcHgiIGhlaWdodD0iNzIwcHgiIHZpZXdCb3g9IjAgMCA3MjAgNzIwIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA2NCAoOTM1MzcpIC0gaHR0cHM6Ly9za2V0Y2guY29tIC0tPgogICAgPHRpdGxlPlZpZGVvPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IHgxPSI2LjQwMDE2NjkzJSIgeTE9IjI5LjMyNDI5OTElIiB4Mj0iOTEuMzgwMjY0NCUiIHkyPSI3Mi44OTAzNDQzJSIgaWQ9ImxpbmVhckdyYWRpZW50LTEiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjOEM5RUZGIiBvZmZzZXQ9IjAlIj48L3N0b3A+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGOEJCRDAiIG9mZnNldD0iMTAwJSI+PC9zdG9wPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0iVmlkZW8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJHcm91cCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTguMDAwMDAwLCAxMTUuMDAwMDAwKSI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik01NDMuNDIzNTQ2LDE1LjAxMTcxNDMgTDE0Mi4yNTI0MDgsMTUuMDYyMzA0NSBDMTE0LjM4Njk1OCwxNS4wNjU4MTg1IDg4LjQ5MTg0NTgsMjQuOTc3MjIwNSA2OC4yNjYwMzA1LDQxLjczMjI5MTUgQzQ4LjA0MDIxNTEsNTguNDg3MzYyNCAzMy40ODM2OTY5LDgyLjA4NjEwMjMgMjguMjk1NDM1NCwxMDkuNDY0MjkyIEMxOS40MzMzODA1LDE1Ni4yMjg5MDMgMTUsMjAyLjk5MDAxMyAxNSwyNDkuNzQ4MDYyIEMxNSwyOTcuMDI3MzU0IDIwLjkzNDM1MzQsMzQzLjI2ODk5NCAzMi44MDg4MzY1LDM4OC40NzIyMyBDMzkuNTA1NDA3Miw0MTMuOTY0NDI3IDU0LjM3NTI0NDEsNDM1LjU5NjM2OSA3NC4xNjAyMTA3LDQ1MC44NTUyNjIgQzkzLjk0NTE3NzMsNDY2LjExNDE1NiAxMTguNjQ1Mjc0LDQ3NSAxNDUuMDAyMzY0LDQ3NSBMNTQzLjcxMjMzOSw0NzUgQzU3MS41MTY2NDUsNDc1IDU5Ny4zNjUyMzEsNDY1LjEzNDI3NSA2MTcuNTc2OTM2LDQ0OC40NDI4MzggQzYzNy43ODg2NDIsNDMxLjc1MTQwMSA2NTIuMzYzNDY5LDQwOC4yMzQyNTEgNjU3LjYyMDI1NiwzODAuOTMxNDAxIEM2NjUuMjI3MjgxLDM0MS40MjE4MjYgNjY5LDI5Ni40MjU3MTUgNjY5LDI0NS45NDk2MTIgQzY2OSwxOTQuNzgyNTA1IDY2NS4xMjI5MTQsMTQ5LjA5MDE3OCA2NTcuMzA3MTkxLDEwOC44NzkyMiBDNjUyLjAwOTAzMSw4MS42MjA4MjgzIDYzNy40MjIzNzgsNTguMTUyMjAwOCA2MTcuMjE4MTM1LDQxLjQ5OTA0NjggQzU5Ny4wMTM4OTMsMjQuODQ1ODkyOCA1NzEuMTkyMDYxLDE1LjAwODIxMjMgNTQzLjQyMzU0NiwxNS4wMTE3MTQzIFoiIGlkPSJSZWN0YW5nbGUiIHN0cm9rZT0idXJsKCNsaW5lYXJHcmFkaWVudC0xKSIgc3Ryb2tlLXdpZHRoPSIzMCIgZmlsbD0iI0U5MUU2MyI+PC9wYXRoPgogICAgICAgICAgICA8ZyBpZD0iTG9nbyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTQ0LjAwMDAwMCwgMTE1LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9Imc5MzEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDc1LjAwMDAwMCwgMTI2LjU0MTM1Nikgc2NhbGUoLTEsIDEpIHJvdGF0ZSgtMTgwLjAwMDAwMCkgdHJhbnNsYXRlKC03NS4wMDAwMDAsIC0xMjYuNTQxMzU2KSB0cmFuc2xhdGUoMC4wMDAwMDAsIDAuMDQxMzU2KSIgZmlsbD0iI0ZGRkZGRiIgZmlsbC1ydWxlPSJub256ZXJvIj4KICAgICAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0icGF0aDkzMyIgcG9pbnRzPSIwIDAgMCAyNTIuOTk3MDc0IDMxLjUwNzc5NzggMjUyLjk5NzA3NCAzMS41MDc3OTc4IDI4LjA2ODYxMjQgMTQ5LjE4MzQyMSAyOC4wNjg2MTI0IDE0OS4xODM0MjEgMCI+PC9wb2x5Z29uPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPGcgaWQ9Imc5MzUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDc1LjAwMDAwMCwgMTI2LjU0MTM1Nikgc2NhbGUoLTEsIDEpIHJvdGF0ZSgtMTgwLjAwMDAwMCkgdHJhbnNsYXRlKC03NS4wMDAwMDAsIC0xMjYuNTQxMzU2KSB0cmFuc2xhdGUoMC4wMDAwMDAsIDAuMDQxMzU2KSIgc3Ryb2tlPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjI2LjY2NjY2NiI+CiAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9InBhdGg5MzciIHBvaW50cz0iMCAwIDAgMjUyLjk5NzA3NCAzMS41MDc3OTc4IDI1Mi45OTcwNzQgMzEuNTA3Nzk3OCAyOC4wNjg2MTI0IDE0OS4xODM0MjEgMjguMDY4NjEyNCAxNDkuMTgzNDIxIDAiPjwvcG9seWdvbj4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDxnIGlkPSJnOTM5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzMDUuMTE4NzA3LCAxNTAuODA3MzAxKSBzY2FsZSgtMSwgMSkgcm90YXRlKC0xODAuMDAwMDAwKSB0cmFuc2xhdGUoLTMwNS4xMTg3MDcsIC0xNTAuODA3MzAxKSB0cmFuc2xhdGUoMjE0LjYxODcwNywgNDIuODA3MzAxKSI+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Imc5NDEtQ2xpcHBlZCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsIC0wLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iZzk0MSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMTksIDAuMzE2MzU0KSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iZzk0NyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC44ODAzNTQsIDAuODI3NzcxKSIgZmlsbD0iI0ZGRkZGRiIgZmlsbC1ydWxlPSJub256ZXJvIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNLTguNTI2NTEyODNlLTE0LDg1LjAzNDA2MTEgTC04LjUyNjUxMjgzZS0xNCwyMTMuMjM5OTk1IEwyOS45ODk2Mzk1LDIxMy4yMzk5OTUgTDI5Ljk4OTYzOTUsODYuOTMwNjA2MSBDMjkuOTg5NjM5NSw0OS43NjAwOTYxIDUwLjg2NjUzMTEsMjYuMjQxMTY3MiA4OS41ODUyNjM5LDI2LjI0MTE2NzIgQzEyOC4zMDUyNjMsMjYuMjQxMTY3MiAxNDkuNTYzMjc3LDQ5Ljc2MDA5NjEgMTQ5LjU2MzI3Nyw4Ni45MzA2MDYxIEwxNDkuNTYzMjc3LDIxMy4yMzk5OTUgTDE3OS41NTE2NSwyMTMuMjM5OTk1IEwxNzkuNTUxNjUsODUuMDM0MDYxMSBDMTc5LjU1MTY1LDMzLjQ1MDMxNTQgMTQ5LjE4MjE1NSwwLjA3MDM2NDkzNjcgODkuNTg1MjYzOSwwLjA3MDM2NDkzNjcgQzI5Ljk4OTYzOTUsMC4wNzAzNjQ5MzY3IC04LjUyNjUxMjgzZS0xNCwzMy44MjczNDcxIC04LjUyNjUxMjgzZS0xNCw4NS4wMzQwNjExIiBpZD0icGF0aDk0OSI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Imc5NTEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuODgwMzU0LCAwLjgyNzc3MSkiIHN0cm9rZT0iI0ZGRkZGRiIgc3Ryb2tlLXdpZHRoPSIyNi42NjY2NjYiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0tOC41MjY1MTI4M2UtMTQsODUuMDM0MDYxMSBMLTguNTI2NTEyODNlLTE0LDIxMy4yMzk5OTUgTDI5Ljk4OTYzOTUsMjEzLjIzOTk5NSBMMjkuOTg5NjM5NSw4Ni45MzA2MDYxIEMyOS45ODk2Mzk1LDQ5Ljc2MDA5NjEgNTAuODY2NTMxMSwyNi4yNDExNjcyIDg5LjU4NTI2MzksMjYuMjQxMTY3MiBDMTI4LjMwNTI2MywyNi4yNDExNjcyIDE0OS41NjMyNzcsNDkuNzYwMDk2MSAxNDkuNTYzMjc3LDg2LjkzMDYwNjEgTDE0OS41NjMyNzcsMjEzLjIzOTk5NSBMMTc5LjU1MTY1LDIxMy4yMzk5OTUgTDE3OS41NTE2NSw4NS4wMzQwNjExIEMxNzkuNTUxNjUsMzMuNDUwMzE1NCAxNDkuMTgyMTU1LDAuMDcwMzY0OTM2NyA4OS41ODUyNjM5LDAuMDcwMzY0OTM2NyBDMjkuOTg5NjM5NSwwLjA3MDM2NDkzNjcgLTguNTI2NTEyODNlLTE0LDMzLjgyNzM0NzEgLTguNTI2NTEyODNlLTE0LDg1LjAzNDA2MTEgWiIgaWQ9InBhdGg5NTMiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"
              />

              <Typography
                color="white"
                fontSize={"1.3em"}
                fontWeight={"300"}
                mb={3}
              >
                {" "}
                Movie{" "}
              </Typography>
              <Typography color="white">© Luxiren Theme 2021</Typography>
            </Grid>

            <Grid item textAlign={"start"} md={2} hidden={mobileView}>
              <Typography fontWeight={500} mb={3}>
                {" "}
                COMPANY{" "}
              </Typography>
              <FooterTypography>Team</FooterTypography>
              <FooterTypography>History</FooterTypography>
              <FooterTypography>Contact us</FooterTypography>
              <FooterTypography>Locations</FooterTypography>
            </Grid>

            <Grid item textAlign={"start"} md={2} hidden={mobileView}>
              <Typography fontWeight={500} mb={3}>
                {" "}
                RESOURCES
              </Typography>
              <FooterTypography>Resource</FooterTypography>
              <FooterTypography>Resource name</FooterTypography>
              <FooterTypography>Another resource</FooterTypography>
              <FooterTypography>Final resource</FooterTypography>
            </Grid>

            <Grid item textAlign={"start"} md={2} hidden={mobileView}>
              <Typography fontWeight={500} mb={3}>
                {" "}
                LEGAL{" "}
              </Typography>
              <FooterTypography>Privacy policy</FooterTypography>
              <FooterTypography>Terms of use</FooterTypography>
              <FooterTypography>Terms Condition</FooterTypography>
            </Grid>

            <Grid item md={3} hidden={mobileView}>
              <Stack
                direction={"row"}
                ml={2.5}
                spacing={1.5}
                justifyContent={"space-round"}
              >
                <FooterIconBox>
                  <StyledFacebookIcon></StyledFacebookIcon>
                </FooterIconBox>
                <FooterIconBox>
                  <StyledTwitterIcon></StyledTwitterIcon>
                </FooterIconBox>
                <FooterIconBox>
                  <StyledInstgramIcon></StyledInstgramIcon>
                </FooterIconBox>
                <FooterIconBox>
                  <StyledLinkedInIcon></StyledLinkedInIcon>
                </FooterIconBox>
              </Stack>

              <Box mt={5}>
                <StyledMenuButton
                  id="demo-positioned-button"
                  aria-controls={open ? "demo-positioned-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                >
                  <LanguageIcon
                    sx={{ mr: 1, ml: 1.2, color: "#304FFE" }}
                  ></LanguageIcon>{" "}
                  English
                  <ArrowDropDownIcon
                    sx={{ ml: 10, color: "#304FFE" }}
                  ></ArrowDropDownIcon>
                </StyledMenuButton>
                <Menu
                  id="demo-positioned-menu"
                  aria-labelledby="demo-positioned-button"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: "center",
                    horizontal: "left",
                  }}
                  transformOrigin={{
                    vertical: "center",
                    horizontal: "left",
                  }}
                >
                  <MenuItem onClick={handleClose}>English</MenuItem>
                  <MenuItem onClick={handleClose}>Deutsch</MenuItem>
                  <MenuItem onClick={handleClose}>العربيّة</MenuItem>
                  <MenuItem onClick={handleClose}>Bahasa Indonesia</MenuItem>
                  <MenuItem onClick={handleClose}>Português</MenuItem>
                  <MenuItem onClick={handleClose}>简体中文</MenuItem>
                </Menu>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default Footer;
