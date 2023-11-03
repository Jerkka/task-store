import React from 'react';
import ReactDOM from "react-dom";
import ActivityApplication from "./App";  


const root = ReactDOM.createRoot(document.getElementById('js-framework-home'));
const activity_choices = JSON.parse(document.getElementById('activity-choices').textContent);
root.render(<ActivityApplication/>);