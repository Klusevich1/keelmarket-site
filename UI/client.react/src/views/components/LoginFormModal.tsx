import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext';
import Cross from '../../resources/images/cross.svg'
import '../../resources/css/LoginFormModal.css'
import { PhoneInput } from 'react-international-phone';
import axios from 'axios';

export const LoginFormModal = () => {
    const [inputFullName, setInputFullName] = useState<string>('');
    const [phoneNumber, setPhoneNumber] = useState(''); // Хранение номера телефона
    const [inputEmail, setInputEmail] = useState<string>('');
    const [inputCompany, setInputCompany] = useState<string>('');
    const [isSubmit, setIsSubmit] = useState<boolean>(false)
    const context = useContext(AppContext);
    const [errors, setErrors] = useState<{ fullName?: boolean; phone?: boolean; email?: boolean; company?: boolean }>({});

    // Валидация при отправке формы
    const validateForm = () => {
        const newErrors: { fullName?: boolean; phone?: boolean; email?: boolean; company?: boolean } = {};
        if (!inputFullName) newErrors.fullName = true;
        if (!phoneNumber) newErrors.phone = true;
        if (!inputEmail) newErrors.email = true;
        if (!inputCompany) newErrors.company = true;
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
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


    if (!context) {
        throw new Error('Card должен быть использован внутри AppContextProvider');
    }

    const {modalOpen, toggleModal} = context;

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
            console.error(error.message);
        }
    }

  return (
    <>
        <div className={`login-form-modal-container ${modalOpen ? 'active' : ''}`}>
            <div>
                <div style={{textAlign: 'right'}}>
                    <img src={Cross} style={{cursor: 'pointer'}} alt="Cross" onClick={toggleModal}/>
                </div>
                <h3>Get in touch with us</h3>
            </div>
            <form onSubmit={fetchData}>
                <div className='form-inputs'>
                    <div className="input-block">
                        <label htmlFor='inputLoginFullName'>Full Name</label>
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
                        <input type="text" placeholder='Email' className={`input-field ${errors.email ? 'input-error' : ''}`} disabled={isSubmit} id='inputLoginEmail' value={inputEmail} onChange={(e) => handleFieldChange('email', e.target.value)}/>
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
