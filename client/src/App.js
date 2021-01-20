import React from 'react';
import { Container, AppBar, Typography, Grow, Grid} from '@material-ui/core'
import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'
import PostWinker from './images/PostWinker.png';
const App = () => {
    return (
        <Container maxidth="lg">
            <AppBar position = "static" color="inherit">
                <Typography variant="h2" align = "center">PostWinker</Typography>
                <img src = {PostWinker} alt = "PostWinker" height = "60" />
            </AppBar>
            <Grow in>
                <container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={4}>
                        <Grid item xs={12} sm={7}>
                            <Posts/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form/>
                        </Grid>
                    </Grid>
                </container>
            </Grow>
        </Container>
    )

}
export default App; 