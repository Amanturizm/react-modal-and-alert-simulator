import React, { useState } from 'react';
import Modal from "./Modal/Modal";

const Level01 = () => {

	const [isShow, setIsShow] = useState<boolean>(false);

	const cancel = (): void => setIsShow(!isShow);

	return (
		<div className="text-center">
			<button className="btn btn-outline-primary" onClick={cancel}>Show</button>
			<Modal
				show={isShow}
				onClose={cancel}
				title="Some kinda modal title"
			>
				<p>This is modal content</p>
			</Modal>
		</div>
	);
};
export default Level01;