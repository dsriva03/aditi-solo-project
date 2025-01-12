import React from "react";
import {createRoot} from 'react-dom/client';
import App from './App';
import './styles.css'; //importing SCSS

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App />);