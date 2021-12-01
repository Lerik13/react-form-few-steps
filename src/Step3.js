import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { Form } from './components/Form';
import { MainContainer } from './components/MainContainer';
import FileInput from './components/FileInput';
import PrimaryButton from './components/PrimaryButton';
import { useData } from './DataContext';

export const Step3 =() => {
	const navigate = useNavigate();
	const { data, setValues } = useData()
	const { control, handleSubmit } = useForm({
		defaultValues: { files: data.files }
	})

	const onSubmit = (data) => {
		setValues(data)
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