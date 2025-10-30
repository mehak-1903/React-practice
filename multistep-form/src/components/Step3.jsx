import React, { useState } from 'react';

function mockServerValidation(email) {
    return new Promise((resolve) => {
        setTimeout(() => {
            if (email === 'test@example.com') {
                resolve({ success: false, message: 'Email already exist.' });
            } else {
                resolve({ success: true })
            }
        }, 2000);
    })
}

function Step3({ formData, prevStep }) {
    const [loading, setLoading] = useState(false);
    const [serverMsg, setServerMsg] = useState("");

    const handleSubmit = async () => {
        setLoading(true);
        setServerMsg("");

        const result = await mockServerValidation(formData.email);
        setLoading(false);

        if (!result.success) {
            setServerMsg(result.message);
        } else {
            setServerMsg("Registeration succcessful!!!!");
        }
    }
    return (
        <div>
            <h2>Step3: Review and Submit.</h2>
            <p><strong>Name: </strong>{formData.name}</p>
            <p><strong>Email: </strong>{formData.email}</p>
            <p><strong>Password: </strong>{formData.password}</p>
            {loading && <p style={{ color: 'orange' }}>Checking with server....</p>}
            {serverMsg && <p style={{color: 'green'}}>{serverMsg}</p>}
            <button onClick={prevStep}>Back</button><br /><br />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Step3