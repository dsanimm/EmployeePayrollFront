import React, { Component } from "react";
import './payroll-form.scss';
import logo from "../../assets/images/logo.png"
import profilePic1 from "../../assets/profile-images/Ellipse -3.png";
import profilePic2 from "../../assets/profile-images/Ellipse 1.png";
import profilePic3 from "../../assets/profile-images/Ellipse -8.png";
import profilePic4 from "../../assets/profile-images/Ellipse -7.png";
class Employee extends React.Component {
    constructor() {
        super()
        this.state = {
            name: ''
        }
    }

    save = () => {

    }

    reset = () => { }

    render() {
        return (
            <>
                <header className="header-content header">
                    <div className="logo-content">
                        <img src={logo} alt=""></img>
                        <div>
                            <span className="emp-text">EMPLOYEE</span><br></br>
                            <span className="emp-text">PAYROLL</span>
                        </div>
                    </div>
                </header>
                <div className="form-content">
                    <form className="form" action="#" onClick={this.save}>
                        <div className="form-head">Employee Payroll Form
                    </div>
                        {/* name */}
                        <div className="row-content">
                            <label className="label text" htmlFor="name">Name</label>
                            <input className="input" type="text" id="name" name="name" placeholder="Your name..." required>
                            </input>
                            <error-output className="text-error" htmlFor="text">
                            </error-output>
                        </div>
                        {/* Profile Picture */}
                        <div className="row-content">
                            <label className="label text" htmlFor="profile">Profile image</label>
                            <div className="profile-radio-content">
                                <label>
                                    <input type="radio" id="profile1" name="profile" value="../assets/profile-images/Ellipse -3.png"
                                        required></input>
                                    <img className="profile" id='image1' src={profilePic1}></img>
                                </label>
                                <label>
                                    <input type="radio" id="profile2" name="profile" value="../assets/profile-images/Ellipse 1.png"
                                        required></input>
                                    <img className="profile" id='image1' src={profilePic2}></img>
                                </label>
                                <label>
                                    <input type="radio" id="profile3" name="profile" value="../assets/profile-images/Ellipse -8.png"
                                        required></input>
                                    <img className="profile" id='image1' src={profilePic3}></img>
                                </label>
                                <label>
                                    <input type="radio" id="profile4" name="profile" value="../assets/profile-images/Ellipse -7.png"
                                        required></input>
                                    <img className="profile" id='image1' src={profilePic4}></img>
                                </label>
                            </div>
                        </div>
                        {/* Gender */}
                        <div className="row-content">
                            <label className="label text" htmlFor="gender">Gender</label>
                            <div>
                                <input type="radio" id="male" name="gender" value="M" required></input>
                                <label className="text" htmlFor="male">Male</label>
                                <input type="radio" id="female" name="gender" value="F" required></input>
                                <label className="text" htmlFor="female">Female</label>
                            </div>
                        </div>
                        {/* Department */}
                        <div className="row-content">
                            <label className="label text" htmlFor="department">Department</label>
                            <div>
                                <input className="checkbox" type="checkbox" id="hr" name="department" value="HR"></input>
                                <label className="text" htmlFor="hr">HR</label>
                                <input className="checkbox" type="checkbox" id="sales" name="department" value="Sales"></input>
                                <label className="text" htmlFor="sales">Sales</label>
                                <input className="checkbox" type="checkbox" id="finance" name="department" value="Finance"></input>
                                <label className="text" htmlFor="finance">Finance</label>
                                <input className="checkbox" type="checkbox" id="engineer" name="department" value="Engineer"></input>
                                <label className="text" htmlFor="engineer">Engineer</label>
                                <input className="checkbox" type="checkbox" id="others" name="department" value="Others"></input>
                                <label className="text" htmlFor="others">Others</label>
                            </div>
                        </div>
                        {/* Salary */}
                        <div className="row-content">
                            <label className="label text" htmlFor="salary">Choose your salary</label>
                            <input className="input slider" type="range" name="salary" id="salary" min="300000" max="500000" step="100"
                                value="400000"></input>
                            <output className="salary-output text" htmlFor="salary">400000</output>
                        </div>
                        {/* Start Date */}
                        <div className="row-content">
                            <label className="label text" htmlFor="startDate">Start Date</label>
                            <input className="input text date" type="date" id="startDate" name="startDate" required></input>
                            <error-output className="date-error" htmlFor="startDate"></error-output>
                        </div>
                        {/* Notes */}
                        <div className="row-content">
                            <label className="label text" htmlFor="notes">Notes</label>
                            <textarea className="input note" id="notes" name="Notes" placeholder=""
                            ></textarea>
                        </div>
                        {/* Buttons */}
                        <div className="buttonParent">
                            <a href="./home.html" className="resetButton button cancelButton" id="cancelButton">Cancel</a>
                            <div className="submit-reset">
                                <button type="submit" className="button submitButton" id="submitButton">Submit</button>
                                <button type="reset" className="resetButton button" onClick={this.reset}>Reset</button>
                            </div>
                        </div>
                    </form>
                </div>
            </>
        );
    }
}
export default Employee; 