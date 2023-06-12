import React from 'react';
import { IButtonsConfig } from "../../../types";

interface Props extends React.PropsWithChildren {
	show: boolean;
	onClose: React.MouseEventHandler;
	title: string;
	configs: IButtonsConfig[];
}

const Modal: React.FC<Props> = props => {
	const getButton = (config: IButtonsConfig) => (
		<button
			className={`btn btn-${config.type}`}
			onClick={config.onClick}
			key={config.id}
		>
			{config.label}
		</button>
	);

	return (
		<div className="modal show" style={{display: props.show ? 'block' : 'none'}}>
			<div className="modal-dialog">
				<div className="modal-content">

					<div className="modal-header">
						<h1 className="modal-title fs-5">{ props.title }</h1>
						<button className="btn btn-close" onClick={props.onClose}></button>
					</div>

					{ props.children }

					<div className="modal-footer">
						{
							props.configs.map((config: IButtonsConfig) => {
								return getButton(config);
							})
						}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;