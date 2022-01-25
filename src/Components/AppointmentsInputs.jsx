import React from 'react';
import Appointments from './Appointments'
export default function AppointmentsIinputs( {deleteAppointments, appointments,appointmentsFunction,textFunction,dateFunction,timeFunction,appointmentsTime,appointmentsText,appointmentsDate} ) {
  return <div className='appointments-inputs'>
    <div className="appointments-inputs-section">
      <input value={appointmentsText} onChange={(e) =>  {textFunction(e)}} placeholder='Text' type="text" name="" id="" />
      <input value={appointmentsDate} onChange={(e) =>  {dateFunction(e)}} type="date" name="" id="" />
      <input value={appointmentsTime} onChange={(e) =>  {timeFunction(e)}} type="time" name="" id="" />
      <button onClick={appointmentsFunction}>Add Appointment</button>
    </div>
      <Appointments deleteAppointments={deleteAppointments} appointments={appointments} />
  </div>;
}
