import React, { useState } from "react";
import Header from "./Header";
import { Route, Routes } from 'react-router-dom';
import AppointmentsInputs from './AppointmentsInputs';
import ContactsInputs from './ContactsInputs';
import "./style.scss";
export default function Main() {
  
  const [contactName, setContactName] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contacts, setContacts] = useState([]);
  const [appointmentsText,setAppointmentsText] = useState('')
  const [appointmentsDate,setAppointmentsDate] = useState('')
  const [appointmentsTime,setAppointmentsTime] = useState('')
  const [appointments,setAppointments] = useState ([])
  const deleteContacts = (elem) => {
    setContacts(contacts.filter((el) => el !== elem));
  }
  const deleteAppointments = (elem) => {
    setAppointments(appointments.filter((el) => el !== elem))
  }
  const textFunction = (e) => {
    setAppointmentsText(e.target.value);
  };
  const dateFunction = (e) => {
    setAppointmentsDate(e.target.value);
  };
  const timeFunction = (e) => {
    setAppointmentsTime(e.target.value);
  };
  const contactsFunction = () => {
    if (contactName !== '' && contactPhone !== '' && contactEmail !== '') {
      setContacts([...contacts, {
        contactName: contactName,
        contactPhone: contactPhone,
        contactEmail: contactEmail,
      }]);
      setContactName('')
      setContactPhone('')
      setContactEmail('')
    }else {}
  };
  const appointmentsFunction = () => {
    if (appointmentsText !== '' && appointmentsDate !== '' && appointmentsTime !== '') {
      setAppointments([...appointments, {
        appointmentsText: appointmentsText,
        appointmentsDate: appointmentsDate,
        appointmentsTime: appointmentsTime,
      }]);
      setAppointmentsText('')
      setAppointmentsDate('')
      setAppointmentsTime('')
    }else {}
  };
  const nameFunction = (e) => {
    setContactName(e.target.value);
  };
  const phoneFunction = (e) => {
    setContactPhone(e.target.value);
  };
  const emailFunction = (e) => {
    setContactEmail(e.target.value);
  };
  return (

    <div className="main">
        <div className="main-section">
        <Header />
      <Routes>
        <Route path='/' element={ <ContactsInputs deleteContacts={deleteContacts} contactName={contactName} contactPhone={contactPhone} contactEmail={contactEmail} contacts={contacts} contactsFunction={contactsFunction} nameFunction={nameFunction} phoneFunction={phoneFunction} emailFunction={emailFunction} />} />
        <Route path='/appointments' element={<  AppointmentsInputs deleteAppointments={deleteAppointments} appointments={appointments} appointmentsTime={appointmentsTime} appointmentsDate={appointmentsDate} appointmentsText={appointmentsText} appointmentsFunction={appointmentsFunction} textFunction={textFunction} dateFunction={dateFunction} timeFunction={timeFunction} />} />
      </Routes>
        </div>    
    </div>
  );
}
