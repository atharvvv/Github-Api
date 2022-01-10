import React, { useState } from 'react'
import styled from 'styled-components'

function Main() {
const [users ,setUser] = useState([]);
const laodUsers = async()=>{
    const Response = await fetch("https://api.github.com/users");
    const jsonresponse = await
    Response.json()
    setUser(jsonresponse)

};
    return (
        <Container>
        <MainContent>
        
         <h1 className='wri'>User's Data</h1>
         <Press onClick={laodUsers}>Get Data</Press>
            <UsersData>
                                {users.map (({id, login, avatar_url , }) =>  (

                                    <DataContainer>
                                                <DataImg key={id}>
                                            <img className='gitimg' src={avatar_url}/>
                                          </DataImg>

                                        
                                        <DataName key={id}>
                                            Name: {login}
                                        </DataName>

                                         <DataId key={id}>
                                             Id: {id}
                                         </DataId>

                                     </DataContainer>
                         
                             ))}


            </UsersData>

        </MainContent>

       
    </Container>
    
    )
}

export default Main


const Container = styled.div`
height: 2480px;
background: #FFCDDD;




`

const MainContent = styled.div`
padding-top: 5px;
text-align: center;

`
const Press = styled.button`

padding: 10px;
background-color: #8946A6;
  border: none;
  color: white;
  padding: 16px 32px;
  text-align: center;
  font-size: 16px;
  margin: 4px 2px;
  opacity: 0.6;
  transition: 0.3s;
  display: inline-block;
  text-decoration: none;
  cursor: pointer;
  border-radius: 5px;

  
&:hover {opacity: 1}

`

const UsersData = styled.div`
color: black;
display: grid;
grid-template-columns: 20% 20% 20% 20% 20%;
grid-gap: 5px;
padding: 10px;



`
const DataContainer = styled.div`
margin-left: 50px;









`
const DataName = styled.div`
margin-right: 50px;
margin-top: 20px ;
color: white;
text-shadow: 2px 2px 4px #000000;
background:  linear-gradient(to bottom, #ffccff 0%, #00ccff 99%);;
border-radius: 900px;
padding-top: 10px;
padding-bottom: 10px;
padding-right: 10px;
padding-left: 10px;
font-weight: 600;
font-family: cursive;

&:hover {
  box-shadow:  0 0 4px 4px rgba(0, 140, 186, 0.5);
}



`
const DataImg = styled.div`

padding-right: 300px;
padding-top: 100px;
padding-left: 30px ;




.gitimg{
    height: 150px;
    width: 150px;
    border-radius: 900px;
    border: 1px solid #ddd;
    
    
}

img:hover {
  box-shadow: 0 0 4px 4px rgba(0, 140, 186, 0.5);
}


`

const DataId = styled.div`

background: linear-gradient(to bottom, #ff33cc 0%, #ffffff 99%);
;
border-radius: 900px;
width: max-content;
padding-top:10px ;
padding-right: 20px;
padding-bottom: 10px;
padding-left: 20px;
margin-top: 10px;
margin-left: 55px;
color:white;
font-weight: 600;
text-shadow: 1px 1px 2px #000000;
font-family: cursive;
&:hover {
  box-shadow: 0 0 4px 4px rgb(238, 130, 238);
}
`
