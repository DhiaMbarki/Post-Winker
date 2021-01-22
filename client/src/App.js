import React, { useState, useEffect} from 'react';
import { Container, AppBar, Typography, Grow, Grid} from '@material-ui/core'
import {useDispatch} from 'react-redux'
import {getPosts} from './actions/Posts'
import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'
import PostWinker from './images/PostWinker.png';
import useStyles from './styles'


const App = () => {
    const [currentId, setCurrentId] = useState(null)
    const classes = useStyles();
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch])


    return (
        <Container maxidth="lg">
            <AppBar className={classes.appBar} position = "static" color="inherit">
                <Typography className={classes.heading} variant="h2" align = "center">PostWinker</Typography>
                <img className={classes.image} src = {PostWinker} alt = "𝒫❤𝓈𝓉𝒲𝒾𝓃𝓀𝑒𝓇" height = "60" />
            </AppBar>
            <Grow in>
                <container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={4}>
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentId= {setCurrentId} />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId= {setCurrentId} />
                        </Grid>
                    </Grid>
                </container>
            </Grow>
        </Container>
    )

}
export default App; 