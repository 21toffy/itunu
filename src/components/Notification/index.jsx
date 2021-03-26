import React, { useState, useEffect } from 'react';
import { createPortal, render } from 'react-dom';
import PropTypes from 'prop-types';
import './index.css';

const Notification = ({ status = 'info', message, title }) => {
	const [visible, setVisible] = useState(true);

	useEffect(() => {
		return () => {
			setVisible(true);
		};
	}, []);

	setTimeout(() => {
		setVisible(false);
	}, 3000);

	return (
		visible &&
		createPortal(
			<div className='notification-container'>
				<h5 className='notification-title'>{title}</h5>
				<p className='notification-message'>{message}</p>
			</div>,
			document.querySelector('#notification-root')
		)
	);
};

Notification.propTypes = {
	message: PropTypes.string.isRequired,
	title: PropTypes.string,
	status: PropTypes.string.isRequired,
};

export default Notification;
