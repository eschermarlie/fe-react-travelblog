import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import {Grid, Paper, TextField} from "@mui/material";
import axios from "axios";
import {useState} from "react";

const CreatePost = () => {
    const [formData, setData] = useState({
        title:'',
        content:'',
        imageURL:'',
        totalViews: 0,
        publishDate: "1 January 2022",
        author: 'admin'
    });


    function handleSubmitPost(){
            axios({
                method: 'post',
                url: 'http://localhost:8080/blogEntries',
                headers: {
                },
                data:formData
            })
                .then(response => {
                        console.log("create success", response)
                    }
                )
                .catch(error => {
                    console.log('error', error);
                });
    }


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
                    <Typography gutterBottom variant="h5" component="div">
                    Create new post
                    </Typography>
                    <TextField
                        required
                        id="standard-required"
                        label="Title"
                        defaultValue=""
                        variant="standard"
                        sx={{width: "100%", my:"5px"}}
                        onChange={value => setData({ ...formData,
                            title: value
                        })}
                    />
                    <TextField
                        required
                        id="standard-required"
                        label="Image URL"
                        defaultValue=""
                        variant="standard"
                        sx={{width: "100%", my:"5px"}}
                        onChange={value => setData({ ...formData,
                            imageURL: value
                        })}
                    />
                    <TextField
                        id="standard-multiline-static"
                        label="Content"
                        multiline
                        rows={4}
                        defaultValue=""
                        variant="standard"
                        sx={{width: "100%", my:"5px"}}
                        onChange={value => setData({ ...formData,
                            content: value
                        })}
                    />
                    <Button size="small" onClick={handleSubmitPost()}>Create Post</Button>

                </Paper>
            </Grid>
        </Grid>
    );
};
export default CreatePost;
