import React, { StrictMode } from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import{App} from './App';

const element = document.getElementById("root");
const root = ReactDOM.createRoot(element);

root.render(
<StrictMode>
    <BrowserRouter>
        <App/>
    </BrowserRouter>
</StrictMode>
);