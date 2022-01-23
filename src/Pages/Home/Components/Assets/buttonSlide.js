import styled from "styled-components";

export const Button = styled.button`
/* From cssbuttons.io by @alexroumi */
	& {
		padding: 15px 25px;
		border: unset;
		border-radius: 15px;
		color: #212121;
		z-index: 1;
		background: #e8e8e8;
		position: relative;
		font-weight: 1000;
		font-size: 17px;
		-webkit-box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
		box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
		transition: all 250ms;
		overflow: hidden;
	}

	&::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 0;
		border-radius: 15px;
		background-color: #f40612;
		z-index: -1;
		-webkit-box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
		box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
		transition: all 250ms
	}

	&:hover {
		color: #fff;
		cursor: pointer;
	}

	&:hover::before {
		width: 100%;
	}
`;