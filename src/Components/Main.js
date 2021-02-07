import React from 'react';
import Header from './Header';
import Home from './Home';
import Destination from './Destination';
import Treatment from './Treatment';
import Doctors from './Doctors';
import Centers from './Centers';
import Footer from './Footer';
import { Switch, Redirect, Route } from 'react-router-dom';


const Main = () => {

    return (
        <>
            <Header />
            <Switch>
                <Route path='/home' component={Home} />
                <Route path='/destination' component={Destination} />
                <Route path='/treatment' component={Treatment} />
                <Route path='/doctors' component={Doctors} />
                <Route path='/centers' component={Centers} />
                <Redirect to='/home' />
            </Switch>
            <Footer />
        </>
    );

}

export default Main;