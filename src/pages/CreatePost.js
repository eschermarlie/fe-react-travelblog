import * as React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {Grid, Paper, TextField} from "@mui/material";
import axios from "axios";
import {useState} from "react";
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {
    const [formData, setData] = useState({
        title:'',
        content:'',
        imageURL:'',
        totalViews: 0,
        publishDate: "1 January 2022",
        author: 'admin'
    });
    const navigate = useNavigate();
    function handleSubmitPost(){
        if(formData.imageURL === ''){
            formData.imageURL = 'https://ika.amayogyakarta.ac.id/uploads/loker/no-image.png';
        }
            axios({
                method: 'post',
                url: 'https://qdr-backend.herokuapp.com/blogEntries',
                headers: {
                },
                data:formData
            })
                .then(response => {
                    navigate('/');
                    }
                )
                .catch(error => {
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
                        label="Author"
                        defaultValue=""
                        variant="standard"
                        sx={{width: "100%", my:"5px"}}
                        onChange={event => setData({ ...formData,
                            author: event.target.value
                        })}
                    />
                    <TextField
                        required
                        id="standard-required"
                        label="Title"
                        defaultValue=""
                        variant="standard"
                        sx={{width: "100%", my:"5px"}}
                        onChange={event => setData({ ...formData,
                            title: event.target.value
                        })}
                    />
                    <TextField
                        id="standard-required"
                        label="Image URL"
                        defaultValue=""
                        variant="standard"
                        sx={{width: "100%", my:"5px"}}
                        onChange={event => setData({ ...formData,
                            imageURL: event.target.value
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
                        onChange={event =>
                            setData({
                                ...formData,
                                content: event.target.value
                            }
                        )}
                    />
                    <Button size="small" onClick={handleSubmitPost}>Create Post</Button>

                </Paper>
            </Grid>
        </Grid>
    );
};
export default CreatePost;
