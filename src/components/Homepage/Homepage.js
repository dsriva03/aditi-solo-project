//import fire animations
import React from 'react'
import FireAnimation from './FireAnimation.js'
// import './Homepage.css'
//create homepage function and paste in App style code
import Button from './Button.js'

function Homepage(){
    //create an object for styling, and then use it on the h1 header
    const headerStyle = {
        marginTop: '20px' ,//adds space above the h1
        textAlign: 'center'
    }; 
    const fireStyle= {
        marginTop: '50px'
    };
    //If modifying the FireAnimation component isn't feasible (for instance, if it's a third-party component), you can wrap it with a <div> in your Homepage component and apply the styles to that <div> instead:
    const buttonStyle= {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '10px'
    };

    return (
        <div>

            <FireAnimation className="fire-animation"/>
            <h1 style={headerStyle}>fire.</h1>
            <div style={buttonStyle}>
            <Button className="navButton" label="careful. it's hot stuff." buttonRoute="/fire" />
            </div>
        </div>
    );
};

export default Homepage;