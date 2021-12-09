import React, { Component } from 'react'
import {Hamburg} from '@components/Hamburg';
import {Logo} from '@components/Logo';
import './style.scss';

export const Navigation = () => {
    return (
        <nav>
            <Hamburg/>
            <Logo/>
        </nav>
    )
}

