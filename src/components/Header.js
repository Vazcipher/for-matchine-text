import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import ChatBox from './ChatBox'

export default function Header() {
    return (
        <div className="navbar">
            <Navbar bg="light" expand="lg">

                <div className="navContents">
                   
                        <Navbar.Text>
                            You are talking to <a>Mark Otto</a>
                        </Navbar.Text>
                  
                   
                        <Navbar.Text>
                            Oct 12, 2017
                        </Navbar.Text>

                        

                </div>



            </Navbar>
            <ChatBox />
        </div>
    )
}
