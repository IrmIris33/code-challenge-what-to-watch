import React, { useState} from 'react';
import { Form, Navbar } from 'react-bootstrap';
import '../CSS/Header.css';


const Header = (FetchUrl) => {
    const [ searchValue, setSearchValue ] = useState('')

    const handleSearchInputChanges = (e) => {
        e.preventDefault()
        setSearchValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        FetchUrl(searchValue)
    }
    
    return (
        <div className = 'container-header'>
            <Navbar className = 'Navbar' expand = 'lg'>
                <Navbar.Brand className='header'> What To Watch</Navbar.Brand>
                
                <Form onSubmit={handleSubmit} inline className='search-form'>
                    <Form.Control className='search'
                        value={searchValue}
                        onChange={handleSearchInputChanges}
                        type='text'
                        placeholder='Search Movie Title'/>

                    <input className='search-button' type='submit' value='SEARCH'/>
                </Form>

            </Navbar>

        </div>
    );
};

export default Header;
