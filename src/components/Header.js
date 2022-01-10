import React from 'react'
import styled from 'styled-components'
import { AiFillGithub } from "react-icons/ai";

function Header() {
    return (
        <Container>
            <Nav>
             <h1 className='irw' ><AiFillGithub /></h1>
             <h1 className='wri'>Github Profiles</h1>
            </Nav>
        </Container>
    )
}

export default Header

const Container = styled.div`
height: 100px;
background:#B762C1;

`
const Nav = styled.div`
 
 
 padding: 10px 600px;
 text-shadow: 4px 4px 7px #8946A6;
 display: flex;

 .wri{
     padding-left: 10px;
 }

 
 
`


