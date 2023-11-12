import { useEffect } from "react";
import Axios from 'axios'

const Ticket = ({ finaldata }) => {
    const show_id = localStorage.getItem('show_id')
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
    return (
        <div>
            this is Ticket component
        </div>
    )
}
export default Ticket