import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import MatchsActions from "~/store/ducks/matchs";

import {
  Container,
  MatchsList,
  Match,
  Cover,
  Info,
  Name,
  LastMessage
} from "./styles";

class Matchs extends Component {
  render() {
    return (
      <Container>
        <MatchsList
          data={this.props.matchs.data}
          keyExtractor={match => String(match.id)}
          renderItem={({ item: match }) => (
            <Match onPress={() => ({})}>
              <Cover source={{ uri: match.cover }} />
              <Info>
                <Name>{match.name}</Name>
                <LastMessage>{match.lastMessage}</LastMessage>
              </Info>
            </Match>
          )}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  matchs: state.matchs
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(MatchsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Matchs);
