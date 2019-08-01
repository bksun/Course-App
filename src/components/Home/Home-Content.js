import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HomeContent extends Component {
    
    render() { 
        return (
            <div className="jumbotron">
                <h1 className="display-4">Pluralsingh Administration</h1>
                <p className="lead">React, Redux and Router for ultra-responsive web-apps</p>
               <p className="lead">
                    <Link className="btn btn-primary btn-lg" role="button" to="/courses">Learn more</Link>
                </p>
            </div>
        )
    }
}
 
export default HomeContent;