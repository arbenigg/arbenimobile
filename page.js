'use client';
import { useState } from 'react';

export default function Booking(){
  const [form,setForm]=useState({});

  const submit = async (e)=>{
    e.preventDefault();
    alert('Booking sent');
  }

  return (
    <div style={{padding:20}}>
      <h1>Booking</h1>
      <form onSubmit={submit}>
        <input placeholder="Name" onChange={e=>setForm({...form,name:e.target.value})}/><br/>
        <input placeholder="Phone" onChange={e=>setForm({...form,phone:e.target.value})}/><br/>
        <input placeholder="Device"/><br/>
        <button>Submit</button>
      </form>
    </div>
  )
}