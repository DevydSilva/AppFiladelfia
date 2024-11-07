import React from "react";
//import { Text } from "react-native";
import { Container, LoadingIcon } from "./styles";

import FiladelfiaLogo from '../../assets/filadelfia';

export default () => {
    return (
    <Container>
      <FiladelfiaLogo width="100%" height="200" />
      <LoadingIcon size="large" color="03A4FE" />
    </Container>
    )
}