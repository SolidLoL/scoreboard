import React from 'react'
import { Link } from 'react-router-dom';
import "./style.scss";
export const Button = (props) => {

    const { title, type, url } = props;

    return (<Link to={url} className={`btn btn-${type} text-white`}>{title}</Link>)
}
