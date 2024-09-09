import React, { useState } from 'react';
import './../../assets/css/FormInfo.css';

const Footer = () => {
    // Khai báo state cho form handling
    const [feedback, setFeedback] = useState('');
    const [name, setName] = useState('');
    const [selectedDate, setSelectedDate] = useState('');

    // Hàm xử lý khi người dùng thay đổi phản hồi
    const handleFeedbackChange = (event) => {
        setFeedback(event.target.value);
    };

    // Hàm xử lý khi người dùng thay đổi tên
    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    // Hàm xử lý khi người dùng thay đổi ngày
    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
    };

    // Hàm xử lý khi người dùng submit form
    const handleSubmit = (event) => {
        event.preventDefault();
        // Thực hiện xử lý dữ liệu (gửi lên server hoặc lưu vào state khác)
        console.log('Phản hồi:', feedback);
        console.log('Tên của bạn:', name);
        console.log('Ngày:', selectedDate);
    };

    return (
        <div className="survey-container">
            <div className="footer-container">
                <h6>How else can we improve?</h6>
                <input
                    type="text"
                    className="form-control input-field mb-3"
                    placeholder="Your feedback here..."
                    value={feedback}
                    onChange={handleFeedbackChange}
                />

                <div className="row mb-3">
                    <div className="col">
                        <h6>Your Name:</h6>
                        <input
                            type="text"
                            className="form-control input-field"
                            placeholder="Enter your name"
                            value={name}
                            onChange={handleNameChange}
                        />
                    </div>
                    <div className="col">
                        <h6>Date:</h6>
                        <input
                            type="date"
                            className="form-control input-field"
                            value={selectedDate}
                            onChange={handleDateChange}
                        />
                    </div>
                </div>
                <button class="btn btn-secondary" type="submit" onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    );
};

export default Footer;
