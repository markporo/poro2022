import { useState } from 'react';
import { form } from '../styles/components/Follow.module.scss';



export default function EmailSignUpForm() {
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        city: ''
    });

    // FORM VALIDATION FUNCTION
    const validateForm = (formData) => {
        const errors = {};

        // Validate first name
        if (!formData.firstName.trim()) {
            errors.firstName = 'First name is required';
        }

        // Validate last name
        if (!formData.lastName.trim()) {
            errors.lastName = 'Last name is required';
        }

        // Validate email
        if (!formData.email.trim()) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Email is invalid';
        }

        // Validate city
        if (!formData.city.trim()) {
            errors.city = 'City is required';
        }

        return errors;
    };

    // HANDLE CHANGE PER INPUT DATA CHANGES
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // HANDLE SUBMISSION OF FORM
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Validate form data
        const validationErrors = validateForm(formData);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        // Clear previous errors
        setErrors({});

        try {
            const response = await fetch('https://script.google.com/macros/s/AKfycbxbWNyBUa_dQVtk6s6Yst37z4pk6Gqo8uufMMJRI2CLYYMDtCd4-HGd3jpJw3JV2g/exec', {
                method: 'POST',
                body: new URLSearchParams(formData),
            });

            if (response.ok) {
                console.log('formdata: ', formData);
                alert('You are in! You will be the first to know on new songs, shows, and fun info.');
                setFormData({ firstName: '', lastName: '', email: '', city: '' });
            } else {
                alert('Oops...Something went wrong. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Oops...There was an error submitting the data. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className={form}>
            <h2>Get My Music Updates!</h2>

            <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder='First Name'
                required
            />
            <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder='Last Name'
                value={formData.lastName}
                onChange={handleChange}
                required
            />
            <input
                type="email"
                id="email"
                name="email"
                placeholder='Email'
                value={formData.email}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                id="city"
                name="city"
                placeholder='City'
                value={formData.city}
                onChange={handleChange}
                required
            />

            <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit"}
            </button>
        </form>
    );
}
