import React, { useEffect, useState } from "react";
import Axios from "axios";
import '../utils/styles.css'

const DateCityTheaterTime = ({ onSelectionChange, proceed, dontproceed, moviename="" }) => {
  
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedTheater, setSelectedTheater] = useState("");
  const [selectedDates, setSelectedDates] = useState([]);
  const [selectedTime, setSelectedTime] = useState("");
  const [locations, setLocations] = useState([]);
  const [theatres, setTheatres] = useState([]);
  const [dates, setDates] = useState([]);
  const [currentStep, setCurrentStep] = useState(1);
  const timeSlots = ["11:15 AM", "2:30 PM", "5:30 PM", "11:00 PM"];

  useEffect(() => {
    dontproceed();
    const today = new Date();
    today.setHours(6, 0, 0, 0);

    const options = [];
    const getcolor=()=>{
      if(localStorage.getItem("darkmode")==="yes"){
        return "text-light"
      }
      return "text-dark"
    }
    for (let i = 0; i < 4; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      const formattedDate = date.toISOString().split("T")[0];
      options.push({ date, formattedDate });
    }
    setDates(options);
    Axios.post("https://showtimesquad-backend.onrender.com/theatres/get-cities/",{movie:moviename})
      .then((res) => {
        if (res.status === 200) {
          setLocations(res.data);
          setSelectedCity("");
        } else {
          Promise.reject();
        }
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  const getTheatres = (selectedCity) => {
    Axios.post(
      `https://showtimesquad-backend.onrender.com/theatres/get-theaters/`,{city:selectedCity,movie:moviename}
    )
      .then((res) => {
        if (res.status === 200) {
          setTheatres(res.data);
          setSelectedTheater("");
          setCurrentStep(2);
        } else {
          Promise.reject();
        }
      })
      .catch((err) => {
        alert(err);
      });
  };

  const handleCitySelect = (selectedCity) => {
    setSelectedCity(selectedCity);
    getTheatres(selectedCity);
    onSelectionChange({ city: selectedCity });
  };

  const handleTheaterSelect = (selectedTheater) => {
    setSelectedTheater(selectedTheater);
    setCurrentStep(3);
    onSelectionChange({ theaterName: selectedTheater });
  };

  const handleDateSelect = (selectedDate) => {
    setSelectedDates([selectedDate]);
    setCurrentStep(4);
    onSelectionChange({ showDate: selectedDate });
  };

  const handleTimeSelect = (selectedTime) => {
    setSelectedTime(selectedTime);
    onSelectionChange({ time: selectedTime });
    proceed();
  };

  return (
    <div>
      {console.log("moviename",moviename)}
      <div className="card-container d-flex">
        <p className={`d-flex align-items-center mb-0 fs-4`}>Location </p>
        {locations.map((location, index) => (
          <div
            key={index}
            style={{
              display: currentStep >= 1 ? "block" : "none",
              backgroundColor: selectedCity === location ? "#dc3545" : "#f8f9fa",
              border: selectedCity === location ? "1px solid #dc3545" : "1px solid #dee2e6",
              color: selectedCity === location ? "#ffffff" : "#495057",
            }}
            className="btn cardsh d-flex align-items-center justify-content-center"
            onClick={() => handleCitySelect(location)}
          >
            {location}
          </div>
        ))}
      </div>
      <div className="card-container d-flex">
        <p className={`d-flex align-items-center mb-0 fs-4`}>Theater</p>
        {theatres.map((theater, index) => (
          <div
            key={index}
            style={{
              display: currentStep >= 2 ? "block" : "none",
              backgroundColor: selectedTheater === theater.name ? "#dc3545" : "#f8f9fa",
              border: selectedTheater === theater.name ? "1px solid #dc3545" : "1px solid #dee2e6",
              color: selectedTheater === theater.name ? "#ffffff" : "#495057",
            }}
            className={`btn cardsh ${(currentStep >= 3) ? "d-flex align-items-center justify-content-center" : ""}`}
            onClick={() => handleTheaterSelect(theater.name)}
          >
            {theater.name}
          </div>
        ))}
      </div>
      <div className="card-container d-flex">
        <p className={`d-flex align-items-center mb-0 fs-4`}>Date</p>
        {dates.map((dateObj, index) => (
          <div
            key={index}
            style={{
              display: currentStep >= 3 ? "block" : "none",
              backgroundColor: selectedDates.includes(dateObj.date) ? "#dc3545" : "#f8f9fa",
              border: selectedDates.includes(dateObj.date) ? "1px solid #dc3545" : "1px solid #dee2e6",
              color: selectedDates.includes(dateObj.date) ? "#ffffff" : "#495057",
            }}
            className={`btn cardsh ${(currentStep >= 3) ? "d-flex align-items-center justify-content-center" : ""}`}
            onClick={() => handleDateSelect(dateObj.date)}
          >
            {dateObj.formattedDate}
          </div>
        ))}
      </div>
      <div className="card-container d-flex">
        <p className={`d-flex align-items-center mb-0 fs-4`}>Slot</p>
        {timeSlots.map((timeSlot, index) => (
          <div
            key={index}
            style={{
              display: currentStep >= 4 ? "block" : "none",
              backgroundColor: selectedTime === timeSlot ? "#dc3545" : "#f8f9fa",
              border: selectedTime === timeSlot ? "1px solid #dc3545" : "1px solid #dee2e6",
              color: selectedTime === timeSlot ? "#ffffff" : "#495057",
            }}
            className={`btn cardsh ${(currentStep >= 4) ? "d-flex align-items-center justify-content-center" : ""}`}
            onClick={() => handleTimeSelect(timeSlot)}
          >
            {timeSlot}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DateCityTheaterTime;
