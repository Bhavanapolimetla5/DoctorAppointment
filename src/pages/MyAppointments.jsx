import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const MyAppointments = () => {
  const { doctors } = useContext(AppContext); // Access doctors from context

  return (
    <div>
      <p className="pb-3 mt-12 font-medium text-zinc-700 border-b">My Appointments</p>
      <div>
        {doctors && doctors.length > 0 ? (
          doctors.slice(0, 3).map((item, index) => (
            <div  key={index} className="grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b">
              <div>
                <img  className="w-32 bg-indigo-50" src={item.image} alt="" />
                </div>
                <div className='flex-1 text-sm text-zinc-700'>
              <p className="text-netural-800 font-semibold ">Name: {item.name}</p>
              <p className="text-zinc-700 font-semibold">Speciality: {item.speciality}</p>
              <p className="text-zinc-700 font-medium mt-1">Experience: {item.experience}</p>
              <p className="text-zinc-700 font-medium mt-1">Address:</p>
              <p className='text-xs'>{item.address.line1}</p>
              <p className="text-xs">{item.address.line2}</p>
              <p className='text-sm-mt' ><span className='text-sm text-neutral-700 font-medium'>Date and Time:</span> 7 Feb 2025 | 01:00 PM</p>
          </div>
          <div></div>
          <div className='flex flex-col gap-2 justify-end'>
            <button className='text-sm text-stone-500 text-center sm:min-w-48 py-2 border rounded hover:bg-primary hover:text-white translation-all duration-300'>Pay online</button>
            <button className='text-sm text-stone-500 text-center sm:min-w-48 py-2 border rounded  hover:bg-red-400 hover:text-white translation-all duration-300'>
            Cancel Appointment
            </button>
            </div>
            </div>
          ))
        ) : (
          <p>No appointments found.</p>
        )}
      </div>
    </div>
  );
};

export default MyAppointments;
