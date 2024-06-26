import React from "react";
import { Box, Container, Stack } from "@mui/material";
import Divider from "../../components/divider";


export default function Statistics() {
    return (
        <div className={"static-frame"}>
            <Container>
                <Stack className="info">
                    <Stack className="static-box">
                        <Box className="static-num">10 years</Box>
                        <Box className="static-text">Years of Compose Coffee</Box>
                    </Stack>
                    <Divider height="64" width="2" bg="#E3C08D" />
                    <Stack className="static-box">
                        <Box className="static-num">2600</Box>
                        <Box className="static-text">Branches Nationwide</Box>
                    </Stack>
                    <Divider height="64" width="2" bg="#E3C08D" />
                    <Stack className="static-box">
                        <Box className="static-num">100+</Box>
                        <Box className="static-text">Menu</Box>
                    </Stack>
                    <Divider height="64" width="2" bg="#E3C08D" />
                    <Stack className="static-box">
                        <Box className="static-num">12,163,149</Box>
                        <Box className="static-text">Mobile App Users</Box>
                    </Stack>
                </Stack>
            </Container>
        </div>
    );
}