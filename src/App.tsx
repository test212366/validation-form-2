import { useForm } from 'react-hook-form';
import './App.css';

function App() {
	const {
		register,
		formState: {
			errors,
			isValid,
		},
		reset,
		handleSubmit
	} = useForm({ mode: 'onBlur' })

	const onSubmit = (data: any) => {
		alert(JSON.stringify(data))
		reset()
	}

	return (
		<div className="App">
			<form onSubmit={handleSubmit(onSubmit)}>
				<div>{errors?.name && <p>{errors?.name?.message || 'error'}</p>}</div>
				<label >
					name
					<input type="text" {...register('name', {
						required: 'required input',
						minLength: {
							value: 5,
							message: 'Имя должно быть больше 5 символов'
						},
						maxLength: {
							value: 10,
							message: 'Имя должно быть не более 10 символов'
						}
					})} />
				</label>

				<input type="submit" disabled={!isValid} />
			</form>
		</div>
	);
}

export default App;
