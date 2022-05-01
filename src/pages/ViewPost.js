import * as React from 'react';
import {Link, useParams} from 'react-router-dom';
import {Divider, Grid, Paper} from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {useEffect, useState} from "react";
import axios from "axios";

const ViewPost = () => {
  let { topicId } = useParams();
  const [data, setData] = useState([]);
  const [error, setError] = useState('');

    function getPostDetail(){
        console.log("CALLED", topicId)
        axios({
            method: 'get',
            url: 'http://localhost:8080/blogEntries/'+topicId,
            headers: {
            }
        })
            .then(response => {
                    setData(response.data);
                    setViewCounter(response.data);
                }
            )
            .catch(error => setError({ error }));
    }

    function setViewCounter(currentData){
        console.log("updating ", topicId);
        let newTotalView = currentData.totalViews + 1;
        currentData['totalViews'] = newTotalView;
        console.log("data sent", currentData);
        axios({
            method: 'post',
            url: 'http://localhost:8080/blogEntries',
            headers: {
            },
            data:currentData
        })
            .then(response => {
                console.log("update success", response)
            }
            )
            .catch(error => {
                console.log('error', error);
                setError({ error })
            });
    }

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        // Update the document title using the browser API
            getPostDetail();
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
                    <Box
                        component="img"
                        sx={{
                            maxWidth: "100%",
                        }}
                        alt="The house from the offer."
                        src={data.imageURL}
                    />
                    <h4>Viewed {data.totalViews} times.</h4>
                    <h1>{data.title}</h1>
                    <Divider/>
                    <Typography>
                        {data.content}
                    </Typography>
                </Paper>
            </Grid>

        </Grid>

    );
};
export default ViewPost;
