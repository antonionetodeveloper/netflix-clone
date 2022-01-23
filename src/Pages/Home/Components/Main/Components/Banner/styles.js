import styled from "styled-components";
import bg from "./Images/banner.jpg"

export const Container = styled.section`
	&{
		background-image: url(${bg});
		background-attachment: fixed;
		background-position: center;
		background-repeat: no-repeat;
		background-size: contain;
		height: 50vw;
		color: white;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		
		h1, h2, h3{
			font-family: sans-serif;
			text-align: center;
		}

		div.text{
			display: flex;
			flex-direction: column;
			gap: 3vw;
			div.title{
				h1{
					font-size: 3.5vw;
				}
				h2{
					font-size: 2vw;
					font-weight: 500;
				}
			}
			h3{
				font-size: 1.5vw;
				font-weight: 300;
			}
		}

		form{
			margin-top: 1vw;
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 2vw;
			input{
				font-size: 1.5vw;
				width: 30vw;
				padding: 0.5vw 1.5vw 0.5vw 1.5vw;
			}
			button{
				width: 15vw;
			}
		}
	}
`;