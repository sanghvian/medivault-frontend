import {useEffect, useState} from 'react';
// import '@styles/styles.css';
import './assets/css/styles.css';
// import ViewReportsScreen from '@components/screens/ViewReports';
import ViewReportsScreen from './components/screens/ViewReportsScreen';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import StoriesScreen from '@components/screens/StoriesScreen';
import LoginScreen from '@components/screens/LoginScreen';
import SearchScreen from '@components/screens/SearchScreen';
// import mixpanel from 'mixpanel-browser'
// import NotAuthenticatedScreen from '@components/screens/NotAuthenticatedScreen';
// import PreloaderScreen from '@components/screens/PreloaderScreen';

function App() {
    const [hasLoaded, setHasLoaded] = useState<boolean>(false)
    useEffect(() => {
        // mixpanel?.init(process.env.REACT_APP_MIXPANEL_ID, {debug: true, ignore_dnt: true},);
        // mixpanel?.track('medical history screen opened', {});
    },[])
    return (
        <Router>
            <div className="App">
                <Switch>
                    {/* <Route path="/not-authenticated" component={NotAuthenticatedScreen}/> */}
                    {/* <Redirect to ="/not-authenticated" /> */}
                    <Route exact path="/view-report" component={StoriesScreen} />
                    <Route exact path="/login" component={LoginScreen} />
                    <Route exact path="/search" component={SearchScreen} />
                    <Route
                        path="/"
                        exact
                        render={(props) => (
                          <ViewReportsScreen hasLoaded={hasLoaded} setHasLoaded={setHasLoaded} />
                        )}
                    />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
