import React, { Component } from "react";

import { Container, Text, Button } from "./styles";

export default class welcome extends Component {
  handleGoPress = () => {
    const { navigate } = this.props.navigation;
    navigate("Map");
  };

  render() {
    return (
      <Container>
        <Text>Welcome</Text>
        <Button title="Go" onPress={this.handleGoPress} />
      </Container>
    );
  }
}
