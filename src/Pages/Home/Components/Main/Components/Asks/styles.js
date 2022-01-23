import styled from "styled-components";

export const Container = styled.section`
	&{
		margin-top: 5vw;
		display: flex;
		flex-direction: column;
		align-items: center;

		h4{
			font-size: 4vw;
			margin-bottom: 2vw;
		}

		div.boxes{
			display: flex;
			flex-direction: column;
			gap: 1vw;
		}
	}
`;