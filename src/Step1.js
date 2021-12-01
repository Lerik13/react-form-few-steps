import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as yup from "yup";
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import Typography from "@material-ui/core/Typography"
import { MainContainer } from './components/MainContainer';
import { Form } from './components/Form';
import Input from './components/Input';
import PrimaryButton from './components/PrimaryButton';
import { useData } from './DataContext';

const schema = yup.object().shape({
	firstName: yup
		.string()
		.matches(/^([^0-9]*)$/, "First name should not contain numbers")
		.required("First name is a required field")
		.min(3, "First name should contain at least 3 letters")
		.max(10, "First name should not contain more than 10 letters"),
	lastName: yup
		.string()
		.matches(/^([^0-9]*)$/, "Last name should not contain numbers")
		.required("Last name is a required field"),
});

export const Step1 = () => {
	
	const navigate = useNavigate();
	const {data, setValues} = useData()

	const { register, handleSubmit, formState: { errors } } = useForm({
		defaultValues: { firstName: data.firstName, lastName: data.lastName },
		mode: "onBlur", // Validation start when element is unfocused
		resolver: yupResolver(schema)
	});

	const onSubmit = (data) => {
		navigate("/step2")
		setValues(data)
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
					error={!!errors.firstName}
					helperText={errors?.firstName?.message}
				/>
				<Input
					{...register('lastName')}
					id="lastName"
					type="text"
					label="Last Name"
					name="lastName"
					error={!!errors.lastName}
					helperText={errors?.lastName?.message}
				/>
				<PrimaryButton>Next</PrimaryButton>
			</Form>
		</MainContainer>
	)
}