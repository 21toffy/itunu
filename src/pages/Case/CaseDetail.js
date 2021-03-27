import React, { useState, useEffect } from 'react';
import { useCase } from '../../hooks';
import { Link } from 'react-router-dom';
import './CaseDetail.css';
import Spinner from '../../components/spinner/Spiner';

const CaseDetail = (props) => {
	const {
		state,
		getCase,
		updateCaseItem,
		getCaseAssets,
		createAnAsset,
		setCurrent,
		clearCurrent,
	} = useCase();
	const caseId = props.match.params.id;

	const { caseDetail, loading, assets } = state;
	console.log(state.assets);
	// useEffect(() => {
	//   if
	//   return () => {
	//     cleanup
	//   }
	// }, [input])

	const [values, setValues] = useState({
		name: '',
		description: '',
		location: '',
		type: '',
	});

	// const

	// const [name, setName] = useState(caseDetail?.name);
	// const [legacyid, setLegacyId] = useState(caseDetail?.legacy_id);
	// const [expirydate, setExpiryDate] = useState(caseDetail?.expiring_date);

	const [name, setName] = useState('');
	const [legacyid, setLegacyId] = useState('');
	const [expirydate, setExpiryDate] = useState('');
	useEffect(() => {
		getCase(caseId);
		getCaseAssets(caseId);
	}, []);
	// const id = state.cases.id;
	const id = state?.caseDetail?.id;
	console.log(id);

	const handleSubmit = (e) => {
		console.log(values);

		e.preventDefault();
		updateCaseItem(values);

		getCaseAssets(caseId);
		console.log(values);
	};

	const assetSubmit = (e) => {
		e.preventDefault();
		values.case_id = id;
		createAnAsset(values);
		setValues({
			name: '',
			description: '',
			location: '',
			type: '',
		});
	};

	const onChange = (e) =>
		setValues({
			...values,
			[e.target.name]: e.target.value,
		});
	if (loading) {
		return <Spinner />;
	}
	return (
		<div classname='main-content'>
			<br />
			<br />

			<div className='row'>
				{/* case detail card starts */}

				<div class='col-md-6 d-flex flex-column p-3 m-3 bg-white shorten-card shadow-sm rounded animated flipInX delay-8'>
					<div class='text-uppercase text-tracked text-muted mb-2'>
						Case details
					</div>
					<div>
						<h5 class='mx-1  pb-3 justify-content-start'>
							<small>
								<i class='fas fa-file-signature' />
							</small>{' '}
							Case Name:
							<small>&nbsp;&nbsp;{caseDetail?.name}</small>
						</h5>
					</div>
					<div>
						<h5 class='mx-1  pb-3 justify-content-start'>
							<small>
								{' '}
								<i class='far fa-id-badge pr-1' />
							</small>
							LegacyID:
							<small>&nbsp;&nbsp;{caseDetail?.legacy_id}</small>
						</h5>
					</div>
					<div>
						<h5 class='mx-1  pb-3 justify-content-start'>
							<small>
								<i class='far fa-clock pr-1' />
							</small>
							Expiry Date:
							<small>
								&nbsp;&nbsp;{caseDetail?.expiring_date}
							</small>
						</h5>
					</div>
					<div>
						<h5 class='mx-1  pb-3 justify-content-start'>
							<small>
								<i class='fas fa-question pr-1' />{' '}
							</small>
							Status:
							<small>&nbsp;&nbsp;{caseDetail?.legacy_id}</small>
						</h5>
						<input
							type='button'
							class='modal-buttons'
							data-toggle='modal'
							data-target='#addCase'
							value='Edit Case'
						/>

						{/* case detail modal starts */}
						<div
							class='modal fade'
							id='addCase'
							tabindex='-1'
							aria-labelledby='exampleModalLabel'
							aria-hidden='true'
						>
							<div class='modal-dialog'>
								<div class='modal-content'>
									<div class='modal-header'>
										<h5
											class='modal-title'
											id='exampleModalLabel'
										>
											Edit Case
										</h5>
										<p
											type='button'
											class='close'
											data-dismiss='modal'
											aria-label='Close'
										>
											<span aria-hidden='true'>
												&times;
											</span>
										</p>
									</div>
									<div class='modal-body'>
										<form
											onSubmit={() => setCurrent(values)}
										>
											<h3> Update Case </h3>

											<label for='name'>Case Name:</label>
											<input
												type='text'
												onChange={(e) =>
													setName(e.target.value)
												}
												id='name'
												name='name'
												value={name}
											/>

											<label for='legacy_id'>
												Legacy ID
											</label>
											<input
												type='text'
												onChange={(e) =>
													setLegacyId(e.target.value)
												}
												id='legacy_id'
												name='legacy_id'
												value={legacyid}
											/>

											<label for='expiring_date'>
												Epiry Date:
											</label>
											<input
												type='date'
												onChange={(e) =>
													setExpiryDate(
														e.target.value
													)
												}
												id='expiring_date'
												name='expiring_date'
												value={expirydate}
											/>
										</form>
									</div>
									<div class='modal-footer'>
										<button
											type='button'
											class='btn btn-secondary'
											data-dismiss='modal'
										>
											Close
										</button>
										<button
											onClick={() => setCurrent(values)}
											type='submit'
										>
											Update Case
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* case detail card stops */}

				{/* add asset card start */}
				<div class='col-md-5 d-flex flex-column p-3 m-3 bg-white shorten-card shadow-sm rounded animated flipInX delay-8'>
					<div class='text-uppercase text-tracked text-muted mb-2'>
						Case Assets Overview
					</div>
					<div>
						<h5 class='mx-1  pb-3 justify-content-start'>
							<small>
								<i class='fas fa-dot-circle text-sm' />
							</small>{' '}
							Number Of Assets:<small>{caseDetail?.name}</small>
						</h5>
						{/* <i class="fab fa-xs fa-google pr-1"></i>  */}
					</div>
					<div>
						<h5 class='mx-1  pb-3 justify-content-start'>
							<small>
								<i class='fas fa-dot-circle text-sm' />
							</small>{' '}
							Status:<small>{caseDetail?.legacy_id}</small>
						</h5>
					</div>

					<div>
						<h5 class='mx-1  pb-3 justify-content-start'>
							<small>
								<i class='fas fa-dot-circle text-sm' />
							</small>{' '}
							Status:<small>{caseDetail?.legacy_id}</small>
						</h5>
						<input
							type='button'
							class='modal-buttons'
							data-toggle='modal'
							data-target='#addAsset'
							value='Add Asset'
							data-backdrop='false'
							data-dismiss='modal'
						/>
						{/* asset modal starts */}

						<div
							class='modal fade'
							id='addAsset'
							tabindex='-1'
							aria-labelledby='exampleModalLabel'
							aria-hidden='true'
						>
							<div class='modal-dialog'>
								<div class='modal-content'>
									<div class='modal-header'>
										<h5
											class='modal-title'
											id='exampleModalLabel'
										>
											Add Asset
										</h5>
										<p
											type='button'
											class='close'
											data-dismiss='modal'
											aria-label='Close'
										>
											<span aria-hidden='true'>
												&times;
											</span>
										</p>
									</div>
									<div class='modal-body'>
										<form onSubmit={assetSubmit}>
											<h5> Add asset </h5>

											<label for='name'>
												Asset Name:
											</label>
											<input
												type='text'
												onChange={onChange}
												id='name'
												name='name'
												value={values.name}
												required
											/>

											<label for='description'>
												Description
											</label>
											<input
												type='text'
												onChange={onChange}
												id='description'
												name='description'
												value={values.description}
												required
											/>

											<label for='expiring_date'>
												Location:
											</label>
											<input
												type='text'
												onChange={onChange}
												id='location'
												name='location'
												value={values.location}
												required
											/>

											<label for='type'>
												Property Type
											</label>
											<input
												type='text'
												onChange={onChange}
												id='type'
												name='type'
												value={values.type}
												required
											/>

											<div class='modal-footer'>
												<button
													type='button'
													class='btn btn-secondary'
													data-dismiss='modal'
												>
													Close
												</button>
												<button type='submit'>
													Add assets
												</button>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
						{/* asset modal ends */}
					</div>
				</div>
				{/* asset details ends */}
			</div>

			<div className='pt-5'>
				<div class='projects mb-4'>
					<div class='projects-inner'>
						<header class='projects-header '>
							<div class=' title'>All Assets </div>
							<div class='count'>
								| {assets && assets.length} Asset(s)
							</div>
							<i class='zmdi zmdi-download pr-1' />
						</header>
						<table class='projects-table table-hover table-bordered'>
							<thead>
								<tr>
									<th>Asset Type</th>
									<th>Name</th>
									<th>Description</th>
									<th>Location</th>
									<th class=''>
										<i class='fas fa-exclamation pl-1' />
										Actions
									</th>
								</tr>
							</thead>
							{assets?.length > 0 ? (
								assets.map((asset, index) => (
									<tr>
										<td>
											<p>{asset?.type}</p>
										</td>

										<td class='member'>
											<div class='member-info'>
												<p>{asset?.name}</p>
											</div>
										</td>
										<td>
											<p class='text-danger'>
												{asset?.description}
											</p>
										</td>
										<td class='status'>
											<span class='status-text status-orange'>
												{asset?.location}
											</span>
										</td>
										<td>
											<Link to={`/asset/${asset.id}`}>
												<a className='btn mini'>view</a>
											</Link>
										</td>
										<td />
										<hr />
									</tr>
								))
							) : (
								<p className='text-center'>No assets found</p>
							)}
						</table>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CaseDetail;
