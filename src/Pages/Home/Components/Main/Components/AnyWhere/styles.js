import styled from "styled-components";

export const Container = styled.section`
	&{
		display: flex;
		align-items: center;
		justify-content: center;
		margin: auto;
		width: 90vw;	

		div.text{
			text-align: center;
			h3{
				font-size: 4vw;
			}
			p{
				font-size: 2vw;
			}
		}

		img{
			width: 60%;
		}
	}
`;