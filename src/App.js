import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { Step1 } from './Step1'
//import './App.css';

const Step2 = () => <>Step 2</>
const Step3 = () => <>Step 3</>
const Result = () => <>Result</>

function App() {
	return (
		<>
			<Header />
			<BrowserRouter>
				<Routes>
					<Route exact path="/" element={<Step1/>} />
					<Route path="/step2" element={<Step2/>} />
					<Route path="/step3" element={<Step3/>} />
					<Route path="/result" element={<Result/>} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
