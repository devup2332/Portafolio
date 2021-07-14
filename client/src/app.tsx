import React, { Suspense } from "react";
import "./styles.scss";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";

const HomePage = React.lazy(() => import("./pages/Home/Home.page"));
const ContactPage = React.lazy(() => import("./pages/Contact/Contact.page"));

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Suspense fallback="loading">
                        <HomePage />
                    </Suspense>
                </Route>

                <Route exact path="/contact">
                    <Suspense fallback="loading">
                        <ContactPage />
                    </Suspense>
                </Route>
                <Redirect exact from="/*" to="/" />
            </Switch>
        </Router>
    );
};

export default App;
