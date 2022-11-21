import styled from "styled-components";

import { move } from "../../utils/animation/move";

interface FloatingMenuItemStyledProps {
    index: number;
}

export const FloatingMenuItemStyled = styled.div<FloatingMenuItemStyledProps>`
    position: absolute;
    animation: ${({ index }) => move({
    initialTransform: `0, 0`,
    endTransform: `0, ${index * 72}px`
})} forwards;
    animation-duration: ${({ index }) => index * 0.2}s;

    button {
        background-color: ${({ theme }) => theme.colors.background};
    }
`;

export const FloatingMenuStyled = styled.div`
    position: relative;
    z-index: 1;

    button {
        background-color: ${({ theme }) => theme.colors.background};
    }
`;

export const FloatingMenuContentStyled = styled.div`
    display: none;
    position: absolute;
    z-index: -1;
    top: 0;

    &.open {
        display: block;
    }

    &.closed {

        ${FloatingMenuItemStyled} {
            animation: '';
        }
    }
`;