import React from "react";
import {Stack,useMediaQuery, Grid} from "@mui/material";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material";
import { StyledAppBar } from "../styled/StyledAppBar";
import { StyledButton, RegisterButton } from "../styled/StyledButton";
import { LogoBox } from "../styled/StyledBox";
import { StyledSettingsIcon } from "../styled/StyledIcon";


const Navbar = () => {
  const theme = useTheme();
  const MobileView = useMediaQuery(theme.breakpoints.down("md")); 
  const LaptopView = useMediaQuery(theme.breakpoints.up("md"));
  
  return (
    <>
      <Box component={"header"} position="sticky" zIndex={999}>
        <StyledAppBar>

          <Toolbar>
            <Grid container>
              <Grid item hidden={LaptopView} xs={2}>
                <Stack direction="row" spacing={2} mr={2} alignItems="center">
                  <MenuIcon sx={{ fontSize: "3em" }}></MenuIcon>

                  <LogoBox>
                    <Box maxWidth={"65px"}
                      component="img"
                      src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNzIwcHgiIGhlaWdodD0iNzIwcHgiIHZpZXdCb3g9IjAgMCA3MjAgNzIwIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA2NCAoOTM1MzcpIC0gaHR0cHM6Ly9za2V0Y2guY29tIC0tPgogICAgPHRpdGxlPlZpZGVvPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IHgxPSI2LjQwMDE2NjkzJSIgeTE9IjI5LjMyNDI5OTElIiB4Mj0iOTEuMzgwMjY0NCUiIHkyPSI3Mi44OTAzNDQzJSIgaWQ9ImxpbmVhckdyYWRpZW50LTEiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjOEM5RUZGIiBvZmZzZXQ9IjAlIj48L3N0b3A+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGOEJCRDAiIG9mZnNldD0iMTAwJSI+PC9zdG9wPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0iVmlkZW8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJHcm91cCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTguMDAwMDAwLCAxMTUuMDAwMDAwKSI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik01NDMuNDIzNTQ2LDE1LjAxMTcxNDMgTDE0Mi4yNTI0MDgsMTUuMDYyMzA0NSBDMTE0LjM4Njk1OCwxNS4wNjU4MTg1IDg4LjQ5MTg0NTgsMjQuOTc3MjIwNSA2OC4yNjYwMzA1LDQxLjczMjI5MTUgQzQ4LjA0MDIxNTEsNTguNDg3MzYyNCAzMy40ODM2OTY5LDgyLjA4NjEwMjMgMjguMjk1NDM1NCwxMDkuNDY0MjkyIEMxOS40MzMzODA1LDE1Ni4yMjg5MDMgMTUsMjAyLjk5MDAxMyAxNSwyNDkuNzQ4MDYyIEMxNSwyOTcuMDI3MzU0IDIwLjkzNDM1MzQsMzQzLjI2ODk5NCAzMi44MDg4MzY1LDM4OC40NzIyMyBDMzkuNTA1NDA3Miw0MTMuOTY0NDI3IDU0LjM3NTI0NDEsNDM1LjU5NjM2OSA3NC4xNjAyMTA3LDQ1MC44NTUyNjIgQzkzLjk0NTE3NzMsNDY2LjExNDE1NiAxMTguNjQ1Mjc0LDQ3NSAxNDUuMDAyMzY0LDQ3NSBMNTQzLjcxMjMzOSw0NzUgQzU3MS41MTY2NDUsNDc1IDU5Ny4zNjUyMzEsNDY1LjEzNDI3NSA2MTcuNTc2OTM2LDQ0OC40NDI4MzggQzYzNy43ODg2NDIsNDMxLjc1MTQwMSA2NTIuMzYzNDY5LDQwOC4yMzQyNTEgNjU3LjYyMDI1NiwzODAuOTMxNDAxIEM2NjUuMjI3MjgxLDM0MS40MjE4MjYgNjY5LDI5Ni40MjU3MTUgNjY5LDI0NS45NDk2MTIgQzY2OSwxOTQuNzgyNTA1IDY2NS4xMjI5MTQsMTQ5LjA5MDE3OCA2NTcuMzA3MTkxLDEwOC44NzkyMiBDNjUyLjAwOTAzMSw4MS42MjA4MjgzIDYzNy40MjIzNzgsNTguMTUyMjAwOCA2MTcuMjE4MTM1LDQxLjQ5OTA0NjggQzU5Ny4wMTM4OTMsMjQuODQ1ODkyOCA1NzEuMTkyMDYxLDE1LjAwODIxMjMgNTQzLjQyMzU0NiwxNS4wMTE3MTQzIFoiIGlkPSJSZWN0YW5nbGUiIHN0cm9rZT0idXJsKCNsaW5lYXJHcmFkaWVudC0xKSIgc3Ryb2tlLXdpZHRoPSIzMCIgZmlsbD0iI0U5MUU2MyI+PC9wYXRoPgogICAgICAgICAgICA8ZyBpZD0iTG9nbyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTQ0LjAwMDAwMCwgMTE1LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9Imc5MzEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDc1LjAwMDAwMCwgMTI2LjU0MTM1Nikgc2NhbGUoLTEsIDEpIHJvdGF0ZSgtMTgwLjAwMDAwMCkgdHJhbnNsYXRlKC03NS4wMDAwMDAsIC0xMjYuNTQxMzU2KSB0cmFuc2xhdGUoMC4wMDAwMDAsIDAuMDQxMzU2KSIgZmlsbD0iI0ZGRkZGRiIgZmlsbC1ydWxlPSJub256ZXJvIj4KICAgICAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0icGF0aDkzMyIgcG9pbnRzPSIwIDAgMCAyNTIuOTk3MDc0IDMxLjUwNzc5NzggMjUyLjk5NzA3NCAzMS41MDc3OTc4IDI4LjA2ODYxMjQgMTQ5LjE4MzQyMSAyOC4wNjg2MTI0IDE0OS4xODM0MjEgMCI+PC9wb2x5Z29uPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPGcgaWQ9Imc5MzUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDc1LjAwMDAwMCwgMTI2LjU0MTM1Nikgc2NhbGUoLTEsIDEpIHJvdGF0ZSgtMTgwLjAwMDAwMCkgdHJhbnNsYXRlKC03NS4wMDAwMDAsIC0xMjYuNTQxMzU2KSB0cmFuc2xhdGUoMC4wMDAwMDAsIDAuMDQxMzU2KSIgc3Ryb2tlPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjI2LjY2NjY2NiI+CiAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9InBhdGg5MzciIHBvaW50cz0iMCAwIDAgMjUyLjk5NzA3NCAzMS41MDc3OTc4IDI1Mi45OTcwNzQgMzEuNTA3Nzk3OCAyOC4wNjg2MTI0IDE0OS4xODM0MjEgMjguMDY4NjEyNCAxNDkuMTgzNDIxIDAiPjwvcG9seWdvbj4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDxnIGlkPSJnOTM5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzMDUuMTE4NzA3LCAxNTAuODA3MzAxKSBzY2FsZSgtMSwgMSkgcm90YXRlKC0xODAuMDAwMDAwKSB0cmFuc2xhdGUoLTMwNS4xMTg3MDcsIC0xNTAuODA3MzAxKSB0cmFuc2xhdGUoMjE0LjYxODcwNywgNDIuODA3MzAxKSI+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Imc5NDEtQ2xpcHBlZCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsIC0wLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iZzk0MSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMTksIDAuMzE2MzU0KSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iZzk0NyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC44ODAzNTQsIDAuODI3NzcxKSIgZmlsbD0iI0ZGRkZGRiIgZmlsbC1ydWxlPSJub256ZXJvIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNLTguNTI2NTEyODNlLTE0LDg1LjAzNDA2MTEgTC04LjUyNjUxMjgzZS0xNCwyMTMuMjM5OTk1IEwyOS45ODk2Mzk1LDIxMy4yMzk5OTUgTDI5Ljk4OTYzOTUsODYuOTMwNjA2MSBDMjkuOTg5NjM5NSw0OS43NjAwOTYxIDUwLjg2NjUzMTEsMjYuMjQxMTY3MiA4OS41ODUyNjM5LDI2LjI0MTE2NzIgQzEyOC4zMDUyNjMsMjYuMjQxMTY3MiAxNDkuNTYzMjc3LDQ5Ljc2MDA5NjEgMTQ5LjU2MzI3Nyw4Ni45MzA2MDYxIEwxNDkuNTYzMjc3LDIxMy4yMzk5OTUgTDE3OS41NTE2NSwyMTMuMjM5OTk1IEwxNzkuNTUxNjUsODUuMDM0MDYxMSBDMTc5LjU1MTY1LDMzLjQ1MDMxNTQgMTQ5LjE4MjE1NSwwLjA3MDM2NDkzNjcgODkuNTg1MjYzOSwwLjA3MDM2NDkzNjcgQzI5Ljk4OTYzOTUsMC4wNzAzNjQ5MzY3IC04LjUyNjUxMjgzZS0xNCwzMy44MjczNDcxIC04LjUyNjUxMjgzZS0xNCw4NS4wMzQwNjExIiBpZD0icGF0aDk0OSI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Imc5NTEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuODgwMzU0LCAwLjgyNzc3MSkiIHN0cm9rZT0iI0ZGRkZGRiIgc3Ryb2tlLXdpZHRoPSIyNi42NjY2NjYiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0tOC41MjY1MTI4M2UtMTQsODUuMDM0MDYxMSBMLTguNTI2NTEyODNlLTE0LDIxMy4yMzk5OTUgTDI5Ljk4OTYzOTUsMjEzLjIzOTk5NSBMMjkuOTg5NjM5NSw4Ni45MzA2MDYxIEMyOS45ODk2Mzk1LDQ5Ljc2MDA5NjEgNTAuODY2NTMxMSwyNi4yNDExNjcyIDg5LjU4NTI2MzksMjYuMjQxMTY3MiBDMTI4LjMwNTI2MywyNi4yNDExNjcyIDE0OS41NjMyNzcsNDkuNzYwMDk2MSAxNDkuNTYzMjc3LDg2LjkzMDYwNjEgTDE0OS41NjMyNzcsMjEzLjIzOTk5NSBMMTc5LjU1MTY1LDIxMy4yMzk5OTUgTDE3OS41NTE2NSw4NS4wMzQwNjExIEMxNzkuNTUxNjUsMzMuNDUwMzE1NCAxNDkuMTgyMTU1LDAuMDcwMzY0OTM2NyA4OS41ODUyNjM5LDAuMDcwMzY0OTM2NyBDMjkuOTg5NjM5NSwwLjA3MDM2NDkzNjcgLTguNTI2NTEyODNlLTE0LDMzLjgyNzM0NzEgLTguNTI2NTEyODNlLTE0LDg1LjAzNDA2MTEgWiIgaWQ9InBhdGg5NTMiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"
                    />
                  </LogoBox>
                </Stack>
              </Grid>
              <Grid
                item
                hidden={MobileView}
                sx={{ xs: { display: "none" } }}
                md={8}
              >
                <Stack
                  direction="row"
                  justifyContent={"center"}
                  alignItems={"center"}
                  spacing={2}
                >
                  <LogoBox>
                    <Box
                      component="img"
                      style={{ maxWidth: "65px" }}
                      src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNzIwcHgiIGhlaWdodD0iNzIwcHgiIHZpZXdCb3g9IjAgMCA3MjAgNzIwIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA2NCAoOTM1MzcpIC0gaHR0cHM6Ly9za2V0Y2guY29tIC0tPgogICAgPHRpdGxlPlZpZGVvPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IHgxPSI2LjQwMDE2NjkzJSIgeTE9IjI5LjMyNDI5OTElIiB4Mj0iOTEuMzgwMjY0NCUiIHkyPSI3Mi44OTAzNDQzJSIgaWQ9ImxpbmVhckdyYWRpZW50LTEiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjOEM5RUZGIiBvZmZzZXQ9IjAlIj48L3N0b3A+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGOEJCRDAiIG9mZnNldD0iMTAwJSI+PC9zdG9wPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0iVmlkZW8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJHcm91cCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTguMDAwMDAwLCAxMTUuMDAwMDAwKSI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik01NDMuNDIzNTQ2LDE1LjAxMTcxNDMgTDE0Mi4yNTI0MDgsMTUuMDYyMzA0NSBDMTE0LjM4Njk1OCwxNS4wNjU4MTg1IDg4LjQ5MTg0NTgsMjQuOTc3MjIwNSA2OC4yNjYwMzA1LDQxLjczMjI5MTUgQzQ4LjA0MDIxNTEsNTguNDg3MzYyNCAzMy40ODM2OTY5LDgyLjA4NjEwMjMgMjguMjk1NDM1NCwxMDkuNDY0MjkyIEMxOS40MzMzODA1LDE1Ni4yMjg5MDMgMTUsMjAyLjk5MDAxMyAxNSwyNDkuNzQ4MDYyIEMxNSwyOTcuMDI3MzU0IDIwLjkzNDM1MzQsMzQzLjI2ODk5NCAzMi44MDg4MzY1LDM4OC40NzIyMyBDMzkuNTA1NDA3Miw0MTMuOTY0NDI3IDU0LjM3NTI0NDEsNDM1LjU5NjM2OSA3NC4xNjAyMTA3LDQ1MC44NTUyNjIgQzkzLjk0NTE3NzMsNDY2LjExNDE1NiAxMTguNjQ1Mjc0LDQ3NSAxNDUuMDAyMzY0LDQ3NSBMNTQzLjcxMjMzOSw0NzUgQzU3MS41MTY2NDUsNDc1IDU5Ny4zNjUyMzEsNDY1LjEzNDI3NSA2MTcuNTc2OTM2LDQ0OC40NDI4MzggQzYzNy43ODg2NDIsNDMxLjc1MTQwMSA2NTIuMzYzNDY5LDQwOC4yMzQyNTEgNjU3LjYyMDI1NiwzODAuOTMxNDAxIEM2NjUuMjI3MjgxLDM0MS40MjE4MjYgNjY5LDI5Ni40MjU3MTUgNjY5LDI0NS45NDk2MTIgQzY2OSwxOTQuNzgyNTA1IDY2NS4xMjI5MTQsMTQ5LjA5MDE3OCA2NTcuMzA3MTkxLDEwOC44NzkyMiBDNjUyLjAwOTAzMSw4MS42MjA4MjgzIDYzNy40MjIzNzgsNTguMTUyMjAwOCA2MTcuMjE4MTM1LDQxLjQ5OTA0NjggQzU5Ny4wMTM4OTMsMjQuODQ1ODkyOCA1NzEuMTkyMDYxLDE1LjAwODIxMjMgNTQzLjQyMzU0NiwxNS4wMTE3MTQzIFoiIGlkPSJSZWN0YW5nbGUiIHN0cm9rZT0idXJsKCNsaW5lYXJHcmFkaWVudC0xKSIgc3Ryb2tlLXdpZHRoPSIzMCIgZmlsbD0iI0U5MUU2MyI+PC9wYXRoPgogICAgICAgICAgICA8ZyBpZD0iTG9nbyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTQ0LjAwMDAwMCwgMTE1LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9Imc5MzEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDc1LjAwMDAwMCwgMTI2LjU0MTM1Nikgc2NhbGUoLTEsIDEpIHJvdGF0ZSgtMTgwLjAwMDAwMCkgdHJhbnNsYXRlKC03NS4wMDAwMDAsIC0xMjYuNTQxMzU2KSB0cmFuc2xhdGUoMC4wMDAwMDAsIDAuMDQxMzU2KSIgZmlsbD0iI0ZGRkZGRiIgZmlsbC1ydWxlPSJub256ZXJvIj4KICAgICAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0icGF0aDkzMyIgcG9pbnRzPSIwIDAgMCAyNTIuOTk3MDc0IDMxLjUwNzc5NzggMjUyLjk5NzA3NCAzMS41MDc3OTc4IDI4LjA2ODYxMjQgMTQ5LjE4MzQyMSAyOC4wNjg2MTI0IDE0OS4xODM0MjEgMCI+PC9wb2x5Z29uPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPGcgaWQ9Imc5MzUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDc1LjAwMDAwMCwgMTI2LjU0MTM1Nikgc2NhbGUoLTEsIDEpIHJvdGF0ZSgtMTgwLjAwMDAwMCkgdHJhbnNsYXRlKC03NS4wMDAwMDAsIC0xMjYuNTQxMzU2KSB0cmFuc2xhdGUoMC4wMDAwMDAsIDAuMDQxMzU2KSIgc3Ryb2tlPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjI2LjY2NjY2NiI+CiAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9InBhdGg5MzciIHBvaW50cz0iMCAwIDAgMjUyLjk5NzA3NCAzMS41MDc3OTc4IDI1Mi45OTcwNzQgMzEuNTA3Nzk3OCAyOC4wNjg2MTI0IDE0OS4xODM0MjEgMjguMDY4NjEyNCAxNDkuMTgzNDIxIDAiPjwvcG9seWdvbj4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDxnIGlkPSJnOTM5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzMDUuMTE4NzA3LCAxNTAuODA3MzAxKSBzY2FsZSgtMSwgMSkgcm90YXRlKC0xODAuMDAwMDAwKSB0cmFuc2xhdGUoLTMwNS4xMTg3MDcsIC0xNTAuODA3MzAxKSB0cmFuc2xhdGUoMjE0LjYxODcwNywgNDIuODA3MzAxKSI+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Imc5NDEtQ2xpcHBlZCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsIC0wLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iZzk0MSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMTksIDAuMzE2MzU0KSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iZzk0NyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC44ODAzNTQsIDAuODI3NzcxKSIgZmlsbD0iI0ZGRkZGRiIgZmlsbC1ydWxlPSJub256ZXJvIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNLTguNTI2NTEyODNlLTE0LDg1LjAzNDA2MTEgTC04LjUyNjUxMjgzZS0xNCwyMTMuMjM5OTk1IEwyOS45ODk2Mzk1LDIxMy4yMzk5OTUgTDI5Ljk4OTYzOTUsODYuOTMwNjA2MSBDMjkuOTg5NjM5NSw0OS43NjAwOTYxIDUwLjg2NjUzMTEsMjYuMjQxMTY3MiA4OS41ODUyNjM5LDI2LjI0MTE2NzIgQzEyOC4zMDUyNjMsMjYuMjQxMTY3MiAxNDkuNTYzMjc3LDQ5Ljc2MDA5NjEgMTQ5LjU2MzI3Nyw4Ni45MzA2MDYxIEwxNDkuNTYzMjc3LDIxMy4yMzk5OTUgTDE3OS41NTE2NSwyMTMuMjM5OTk1IEwxNzkuNTUxNjUsODUuMDM0MDYxMSBDMTc5LjU1MTY1LDMzLjQ1MDMxNTQgMTQ5LjE4MjE1NSwwLjA3MDM2NDkzNjcgODkuNTg1MjYzOSwwLjA3MDM2NDkzNjcgQzI5Ljk4OTYzOTUsMC4wNzAzNjQ5MzY3IC04LjUyNjUxMjgzZS0xNCwzMy44MjczNDcxIC04LjUyNjUxMjgzZS0xNCw4NS4wMzQwNjExIiBpZD0icGF0aDk0OSI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Imc5NTEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuODgwMzU0LCAwLjgyNzc3MSkiIHN0cm9rZT0iI0ZGRkZGRiIgc3Ryb2tlLXdpZHRoPSIyNi42NjY2NjYiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0tOC41MjY1MTI4M2UtMTQsODUuMDM0MDYxMSBMLTguNTI2NTEyODNlLTE0LDIxMy4yMzk5OTUgTDI5Ljk4OTYzOTUsMjEzLjIzOTk5NSBMMjkuOTg5NjM5NSw4Ni45MzA2MDYxIEMyOS45ODk2Mzk1LDQ5Ljc2MDA5NjEgNTAuODY2NTMxMSwyNi4yNDExNjcyIDg5LjU4NTI2MzksMjYuMjQxMTY3MiBDMTI4LjMwNTI2MywyNi4yNDExNjcyIDE0OS41NjMyNzcsNDkuNzYwMDk2MSAxNDkuNTYzMjc3LDg2LjkzMDYwNjEgTDE0OS41NjMyNzcsMjEzLjIzOTk5NSBMMTc5LjU1MTY1LDIxMy4yMzk5OTUgTDE3OS41NTE2NSw4NS4wMzQwNjExIEMxNzkuNTUxNjUsMzMuNDUwMzE1NCAxNDkuMTgyMTU1LDAuMDcwMzY0OTM2NyA4OS41ODUyNjM5LDAuMDcwMzY0OTM2NyBDMjkuOTg5NjM5NSwwLjA3MDM2NDkzNjcgLTguNTI2NTEyODNlLTE0LDMzLjgyNzM0NzEgLTguNTI2NTEyODNlLTE0LDg1LjAzNDA2MTEgWiIgaWQ9InBhdGg5NTMiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"
                    />
                  </LogoBox>
                  <StyledButton>
                    <Typography>Promotions</Typography>
                  </StyledButton>
                  <StyledButton>
                    <Typography>Featured</Typography>
                  </StyledButton>
                  <StyledButton>
                    <Typography>Top Categories</Typography>
                  </StyledButton>
                  <StyledButton>
                    <Typography>All Categories</Typography>
                  </StyledButton>
                  <StyledButton>
                    <Typography>Pricing</Typography>
                  </StyledButton>
                </Stack>
              </Grid>

              <Stack 
                direction="row"
                justifyContent={"flex-end"}
                alignItems={"center"}
                spacing={3}
              >
               <Box hidden={MobileView}
                  sx={{
                    width: "min-content",
                    border: (theme) => `1px solid ${theme.palette.divider}`,
                    borderRadius: 1,
                    bgcolor: "background.paper",
                    color: "text.secondary",
                    height: "20px",
                  }}
                ></Box> 

                <StyledButton  sx={{  "&:focus": {
        backgroundColor: "rgb(0,0,0,.1)",
      },}}> LOGIN</StyledButton>

                <RegisterButton>Register</RegisterButton>
 
                <StyledSettingsIcon></StyledSettingsIcon>
              
              </Stack>
            </Grid>
          </Toolbar>
        </StyledAppBar>
      </Box>
    </>
  );
};

export default Navbar;
