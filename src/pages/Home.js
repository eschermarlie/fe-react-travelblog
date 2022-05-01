import * as React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import {Card, CardActions, CardContent, CardMedia, Grid, Paper} from "@mui/material";
import CardComponent from "../components/CardComponent";
import axios from "axios";
import {useEffect, useState} from "react";

const Home = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState('');

    function getData(){
        axios({
            method: 'get',
            url: 'https://qdr-backend.herokuapp.com/blogEntries',
            headers: {
            }
        })
            .then(response => {
                    setData(response.data);
            }
            )
            .catch(error => setError({ error }));
    }

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        // Update the document title using the browser API
            getData();

    }, []);
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ my:"20px" }}
        >
            <Grid item xs={3}>
                <Paper variant="outlined" sx={{ height: "100%", maxWidth: "800px", p:"10px" }}>
                    {data.map((item, index) => {
            return (
                    <CardComponent key={item.id} data={item}/>
            )
        })}
                </Paper>
            </Grid>
        </Grid>
    );
};
export default Home;
