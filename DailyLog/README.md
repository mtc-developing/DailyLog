# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



<!-- THE FOLLOWING IS DASHBOARD -->

import React from 'react';

import styles from "./Dashboard.module.css"

function Dashboard() {

    return (
        <div className={styles.dashboard}>
            <p>Testing Dashboard</p>
            <p>8:32pm</p>
            <p>Monday</p>
        </div>
    )
}

export default Dashboard;  CSS

.dashboard{
    text-align: center;
    height: 40vh;
    width: auto;
    color: rgba(245, 244, 251, 0.5);
    padding: 5vh;
    font-size: 2rem;
    text-shadow: 3px 3px 5px 5px rgba(4, 22, 88, 0.5);

    border: 1px solid yellow;
}

<!-- THE FOLLOWING IS HOMEPAGE -->

import React from 'react';

import styles from "./Homepage.module.css";

function Homepage() {
    
    return (
        <div className={styles.homepage}>testing homepage</div>
    )
}

export default Homepage;

<!-- CSS -->

.homepage{
    background-color: rgb(245, 244, 251);
    color: rgb(4,22,88);
    text-align: center;
    font-size:1.65rem;
    transform: translatey(100vh);
    margin-top: 5vh;
    padding: 2.5vw;
    padding-top: 10vh;
    border-radius: 60px;
    animation: homepage 1s linear forwards;
    animation-delay: 9.2s;
    height:100%;
    width: auto;

    animation-delay: 0s;
}

@keyframes homepage{
    to{
        transform: translatey(0vh);
    }
}