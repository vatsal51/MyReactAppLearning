import React from 'react'
import Person from './Person'

function NameList() {
    const names = ['Bruce', 'clark','diana']
    const persons=[
        {
            id:1,
            name:"vatsal",
            skill:"React"
        },
        {
            id:2,
            name:"Rushabh",
            skill:"React"
        },
        {
            id:3,
            name:"Anish",
            skill:"React"
        }
    ]
const nameList=names.map((name,index) => <h5 key={index}>{index} {name}</h5>)
const personList = persons.map(person => (
<Person key={person.id} person={person} />
    ))
    return (
        <div>
        
   {personList}
        {nameList}
   
        </div>
    )}  


export default NameList
