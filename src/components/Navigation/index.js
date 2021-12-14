import React, { Component } from 'react'
import { Link } from "react-router-dom";
import {Hamburg} from '@components/Hamburg';
import {Logo} from '@components/Logo';
import Icon from '@assets/Icon.svg'
import './style.scss';

export const Navigation = () => {
    return (
        <nav>
            <Hamburg/>
            <Link to="/">
            <Logo/>
            </Link>
            <Link to="/search">
                <img src={Icon}></img>
                </Link>
        </nav>
    )
}

