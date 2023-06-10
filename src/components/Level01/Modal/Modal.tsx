import React from 'react';
import { IButtonsConfig } from "../../../types";

interface Props extends React.PropsWithChildren {
	show: boolean;
	onClose: React.MouseEventHandler;
	title: string;
	configs: IButtonsConfig[];
}

const Modal: React.FC<Props> = ({show, title, children, onClose, configs }) => {
	return (
		<div className="modal show" style={{display: show ? 'block' : 'none'}}>
			<div className="modal-dialog">
				<div className="modal-content">

					<div className="modal-header">
						<h1 className="modal-title fs-5">{ title }</h1>
						<button className="btn btn-close" onClick={onClose}></button>
					</div>

					{ children }

					<div className="modal-footer">
						{
							configs.map((config: IButtonsConfig) => {
								return <button className={`btn btn-${config.type}`} onClick={config.onClick} key={config.id}>{config.label}</button>
							})
						}
					</div>

				</div>
			</div>
		</div>
	);
};

export default Modal;