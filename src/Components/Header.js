import React, { useState} from 'react';
import { Form, Navbar } from 'react-bootstrap';
import '../CSS/Header.css';


const Header = ( {setFetchUrl} ) => {
    const [ searchValue, setSearchValue ] = useState('')

    const handleSearchInputChanges = (e) => {
        e.preventDefault()
        setSearchValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setFetchUrl(searchValue)
    }
    
    return (
        <div className='container-header'>
        <Navbar className='Navbar' expand="lg">
        <Navbar.Brand className='header'>What To Watch</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

            <Form onSubmit={handleSubmit} inline className='search-form'>
                <Form.Group controlId="form-search">
                    <Form.Control className='search'
                        value={searchValue}
                        onChange={handleSearchInputChanges}
                        type='text'
                        placeholder='Search Movie Title' />
                </Form.Group>&nbsp;&nbsp;&nbsp;

                <input className='search-button' type='submit' value='SEARCH' />
            </Form>
        </Navbar.Collapse>
        </Navbar>
 </div>
    );
};

export default Header;
