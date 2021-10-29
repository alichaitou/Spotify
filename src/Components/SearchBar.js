import React from 'react'
import {Container, Form} from 'react-bootstrap'
import '../Styles.css';

function SearchBar({search, setSearch}) {
    return <Form.Control className="search" type="search" placeholder="Search for an artist...."
        value={search} onChange={e => setSearch(e.target.value)} />;
}
export default SearchBar