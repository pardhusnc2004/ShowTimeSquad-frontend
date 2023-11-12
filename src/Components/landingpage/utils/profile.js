// userProfile.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios, { Axios } from 'axios';
import './style.css';
const UserProfile = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    mobile: '',
    dob: '',
    password: '', 
  });
  const [editMode, setEditMode] = useState(false);
  const [viewProfile, setViewProfile] = useState(true);
  const [viewBookedSeats, setViewBookedSeats] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`https://showtimesquad-backend.onrender.com/users/profile/${id}`);
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [id]);

  const handleInputChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleEditClick = () => {
    setEditMode(true);
    setViewProfile(false);
    setViewBookedSeats(false);
  };

  const handleCancelEdit = () => {
    setEditMode(false);
    setViewProfile(true);
    setViewBookedSeats(false);
  };

  const handleSaveChanges = async () => {
    try {
      console.log(userData);
      const data={name:userData.name,email:userData.email,password:userData.password,mobile:userData.mobile,dob:userData.dob};
      axios.put(`https://showtimesquad-backend.onrender.com/users/profile/${id}`,data).then((res)=>{
        if(res.status===200){
            alert("Profile Updated Succesfully");
        }
      }).catch((err)=>{alert(err)});
      setEditMode(false);
      setViewProfile(true);
      setViewBookedSeats(false);
    } catch (error) {
      console.error('Error updating user data:', error);
    }
  };

  const handleViewProfile = () => {
    setViewProfile(true);
    setViewBookedSeats(false);
    setEditMode(false);
  };

  const handleViewBookedSeats = () => {
    setViewProfile(false);
    setViewBookedSeats(true);
    setEditMode(false);
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col">
                <button
                  type="button"
                  className={`btn btn-secondary w-100 ${viewProfile ? 'active' : ''}`}
                  onClick={handleViewProfile}
                >
                  View Profile
                </button>
              </div>
              <div className="col">
                <button
                  type="button"
                  className={`btn btn-secondary w-100 ${viewBookedSeats ? 'active' : ''}`}
                  onClick={handleViewBookedSeats}
                >
                  View Booked Seats
                </button>
              </div>
              <div className="col">
                <button type="button" className={`btn btn-secondary w-100 ${editMode ? 'active' : ''}`} onClick={handleEditClick}>
                  Edit Profile
                </button>
              </div>
            </div>
            {viewProfile && (
              <div>
                <h2 className="text-center">{userData.name}'s Profile</h2>
                <p>Email: {userData.email}</p>
                <p>Mobile: {userData.mobile}</p>
                <p>Date of Birth: {userData.dob}</p>
              </div>
            )}
            {viewBookedSeats && (
              <div>
                {/* Add logic for viewing booked seats */}
                <h2 className="text-center">Booked Seats</h2>
                <p>Booked seats will be displayed here.</p>
              </div>
            )}
            {editMode && (
              <div>
                <h2 className="text-center">Edit Profile</h2>
                <form>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      value={userData.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={userData.email}
                      disabled
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="mobile" className="form-label">
                      Mobile
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      id="mobile"
                      name="mobile"
                      value={userData.mobile}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="dob" className="form-label">
                      Date of Birth
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="dob"
                      name="dob"
                      value={userData.dob}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                      value={userData.password}
                      onChange={handleInputChange}
                      disabled
                    />
                  </div>
                  <div className="d-flex justify-content-center mt-3">
                    <button type="button" className="btn btn-secondary me-2" onClick={handleCancelEdit}>
                      Cancel
                    </button>
                    <button type="button" className="btn btn-primary" onClick={handleSaveChanges}>
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
