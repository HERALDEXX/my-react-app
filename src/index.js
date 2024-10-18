import React from 'react';
// import ReactDOM from 'react-dom';
import ReactDOM from "react-dom/client";
// import Car from './Car';
// import Garage from "./Car";
// import Goal from './score';
import MyForm from './myForm';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm />);
/*
Click F12 and navigate to the "Console view"
to see the result when you submit the form.
*/
// root.render(<Goal isGoal={true} />);
// root.render(<Goal isGoal={false} />);
// root.render(<Garage />); 
// root.render(<Car />);
// root.render(<Car age='new' />);