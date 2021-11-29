import React from 'react';
import { useForm } from 'react-hook-form';
import Typography from "@material-ui/core/Typography"
import { MainContainer } from './components/MainContainer';
import { Form } from './components/Form';
import Input from './components/Input';
import PrimaryButton from './components/PrimaryButton';

export const Step1 = () => {
	const {register, handleSubmit, errors} = useForm({
		mode: "onBlur", // Validation start when element is unfocused
	})

	const onSubmit = (data) => {
		console.log(data);
	}

	return (
		<MainContainer>
			<Typography component="h2" variant="h5">
				🌞 Step 1
			</Typography>
 			<Form onSubmit={handleSubmit(onSubmit)}>
				<Input
					{...register('firstName')}
					id="firstName"
					type="text"
					label="First Name"
					name="firstName"
				/>
				<Input
					{...register('lastName')}
					id="lastName"
					type="text"
					label="Last Name"
					name="lastName"
				/>
				<PrimaryButton>Next</PrimaryButton>
			</Form>
		</MainContainer>
	)
}