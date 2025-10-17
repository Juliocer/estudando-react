import styled, { css } from "styled-components";

export const ButtonContainer = styled.button`
    background: #565656;
    border-radius: 2.5rem;
    border: none;
    position: relative;

    cursor: pointer;

    color: #FFF;
    padding: 5px 12px;
    min-width: 120px;
    width: 100%;
    margin-right: .5rem;

    ${({variant})=> variant === "primary" && css`
        min-width: 167px;
        height: 33px;

        background: #e4185d;

        &:hover {
            opacity: 0.6;
            cursor: pointer;
        }

        &::after {
            content: '';
            position: absolute;
            border: 1px solid #e4105d;
            top: -5px;
            left: -6px;
            width: calc(100% + 10px);
            height: calc(100% + 10px);
            border-radius: 22px;
        }
    `}

    ${({variant})=> variant === "terceiro" && css`
        max-width: 7rem;
        min-width: 5rem;
        height: 33px;

        background: transparent;
        color: rgba(35, 221, 122, 1);
        font-size: 1rem;

        &:hover {
            opacity: 0.6;
            cursor: pointer;
        }

        &::after {
            content: '';
            position: absolute;
            border: 1px solid #e4105d;
            top: -5px;
            left: -6px;
            border-radius: 22px;
        }
    `}
`
