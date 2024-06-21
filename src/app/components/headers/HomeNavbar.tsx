import { Box, Button, Container, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";

export function HomeNavbar() {
    const authmember = null;
    
    return (
    <div className="home-navbar">
        <Container className="navbar-container ">
            <Stack className="menu">
                <Box>
                    <NavLink to={"/"}>
                        <img className="brand-logo" src="/icons/burak.svg" />
                    </NavLink>
                </Box>
                <Stack className="links">
                     <Box className={"hover-line"}>
                        <NavLink to={"/"} activeClassName="underline">
                            Home
                        </NavLink>
                    </Box>
                    <Box className={"hover-line"}>
                        <NavLink to={"/products"} activeClassName="underline">
                            Products
                        </NavLink>
                    </Box>
                    {authmember ? (
                        <Box className={"hover-line"}>
                            <NavLink to={"/orders"} activeClassName="underline">
                                Orders
                            </NavLink>
                        </Box>
                    ) : null}
                    {authmember ? (
                        <Box className={"hover-line"}>
                            <NavLink to={"/member-page"} activeClassName="underline">
                                My Page
                            </NavLink>
                        </Box>
                    ) : null}
                    <Box className={"hover-line"}>
                        <NavLink to={"/help"} activeClassName="underline">
                            Help
                        </NavLink>
                    </Box>
                    {/* BASKET */}

                    {!authmember ? (
                        <Box>
                           <Button
                            variant="contained" className="login-button">
                            Login
                            </Button>
                        </Box>
                    ) : (
                        <img
                            className="user-avatar"
                            src={"/icons/default-user.svg"}
                            aria-haspopup={"true"}
                         />
                    )}

            </Stack>
                </Stack>
                <Stack className={"header-frame"}>
                    <Stack className={"detail"}>
                        <Box className={"head-main-txt"}>
                            Composing The Best Coffee
                        </Box>
                        <Box className={"wel-txt"}>Specialty Blends, Compose Coffee</Box>
                        <Box className={"service-txt"}>24 hours service</Box>   
                        <Box className={"signup"}>
                            {!authmember ? (
                                <Button
                                variant={"contained"} 
                                className={"signup-button"}
                                >SIGN UP</Button>
                            ) : null}
                        </Box>
                    </Stack>
                    <Box className={"video-frame"}>
                        <video className={"background-video"} autoPlay loop muted>
                        <source src="/video/coffee-ads.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </Box>
                </Stack>
            </Container>
        </div>
        );
    }