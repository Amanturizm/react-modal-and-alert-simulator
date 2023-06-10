import React, { useState } from 'react';
import Alert from "./Alert/Alert";

interface Props {
	isAlert: boolean;
	showAlert: () => void;
}

const Level02: React.FC<Props> = ({isAlert, showAlert }) => {
	return (
		<div className="text-center" style={{ display: isAlert ? 'block' : 'none' }}>
			<Alert type="warning" onDismiss={showAlert}>This is a warning type alert</Alert>
		</div>

	);
};

export default Level02;