import React from 'react';
import CSVParse from './Parser'; // Ensure this file exists and is correctly implemented
import './AnalysisPage.css'; // Ensure this file exists and styles are properly applied
import Options from './Options';
import './Options.css';

// function Analysis() {
//     return (
//         <div className="analysis-container">
//             <h1>FIRE Options</h1>
//             <div className="fire-options">
//                 <div className="option">
//                     <input type="radio" id="lean-fire" name="fire" value="lean" />
//                     <label htmlFor="lean-fire">
//                         Lean FIRE <span className="info-icon">ℹ️</span>
//                     </label>
//                 </div>
//                 <div className="option">
//                     <input type="radio" id="fat-fire" name="fire" value="fat" />
//                     <label htmlFor="fat-fire">
//                         Fat FIRE <span className="info-icon">ℹ️</span>
//                     </label>
//                 </div>
//                 <div className="option">
//                     <input type="radio" id="coast-fire" name="fire" value="coast" />
//                     <label htmlFor="coast-fire">
//                         Coast FIRE <span className="info-icon">ℹ️</span>
//                     </label>
//                 </div>
//             </div>

//             <div className="upload-section">
//                 <button className="upload-button">Upload CSV</button>
//             </div>
//             <div className="analyze-section">
//                 <button className="analyze-button">Analyze</button>
//             </div>
//         </div>
//     );
// }

// export default Analysis;

function AnalysisPage(){
    return (
        <div>
    <h1 style={{textAlign: 'center'}}>it's simple.</h1>
    <h3 style={{paddingLeft: '100px', fontSize: '2rem'}}>step 1: choose a FIRE option so we can spark the flame to your future.</h3>
    <Options/>
    <h3 style={{paddingLeft: '100px', fontSize: '2rem'}}> step 2: heat up the conversation a bit by giving us some info.</h3>
    <div style={{paddingLeft: '185px'}}>
        <button className="upload-button">upload financial CSV.</button>
    </div>
    <h3 style={{paddingLeft: '100px', fontSize: '2rem'}}> step 3: don't get cold feet now. grab the ember-ella, because things are about to get lit. </h3>
    <div style={{paddingLeft: '185px'}}>
        <button className="analyze-button">analyze.</button>
    </div>
        </div>
  
    )
};

export default AnalysisPage;