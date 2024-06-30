import React from "react";
import { Box, Container, Stack } from "@mui/material";
import Card from "@mui/joy/Card";
import { CssVarsProvider, Typography } from "@mui/joy";
import CardOverflow from "@mui/joy/CardOverflow";
import AspectRatio from "@mui/joy/AspectRatio";

const activeUsers = [
    { memberNick: "Jack", memberImage: "/img/activeuser1.png" },
    { memberNick: "Sadiya", memberImage: "/img/activeuser2.png"},
    { memberNick: "Rose", memberImage: "/img/activeuser3.png"},
    { memberNick: "Nusret", memberImage: "/img/activeuser4.png"},
];

export default function ActiveUsers() {
    return (
        <div className={"active-users-frame"}>
            <Container>
                <Stack className={"main"}>
                    <Box className={"category-title"}>Active Members</Box>
                    <Stack className={"cards-frame"}>
                    <CssVarsProvider>
                            {activeUsers.length !== 0 ? (
                                activeUsers.map((ele, index) => {
                                    return (
                                        <Card key={index} variant="outlined" className={"card"}>
                                            <CardOverflow>
                                                <AspectRatio ratio="1">
                                                <img src={ele.memberImage} alt="" />
                                                </AspectRatio>
                                            </CardOverflow>
                                            <div className="member-nickname">{ele.memberNick}</div>
                                        </Card>
                                    );
                                })
                            ) : (
                                <Box className="no-data">No Active Users!</Box>
                            )}
                        </CssVarsProvider>
                    </Stack>
                </Stack>
            </Container>
        </div>
    );
}