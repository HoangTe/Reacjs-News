import React, { useState } from 'react';

const Content = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        email: '',
        firstName: '',
        lastName: '',
        phone: ''
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Kiểm tra thông tin hợp lệ nếu cần
        setStep(step + 1);
    };

    return (
        <div className="col-md-8">
            <div className="form-container">
                <h1 className="logo mt-3">Logoipsum</h1>
                <div className="row justify-content-center mt-5">
                    <div className="col-12">
                        <div className="d-flex justify-content-between">
                            <div className={`step ${step === 1 ? 'active' : ''}`}>
                                <div className="step-number">1</div>
                                <div className="step-title">INFORMATION</div>
                                <div>Enter your details</div>
                            </div>
                            <div className={`step ${step === 2 ? 'active' : ''}`}>
                                <div className="step-number">2</div>
                                <div className="step-title">SHIPPING</div>
                                <div>Provide your address</div>
                            </div>
                            <div className={`step ${step === 3 ? 'active' : ''}`}>
                                <div className="step-number">3</div>
                                <div className="step-title">PAYMENT</div>
                                <div>Complete your purchase</div>
                            </div>
                        </div>
                        <div id='line'>
                            <div className="line_1" style={{ width: step === 1 ? '33.3333%' : step === 2 ? '66.6667%' : '100%' }}></div>
                            <div className="line_2" style={{ width: step === 2 ? '33.3333%' : step === 3 ? '33.3333%' : '0%' }}></div>
                            <div className="line_3" style={{ width: step === 3 ? '33.3333%' : '0%' }}></div>
                        </div>
                    </div>
                </div>
                <h5 className="title_2">Customer Information</h5>
                {step === 1 && (
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">Email *</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="you@example.com"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group name_1">
                            <div className="name_2">
                                <label htmlFor="firstName">First name *</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="name_2">
                                <label htmlFor="lastName">Last name *</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone (optional)</label>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">+1</span>
                                </div>
                                <input
                                    type="tel"
                                    className="form-control"
                                    id="phone"
                                    placeholder="8143008846"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="container mt-5 text-center">
                            <button type="submit" className="btn btn-custom">Proceed to Next Step</button>
                        </div>
                    </form>
                )}
                {step > 1 && step === 2 && (
                    <>
                        <h4>Next Step: Shipping Information</h4>
                        <div className="container mt-5 text-center">
                            <button type="submit" className="btn btn-custom" onClick={() => setStep(step + 1)}>
                                Proceed to Next Step
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default Content;