import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
	const formId = 'uXltXpou';
	const formSparkUrl = `https://submit-form.com/${formId}`;

	const initialState = {
		name: '',
		email: '',
		subject: '',
		message: '',
	};
	const [formState, setFormState] = useState(initialState);
	const [submitting, setSubmitting] = useState(false);
	const [message, setMessage] = useState();

	const submitForm = async (event) => {
		event.preventDefault();
		setSubmitting(true);
		await postSubmission();
		setSubmitting(false);
	};

	const postSubmission = async () => {
		const payload = { ...formState };
		try {
			await axios.post(formSparkUrl, payload);
			setMessage({
				class: 'alert-success',
				text: 'Thank you! Our team will get in touch soon.',
			});
			setFormState(initialState);
		} catch (e) {
			console.log({ Error: e });
			setMessage({
				class: 'alert-danger',
				text: 'Sorry, Something went wrong, Please try again.',
			});
		}
	};

	const updateFormControl = async (event) => {
		const { id, value } = event.target;
		const formKey = id;
		const updatedFormState = { ...formState };
		updatedFormState[formKey] = value;
		setFormState(updatedFormState);
	};
	return (
		<section className='contact-us container'>
			{/* <!-- Send Message/Email --> */}
			<form className='send-message' id='send-message' onSubmit={submitForm}>
                
				{message && (
					<div className={`alert alert-dismissible fade show ${message.class}`} role='alert'>
						{message.text}
					
					</div>
				)}
				<div className='message'>
					<h3>Get Free Consultation</h3>
					<div className='mb-3 text'>
						<input type='text' value={formState.name} onChange={updateFormControl} className='form-control' id='name' placeholder='Your Full Name' required />
					</div>
					<div className='mb-3 email'>
						<input type='email' onChange={updateFormControl} className='form-control' value={formState.email} id='email' placeholder='Your Email' required />
					</div>
					<div className='mb-3 subject'>
						<input type='text' onChange={updateFormControl} className='form-control' id='subject' value={formState.subject} placeholder='Your Subject' required />
					</div>
					<div className='mb-3 textarea'>
						<textarea onChange={updateFormControl} className='form-control' id='message' rows='5' value={formState.message} placeholder='Message' required></textarea>
					</div>
					<input type='submit' disabled={submitting} className='btn btn-light' value={submitting ? 'SENDING MESSAGE' : 'SUBMIT'} />
				</div>
			</form>

			{/* More Infos */}
			<div className='more-infos'>
				<div>
					<h3>Our Location </h3>
					<p>Sitra, Flat 11, Bldg 4305, Road 474, Blk 604, Bahrain</p>
				</div>
				<div>
					<h3>Email </h3>
					<p>sysmarkbahrain@gmail.com</p>
				</div>
				<div>
					<h3>Phone </h3>
					<p>+973 33332940</p>
				</div>
				<div>
					<h3>Office Hours </h3>
					<p>
						Sun to Thrus - 8:00am - 2pm
						<br />
						Fri to Sat - 10am - 2pm
					</p>
				</div>
			</div>
		</section>
	);
};

export default Contact;
