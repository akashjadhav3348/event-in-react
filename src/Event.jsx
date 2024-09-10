import React from 'react'

const Event = () => {
    function showAlert(){
        alert("my Name is Akash")
    }
    function showCity() {
        alert("My City is Nashik")        
    }
    function handleChange(event) {
        console.log(event.target.value)
        
    }
    function changeBackGround(){
        document.body.style.backgroundColor="yellow"
    }
  return (
    <>
    <h3>Event</h3>
    <div>
        <button></button>
        </div>
    </>
  )
}

export default Event