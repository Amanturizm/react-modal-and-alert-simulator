import React, { useState } from 'react';
import Alert from "./Alert/Alert";

interface IAlertStyles {
	display: string;
	cursor: string;
}

const Level02: React.FC = () => {
	const [isAlert, setIsAlert] = useState<boolean>(true);

	const showAlert = (): void => setIsAlert(!isAlert);

	const alertStyles: IAlertStyles = {
		display: isAlert ? 'block' : 'none' ,
		cursor: 'pointer'
	};

	return (
		<div className="position-absolute top-0 end-0 mt-4 mx-4" style={alertStyles}>
			<Alert type="warning" showAlert={showAlert} clickDismissable>This is a warning type alert</Alert>
		</div>
	);
};

export default Level02;