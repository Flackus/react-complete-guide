import React, { Component } from 'react';
import { BrowserRouter, Route, NavLink, Switch, Redirect } from 'react-router-dom';

import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';
import './App.css';

class App extends Component {
    render () {
        return (
            <BrowserRouter>
                <div className="App">
                    <nav>
                        <NavLink to="/courses">Courses</NavLink>
                        <NavLink to="/users">Users</NavLink>
                    </nav>
                    <Switch>
                        <Route path="/courses" component={Courses} />
                        <Route path="/users" component={Users} />
                        <Redirect from="/all-courses" to="/courses" />
                        <Route render={() => <h1>Not found</h1>} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
