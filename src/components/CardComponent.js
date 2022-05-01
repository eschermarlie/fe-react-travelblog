import * as React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import {Card, CardActions, CardContent, CardMedia} from "@mui/material";
import Box from "@mui/material/Box";

const CardComponent = ({data}) => {
    return (
        <Card sx={{m:"10px"}}>
            <CardMedia
                component="img"
                alt="green iguana"
                src={data.imageURL}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {data.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {data.content}
                </Typography>
                <Box sx={{ textAlign: 'right', fontStyle: 'italic'}}>
                    <Typography variant="body2" color="text.secondary">
                        viewed {data.totalViews} times.
                    </Typography>
                </Box>

            </CardContent>
            <CardActions>
                <Button size="small" component={Link} to={"/viewPost/"+data.id}>Show More</Button>
            </CardActions>

        </Card>
    );
};
export default CardComponent;
