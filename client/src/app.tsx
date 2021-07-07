import React, { Suspense } from "react";
import "./styles.scss";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";

const HomePage = React.lazy(() => import("./pages/Home/Home.page"));

const App = () => {
    return (
        <Router     >
            <Switch>
                <Route exact path="/">
                    <Suspense fallback="loading">
                        <HomePage />
                    </Suspense>
                </Route>
                <Redirect exact from="/*" to="/" />
            </Switch>
        </Router>
    );
};

export default App;
