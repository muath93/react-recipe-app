import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const Default = () => {
    return <Header title="404" styleClass='default-hero'>
        <h4 className='text-light text-uppercase'>this page dosn't exist...</h4>
        <Link to='/' className='text-uppercase btn btn-secondary btn-lg mt-4'>
            return home
            </Link>
    </Header>
}

export default Default;