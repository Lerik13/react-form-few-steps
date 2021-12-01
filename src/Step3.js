import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { Form } from './components/Form';
import { MainContainer } from './components/MainContainer';
import FileInput from './components/FileInput';
import PrimaryButton from './components/PrimaryButton';

export const Step3 =() => {
	const navigate = useNavigate();

	const {control, handleSubmit } = useForm()

	const onSubmit = (data) => {
		navigate("/result")
	}

	return <MainContainer>
		<Typography component="h2" variant="h5">
			Step 3
		</Typography>
		<Form onSubmit={(handleSubmit(onSubmit))}>
			<FileInput name="files" control={control} />
			<PrimaryButton>Next</PrimaryButton>
		</Form>
	</MainContainer>
}