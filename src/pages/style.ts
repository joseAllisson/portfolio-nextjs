import styled from "styled-components";
import { mediaDevice } from "../styles/responsive/mediaDevice";

const HomeStyled = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
    
    @media ${mediaDevice.tablet} {
        grid-template-columns: 1fr;
    }
`;

export default HomeStyled;