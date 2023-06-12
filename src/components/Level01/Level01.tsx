import React, { useState } from 'react';
import Modal from "./Modal/Modal";
import { nanoid } from "nanoid";
import { IButtonsConfig } from "../../types";

const Level01: React.FC = () => {
	const [isModal, setIsModal] = useState<boolean>(false);

	const cancel = (): void => setIsModal(!isModal);

	const buttonsConfig: IButtonsConfig[] = [
		{type: 'primary', label: 'Continue', onClick: cancel, id: nanoid()},
		{type: 'danger', label: 'Close', onClick: cancel, id: nanoid()}
	];

	return (
		<div className="text-center">
			<button className="btn btn-outline-primary mb-5" onClick={cancel}>Show</button>
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