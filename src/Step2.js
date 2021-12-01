import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { MainContainer } from './components/MainContainer';
//import Typography from "@material-ui/core/Typography"
import { Form } from './components/Form';
import Input from './components/Input';
import PrimaryButton from './components/PrimaryButton';
//import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Typography, FormControlLabel, Checkbox } from '@material-ui/core';
import parsePhoneNumberFromString from 'libphonenumber-js';
import { useData } from './DataContext';

const schema = yup.object().shape({
	email: yup
		.string()
		.email("Email should have correct format")
		.required("Email is a required field")
})

const normalizePhoneNumber = (value) => {
	const phoneNumber = parsePhoneNumberFromString(value)
	if (!phoneNumber) {
		return value
	}

	return (
		phoneNumber.formatInternational()
	)
}

export const Step2 = () => {
	const navigate = useNavigate();
	const { data, setValues } = useData()

	const { register, handleSubmit, formState: { errors }, watch } = useForm({
		defaultValues: { email: data.email, hasPhone: data.hasPhone, phoneNumber: data.phoneNumber },
		mode: "onBlur",
		resolver: yupResolver(schema)
	});

	const hasPhone = watch("hasPhone")

	const onSubmit = (data) => {
		setValues(data)
		navigate("/step3")
	}

	return (
		<MainContainer>
			<Typography component="h2" variant="h5">
				📬 Step 2
			</Typography>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<Input
					{...register('email')}
					id="email"
					type="email"
					label="Email"
					name="email"
					required
					error={!!errors.email}
					helperText={errors?.email?.message}
				/>

				<FormControlLabel
					control={
						<Checkbox defaultChecked={data.hasPhone} name="hasPhone" {...register('hasPhone')} color="primary" />
					}
					label="Do you have a phone"
				/>

				{
					hasPhone && (
						<Input
							{...register('phoneNumber')}
							id="phoneNumber"
							type="tel"
							label="Phone number"
							name="phoneNumber"
							onChange={(event) => {
								event.target.value = normalizePhoneNumber(event.target.value)
							}}
						/>
					)
				}

				<PrimaryButton>Next</PrimaryButton>
			</Form>
		</MainContainer>
	);
};

