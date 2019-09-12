import React, { useState } from 'react';
import Axios from 'axios';

import './schedule-creator.scss';

const ScheduleCreator = props => {
	//captures business_id
	let business_id = localStorage.business_id;

	const [scheduleState, setScheduleState] = useState([
		{
			sundayopen: '',
			sundayclose: '',
			mondayopen: '',
			mondayclose: '',
			tuesdayopen: '',
			tuesdayclose: '',
			wednesdayopen: '',
			wednesdayclose: '',
			thursdayopen: '',
			thursdayclose: '',
			fridayopen: '',
			fridayclose: '',
			saturdayopen: '',
			saturdayclose: ''
		}
	]);

	const changeHandler = event => {
		setScheduleState({
			...scheduleState,
			[event.target.name]: event.target.value
		});
	};

	const postHandler = event => {
		event.preventDefault();
		Axios.post(
			`${process.env.REACT_APP_BACKEND_URL}businesses/${business_id}/schedules`,
			scheduleState
		)
			.then(res => {
				console.log(res);
				window.location.href = '/menu/new';
			})
			.catch(err => {
				console.log(err);
			});

		setScheduleState({
			sundayopen: '',
			sundayclose: '',
			mondayopen: '',
			mondayclose: '',
			tuesdayopen: '',
			tuesdayclose: '',
			wednesdayopen: '',
			wednesdayclose: '',
			thursdayopen: '',
			thursdayclose: '',
			fridayopen: '',
			fridayclose: '',
			saturdayopen: '',
			saturdayclose: ''
		});
	};

	return (
		// <div className="schedule-creation-wrapper">
		<div className="schedule-form">
			<h1> Hours of Operation </h1>

			<form
				style={{
					display: 'flex',
					flexDirection: 'column',
					margin: 'auto',
					width: '50%'
				}}
				onSubmit={postHandler}
			>
				<label className="day_Label" htmlFor="sundayopen">
					Sunday open:
				</label>
				<input
					// className="day_Input"
					type="time"
					name="sundayopen"
					min="01:00"
					max="22:00"
					required
					value={scheduleState.sundayopen}
					placeholder="Sunday..."
					onChange={changeHandler}
				/>
				<label className="day_Label" htmlFor="sundayclose">
					Sunday close:{' '}
				</label>
				<input
					// className="day_Input"
					type="time"
					name="sundayclose"
					min="01:00"
					max="22:00"
					required
					value={scheduleState.sundayclose}
					placeholder="Sunday..."
					onChange={changeHandler}
				/>

				<label className="day_Label" htmlFor="mondayopen">
					monday open:
				</label>
				<input
					// className="day_Input"
					type="time"
					name="mondayopen"
					min="01:00"
					max="22:00"
					required
					value={scheduleState.mondayopen}
					placeholder="Monday..."
					onChange={changeHandler}
				/>
				<label className="day_Label" htmlFor="mondayopen">
					monday close:{' '}
				</label>
				<input
					// className="day_Input"
					type="time"
					name="mondayclose"
					min="01:00"
					max="22:00"
					required
					value={scheduleState.mondayclose}
					placeholder="Monday..."
					onChange={changeHandler}
				/>

				<label className="day_Label" htmlFor="tuesdayopen">
					tuesday open:
				</label>
				<input
					// className="day_Input"
					type="time"
					name="tuesdayopen"
					min="01:00"
					max="22:00"
					required
					value={scheduleState.tuesdayopen}
					placeholder="tuesday..."
					onChange={changeHandler}
				/>
				<label className="day_Label" htmlFor="tuesdayopen">
					tuesday close:{' '}
				</label>
				<input
					// className="day_Input"
					type="time"
					name="tuesdayclose"
					min="01:00"
					max="22:00"
					required
					value={scheduleState.tuesdayclose}
					placeholder="tuesday..."
					onChange={changeHandler}
				/>

				<label className="day_Label" htmlFor="wednesdayopen">
					wednesday open:
				</label>
				<input
					// className="day_Input"
					type="time"
					name="wednesdayopen"
					min="01:00"
					max="22:00"
					required
					value={scheduleState.wednesdayopen}
					placeholder="wednesday..."
					onChange={changeHandler}
				/>
				<label className="day_Label" htmlFor="wednesdayopen">
					wednesday close:{' '}
				</label>
				<input
					// className="day_Input"
					type="time"
					name="wednesdayclose"
					min="01:00"
					max="22:00"
					required
					value={scheduleState.wednesdayclose}
					placeholder="wednesday..."
					onChange={changeHandler}
				/>

				<label className="day_Label" htmlFor="thursdayopen">
					thursday open:
				</label>
				<input
					// className="day_Input"
					type="time"
					name="thursdayopen"
					min="01:00"
					max="22:00"
					required
					value={scheduleState.thursdayopen}
					placeholder="thursday..."
					onChange={changeHandler}
				/>
				<label className="day_Label" htmlFor="thursdayopen">
					thursday close:{' '}
				</label>
				<input
					// className="day_Input"
					type="time"
					name="thursdayclose"
					min="01:00"
					max="22:00"
					required
					value={scheduleState.thursdayclose}
					placeholder="thursday..."
					onChange={changeHandler}
				/>

				<label className="day_Label" htmlFor="fridayopen">
					friday open:
				</label>
				<input
					// className="day_Input"
					type="time"
					name="fridayopen"
					min="01:00"
					max="22:00"
					required
					value={scheduleState.fridayopen}
					placeholder="friday..."
					onChange={changeHandler}
				/>
				<label className="day_Label" htmlFor="fridayopen">
					friday close:{' '}
				</label>
				<input
					// className="day_Input"
					type="time"
					name="fridayclose"
					min="01:00"
					max="22:00"
					required
					value={scheduleState.fridayclose}
					placeholder="friday..."
					onChange={changeHandler}
				/>

				<label className="day_Label" htmlFor="saturdayopen">
					saturday open:
				</label>
				<input
					// className="day_Input"
					type="time"
					name="saturdayopen"
					min="01:00"
					max="22:00"
					required
					value={scheduleState.saturdayopen}
					placeholder="saturday..."
					onChange={changeHandler}
				/>
				<label className="day_Label" htmlFor="saturdayopen">
					saturday close:{' '}
				</label>
				<input
					// className="day_Input"
					type="time"
					name="saturdayclose"
					min="01:00"
					max="22:00"
					required
					value={scheduleState.saturdayclose}
					placeholder="saturday..."
					onChange={changeHandler}
				/>
				{/* <input
					type="text"
					name="monday"
					value={scheduleState.monday}
					placeholder="Monday..."
					onChange={changeHandler}
				/>
				<input
					type="text"
					name="tuesday"
					value={scheduleState.tuesday}
					placeholder="Tuesday..."
					onChange={changeHandler}
				/>
				<input
					type="text"
					name="wednesday"
					value={scheduleState.wednesday}
					placeholder="Wednesday..."
					onChange={changeHandler}
				/>
				<input
					type="text"
					name="thursday"
					value={scheduleState.thursday}
					placeholder="Thursday..."
					onChange={changeHandler}
				/>
				<input
					type="text"
					name="friday"
					value={scheduleState.friday}
					placeholder="Friday..."
					onChange={changeHandler}
				/>
				<input
					type="text"
					name="saturday"
					value={scheduleState.saturday}
					placeholder="Saturday..."
					onChange={changeHandler}
				/> */}
				<button> Submit </button>
			</form>
		</div>
	);
};

export default ScheduleCreator;
