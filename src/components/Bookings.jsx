import React, { useEffect, useState } from 'react'

const Bookings = () => {

    const [bookingList, setBookingList] = useState([]);

    const fetchBookings = async () => {
        const res = await fetch('http://localhost:5000/order/getall');
        const data = await res.json();
        console.log(data);
        setBookingList(data);
    }

    useEffect(() => {
        fetchBookings();
    }, []);

    const displayBookings = () => {
        return bookingList.map(booking => (
            <div className='card mb-4'>
                <div className='row'>

                    <div className='col-md-3'>
                        <img src={booking.restroImage} className='w-100' />
                    </div>
                    <div className='col-md-9'>
                        <div className='card-body'>
                            <h2>{booking.restroName}</h2>
                            <p>For {booking.persons} Persons</p>
                        </div>
                    </div>
                </div>
            </div>
        ))
    }


    return (
        <div>
            <div className='container'>
                {displayBookings()}
            </div>
        </div>
    )
}

export default Bookings