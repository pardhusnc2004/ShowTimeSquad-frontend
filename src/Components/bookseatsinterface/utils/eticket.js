import { useEffect } from "react";
import Axios from 'axios'
import QRCode from 'qrcode.react';

const Ticket = ({ finaldata }) => {
    const show_id = localStorage.getItem('show_id')
    const {
        date,
        location,
        seats,
        showName,
        theater,
        time
      } = finaldata;
    useEffect(() => {
        Axios.put(`https://showtimesquad-backend.onrender.com/shows/updateshow/`+show_id, finaldata)
        .then((res) => {
            if (res.status === 200) alert("Booked Successfully");
            else Promise.reject();
        })
        .catch((err) => {
            alert(err);
        });
    }, [show_id])

    const generateRandomString = () => {
        return Math.random().toString(36).substring(7);
    };
    
    const qrContent = generateRandomString();

    return (
        <div>
            {console.log(finaldata)}
            <h2>Ticket Details</h2>
            <p>Show: {showName}</p>
            <p>Theater: {theater}</p>
            <p>Date: {date}</p>
            <p>Time: {time}</p>
            <p>Location: {location}</p>
            <p>Seats: {localStorage.getItem('selectedseatsnow')}</p>
            <div>
                <QRCode value={qrContent} />
            </div>
        </div>
    )
}
export default Ticket