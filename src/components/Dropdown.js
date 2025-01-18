//import React and useState into this file so we can create a component and add state to the function
    //state allows the dropdowns and messages to remember their values when the user interacts with them
import React, {useState} from 'react';

//create dropdown function to export later
function Dropdown(){

//create an array of options that will be included in the option
    //this works so we don't have to hardcode values
const fireOptions = ['Lean FIRE', 'Fat FIRE', 'Barista FIRE'];


//now we need to track which option the user selects from the dropdown
//dropdown is a controlled component, so it is controlled by useState
    //selectedOption starts off as an empty string bc nothing is selected
const [selectedOption, setSelectedOption] = useState('');

//set a message the same way we did the option
const [message, setMessage] = useState('')

//function to handle event click
const handleClick = () => {
    if (selectedOption){
        setMessage(`You selected ${selectedOption}`)
    } else {
        setMessage(`Please select an option.`)
    }
};

{/*need react to know that value is selectValue */}        
{/*need react to be notified that a new option is being selected, so we'll update setSelectedOption to the target value of the event (e.target.value)*/}

    return (
        <div>
            <label htmlFor="options">How on FIRE do you want to be? </label>  {/*Adds a label for the dropdown option*/}

            <select

                value={selectedOption} 
            onChange={(e) => setSelectedOption(e.target.value)}
            >
                <option value="lean FIRE">Lean FIRE</option>
                <option value="fat FIRE">Fat FIRE</option>
                <option value="barista FIRE">Barista FIRE</option>
            </select>

            <button onClick={handleClick}>Submit</button>
            <p>{message}</p>
        </div>
    );

}



export default Dropdown;