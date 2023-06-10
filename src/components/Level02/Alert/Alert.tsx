import React from 'react';

interface Props extends React.PropsWithChildren {
	type: string;
	onDismiss?: React.MouseEventHandler;
}

const Alert: React.FC<Props> = ({ type, onDismiss, children }) => {
	return (
		<div className={ `alert alert-${type} d-flex justify-content-between align-items-center m-auto` } style={{ width: '300px' }}>
			{ children }
			{
				onDismiss ? <button className="btn btn-close" onClick={onDismiss}></button>
					        : null
			}
		</div>
	);
};

export default Alert;