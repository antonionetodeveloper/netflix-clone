import styled from "styled-components";

export const Container = styled.div`

	&{
		display: flex;
		flex-direction: column;
		justify-content: center;

		width: 70vw;
		height: 7.5vw;
		
		background-color: #303030;
		text-align: center;
		border-radius: 1vw;
		:hover{
			cursor: pointer;
		}
		
		p{
			font-size: 3.5vw;
		}
		div.answer{
			display: ${
				props => (props.id > 0) ? "flex" : "none" 
			};

			p{
				font-size: 2vw;
			}
		}
	}
`;