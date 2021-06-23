import { Container } from '@material-ui/core'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Auth from './features/Auth/Auth';
import Home from './features/Home/Home';
import Navbar from './features/Navbar/Navbar';

const App = () => {

    return (
        <BrowserRouter>
            <Container maxWidth="lg">
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/auth" exact component={Auth} />
                </Switch>
            </Container >
        </BrowserRouter>
    )
}

export default (App)