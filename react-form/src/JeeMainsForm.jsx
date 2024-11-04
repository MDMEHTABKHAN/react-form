import React, { useState } from 'react';

export default function JeeMainsForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [dob, setDob] = useState("");
    const [education, setEducation] = useState("");
    const [preferences, setPreferences] = useState([]);
    const [error, setError] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        setError("");

        if (!name || !email || !phone || !dob || !education || preferences.length === 0) {
            setError("Please fill out all required fields.");
            return;
        }

        // You can handle form submission logic here (e.g., send data to an API)
        console.log({
            name,
            email,
            phone,
            dob,
            education,
            preferences,
        });

        // Reset form
        setName("");
        setEmail("");
        setPhone("");
        setDob("");
        setEducation("");
        setPreferences([]);
    };

    const handlePreferenceChange = (event) => {
        const value = event.target.value;
        setPreferences(prev =>
            prev.includes(value) ? prev.filter(p => p !== value) : [...prev, value]
        );
    };

    return (
        <div className="form-container">
            <h2>JEE Mains Registration Form</h2>
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name <span className="required">*</span></label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Email <span className="required">*</span></label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Phone <span className="required">*</span></label>
                    <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Date of Birth <span className="required">*</span></label>
                    <input
                        type="date"
                        value={dob}
                        onChange={(e) => setDob(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Education Qualification <span className="required">*</span></label>
                    <select
                        value={education}
                        onChange={(e) => setEducation(e.target.value)}
                        required
                    >
                        <option value="">Select your qualification</option>
                        <option value="12th">12th</option>
                        <option value="Graduation">Graduation</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Exam Preferences <span className="required">*</span></label>
                    <div>
                        <label>
                            <input
                                type="checkbox"
                                value="Math"
                                checked={preferences.includes("Math")}
                                onChange={handlePreferenceChange}
                            />
                            Mathematics
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                value="Physics"
                                checked={preferences.includes("Physics")}
                                onChange={handlePreferenceChange}
                            />
                            Physics
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                value="Chemistry"
                                checked={preferences.includes("Chemistry")}
                                onChange={handlePreferenceChange}
                            />
                            Chemistry
                        </label>
                    </div>
                </div>

                <button type="submit" className="submit-button">Submit</button>
            </form>
        </div>
    );
}
