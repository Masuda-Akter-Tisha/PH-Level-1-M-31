import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import ToDo from './Todo.jsx';
import Amol from './Amol.jsx'

function App() {
  const [count, setCount] = useState(0)

  const time = 50;

  return (
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
            {/* <Pet></Pet>
          <Person></Person>
          <Sports></Sports>
          <Person></Person>
          <Person></Person>
          <Sports></Sports>
          <React></React> */}

          {/* <Student name = 'Hablu' dep = 'Science'></Student>
          <Student name = 'Kablu' dep = 'Biology'></Student>
          <Student name = 'Lablu' dep = 'CSE'></Student>
          <Person></Person>
          <Developer name = 'Jodu' tech = 'Js'></Developer>
          <Developer name = 'Modu' tech = 'React'></Developer>
          <Developer name = 'Kodu' tech = 'Java'></Developer>

          <Player name = 'Mushi' run = '5000'></Player>
          <Player name = 'Jharo' run = '5000'></Player>
          <Player name = 'Maro' run = '5000'></Player>

          <Salami salami = 'Roja Eid' tk = {20}></Salami>
          <Salami salami = 'Graduation'></Salami> */}

          <ToDo
           task = 'Learn React' 
           isDone = {true} 
           time = {time}></ToDo>
          <ToDo 
          task = 'Revise JS' 
          isDone = {false}></ToDo>
          <ToDo 
          task = 'Take a shower' 
          isDone = {true} 
          time = {50}></ToDo>

          {/* <Amol
           amol = 'Sura-Yeasin' 
           isDone = {true}></Amol>

          <Amol 
          amol = 'Quran Khotom' 
          isDone = {false}></Amol>

          <Amol 
          amol = 'Start Namaz' 
          isDone = {true}></Amol>
           */}
        </div>
      </section>
  )
}
function Person () {
  const name = 'hablu';
  const age = 23;
  const personStyle = {
    fontSize: '30px',
    fontStyle: 'italic'
  }
  return (
    <p style={personStyle}>Iam a person : {name} {age}</p>
  )
}

function Pet () {
  return (
    <h3>Cat</h3>
  )
}

function Sports () {
  return (
    <div>
      <h3>cricket</h3>
      <ul>
        <li>banana</li>
        <li>orange</li>
      </ul>
      <p>Playing and losing</p>
    </div>
  )
}

function React () {
  return (
    <>
     <h2>What is React</h2>
    <ol>
      <li>React is a Java Script UI Library</li>
      <li>React is used for build UI(user interface)</li>
    </ol>
    </>
   
  )
}
function Student (props) {
  console.log(props);
  
  return (
    <div className='student'>
      <p>Name: {props.name}</p>
      <p>Dep: {props.dep}</p>
    </div>
  )
}

function Developer (props) {
  console.log(props);
  
  return (
    <div style={{
      color: 'white',
      border: '2px solid salmon',
      borderRadius: '10px',
      padding: '10px',
      marginTop: '10px'
    }}>
      <h3>Developer: {props.name}</h3>
      <p>Technology: {props.tech}</p>
    </div>
  )
}


// const {name, run} = {name : 'Mushi', run : '5000'}

// by destructuring
function Player ({name, run}) {
  return (
    <div className='student'>
      <h3>Player: {name}</h3>
      <p>Run: {run}</p>
    </div>
  )
}
function Salami ({salami, tk = 0}) {
  return (
    <div className='salamiStyle'>
      <h3>Salami for: {salami}</h3>
      <h4>TK: {tk}</h4>
    </div>
  )
}

export default App
