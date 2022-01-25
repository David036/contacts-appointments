import React from "react";

export default function Appointments({appointments,deleteAppointments}) {
  return (
    <div className="appointments">
      <div className="appointments-section">
        {appointments.map((el)=> {
          return (
            <div className="appointment-item">
          <div className="app-left">
            <h1>{el.appointmentsDate}</h1>
            <h2>{el.appointmentsTime}</h2>
          </div>
          <div className="app-right">
            <p>{el.appointmentsText}</p>
            <button onClick={() => deleteAppointments(el)} className="delete-button">Remove</button>
          </div>
        </div>
          )
        })}
      </div>
    </div>
  );
}
