import React, { useState } from 'react'
import '../../resources/css/LoginForm.css'
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import axios from 'axios';


export const LoginForm = () => {
    const [inputFullName, setInputFullName] = useState<string>('');
    const [phoneNumber, setPhoneNumber] = useState<string>(''); // Хранение номера телефона
    const [inputEmail, setInputEmail] = useState<string>('');
    const [inputCompany, setInputCompany] = useState<string>('');
    const [isSubmit, setIsSubmit] = useState<boolean>(false)
    const [errors, setErrors] = useState<{ fullName: boolean; phone: boolean; email: boolean; company: boolean }>({
        fullName: false,
        phone: false,
        email: false,
        company: false
    });

    const validateForm = () => {
        const newErrors = {
            fullName: inputFullName === '',
            phone: phoneNumber === '',
            email: inputEmail === '',
            company: inputCompany === ''
        };
        setErrors(newErrors);
        return !Object.values(newErrors).some(error => error);
    };

    const handleFieldChange = (field: string, value: string) => {
        switch (field) {
            case 'fullName':
                setInputFullName(value);
                setErrors(prev => ({ ...prev, fullName: value === '' }));
                break;
            case 'phone':
                setPhoneNumber(value);
                setErrors(prev => ({ ...prev, phone: value === '' }));
                break;
            case 'email':
                setInputEmail(value);
                setErrors(prev => ({ ...prev, email: value === '' }));
                break;
            case 'company':
                setInputCompany(value);
                setErrors(prev => ({ ...prev, company: value === '' }));
                break;
            default:
                break;
        }
    };


    const fetchData = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!validateForm()) {
            return; // Останавливаем отправку, если есть ошибки
        }
        try {
            setIsSubmit(true)
            const formData = new FormData();
            formData.append('name', inputFullName);
            formData.append('phone', phoneNumber);
            formData.append('email', inputEmail);
            formData.append('company', inputCompany);
            await axios.post(process.env.REACT_APP_SERVER_URL + '/api/sendmail', formData, {
                headers: {
                  'Content-Type': 'application/json'
                }
            })
            window.location.reload();
            window.scrollTo(0, 0);
        } catch (error: any) {
            if (error.response) {
                console.error('Server responded with an error:', error.response.status, error.response.data);
            } else if (error.request) {
                console.error('No response received:', error.request);
            } else {
                console.error('Error setting up the request:', error.message);
            }
        }
    }

  return (
    <>
        <div className='login-modal-container'>
            <h3>Get in touch with us</h3>
            <form onSubmit={fetchData}>
                <div className='form-inputs'>
                    <div className="input-block">
                        <label htmlFor='inputLoginFullName'>Full name</label>
                        <input type="text" placeholder='Full name' className={`input-field ${errors.fullName ? 'input-error' : ''}`} disabled={isSubmit} id='inputLoginFullName' value={inputFullName} onChange={(e) => handleFieldChange('fullName', e.target.value)}/>
                    </div>
                    <div className="input-block">
                        <label htmlFor='inputLoginPhone'>Phone</label>
                        <PhoneInput
                            defaultCountry="gb"
                            value={phoneNumber}
                            onChange={(phoneNumber) => handleFieldChange('phone', phoneNumber)}
                            style={{height: '45px'}}
                            className={`${errors.phone ? 'phone-input-error' : ''}`} 
                            disabled={isSubmit}
                        />
                    </div>
                    <div className="input-block">
                        <label htmlFor='inputLoginEmail'>Email</label>
                        <input type="text" placeholder='Email' className={`input-field ${errors.email ? 'input-error' : ''}`} disabled={isSubmit}  id='inputLoginEmail' value={inputEmail} onChange={(e) => handleFieldChange('email', e.target.value)}/>
                    </div>
                    <div className="input-block">
                        <label htmlFor='inputLoginCompanyName'>Your company name</label>
                        <input type="text" placeholder='Company name' className={`input-field ${errors.company ? 'input-error' : ''}`} disabled={isSubmit}  id='inputLoginCompanyName' value={inputCompany} onChange={(e) => handleFieldChange('company', e.target.value)}/>
                    </div>
                </div>
                <button type='submit' className={`submit-btn ${isSubmit && 'disabled'}`} disabled={isSubmit}>Submit now</button>
            </form>
        </div>
        
    </>
  )
}
