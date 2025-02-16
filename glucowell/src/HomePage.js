import React from "react";
// import { GoogleGenerativeAI, SchemaType } from "@google/generative-ai";
// import {
//     Box,
//     Button,
//     Container,
//     TextField,
//     Typography,
//     Paper,
// } from "@mui/material";
import { BarChart } from '@mui/x-charts';
import DexcomAPI from './DexcomAPI';

// insert data later
const HomePageComponent = () => {
    return (
    <div>
        <BarChart
            xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]}
            series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
            width={500}
            height={300}
        />
        <div>
            <DexcomAPI />
        </div>
    </div>

    );
};

export default HomePageComponent;
