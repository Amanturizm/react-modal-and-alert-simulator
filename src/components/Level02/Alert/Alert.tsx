import React from 'react';
import { motion } from "framer-motion";

interface Props extends React.PropsWithChildren {
	type: string;
	showAlert: React.MouseEventHandler;
	clickDismissable?: boolean;
}

const Alert: React.FC<Props> = props => {
	const alertClasses: string = `alert alert-${props.type} d-flex justify-content-between align-items-center m-auto`;

	const alertOnClick: React.MouseEventHandler = props.clickDismissable ? props.showAlert : () => {};

	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.5 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.5 }}
			className={alertClasses}
			style={{ width: '300px' }}
			onClick={alertOnClick}
			whileTap={{opacity: 0, scale: 0 }}
		>
			{ props.children }
			{
				props.clickDismissable ? null
					: <button className="btn btn-close" onClick={props.showAlert}></button>
			}
		</motion.div>
	);
};

export default Alert;