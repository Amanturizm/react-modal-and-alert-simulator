import { nanoid } from "nanoid";
import React, { useState } from 'react';
import { IButtonsConfig } from "../../types";
import Modal from "./Modal/Modal";

interface Props {
	isModal: boolean;
	cancel: () => void;
	continueToAlert: () => void;
}

const Level01: React.FC<Props> = ({ isModal, cancel, continueToAlert }) => {
	const buttonsConfig: IButtonsConfig[] = [
		{type: 'primary', label: 'Go to second level', onClick: continueToAlert, id: nanoid()},
		{type: 'danger', label: 'Close', onClick: cancel, id: nanoid()}
	];

	return (
		<div className="text-center">
			<button className="btn btn-outline-primary" onClick={cancel}>Show</button>
			<Modal
				show={isModal}
				onClose={cancel}
				title="Some kinda modal title"
				configs={buttonsConfig}
			>
				<p>This is modal content</p>
			</Modal>
		</div>
	);
};
export default Level01;