import React, { useState, useEffect } from 'react';
import { ContactCard } from './ContactCard/ContactCard.js';

export const ContactList = () => {

    const [contactList, setContactList] = useState([
        {
            id: 1,
            name: 'Rahul Gupta',
            age: 25,
            favorite: false,
            designation: 'is your friend'
        },
        {
            id: 2,
            name: 'Shivangi Sharma',
            age: 25,
            favorite: false,
            designation: 'is your friend'
        },
        {
            id: 3,
            name: 'Aakash Singh',
            age: 25,
            favorite: false,
            designation: 'is your friend'
        }
    ]);
    const [searchText, setSearchText] = useState('');

    const toggleFavorite = (starValue, id) => {
        let temp = contactList;
        for (let i = 0; i < temp.length; i++) {
            if (temp[i].id === id) {
                temp[i].favorite = starValue;
            }
        }
        console.log(temp)
        setContactList([...temp]);
    }
    const deleteFriend = (id) => {
        let temp = contactList;
        for (let i = 0; i < temp.length; i++) {
            if (temp[i].id === id) {
                temp.splice(i, 1);
            }
        }
        console.log(temp)
        setContactList([...temp]);
    }
    const handleTextChange = (e) => {
        setSearchText(e.target.value);
        let temp = contactList;
        console.log(e.target.value, `eee`);
        temp.map(contact => contact.name.toLowerCase().includes(e.target.value))
        setContactList([...temp]);
        // else {
        //     setContactList
        // }
    }
    return (
        <div>
            <h1>Contact List</h1>
            <input type="text" value={searchText} onChange={handleTextChange} />
            {contactList.length > 0
                ?
                contactList.map(contact => (
                <ContactCard key={contact.id} contactData={contact} toggle={toggleFavorite} handleDelete={deleteFriend} />))
                :
                <p>You have no friends :(</p>}
        </div>
    )
}