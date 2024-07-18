import React from "react";
import BioPicture from "../Images/bioPicture.webp";
import styled from "styled-components";

const StyledImage = styled.img`
    margin: 0 auto;
    width: 15%;
    border-radius: 50%;

`;

const ImageComponent = () => {

    return (
        <div>
            <StyledImage src={BioPicture} alt="Picture of me" />
        </div>
    );
}

export default ImageComponent;