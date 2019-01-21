import React from "react";

import { Board, Card } from "../components";
import { connect } from "react-redux";

const GamePage = ({ onCardClick, isActive }) => (
  <Board>
    <Card name="flor" isActive={isActive} onClick={onCardClick} />
    <Card name="aranha" isActive={isActive} onClick={onCardClick} />
    <Card name="aranha" isActive={isActive} onClick={onCardClick} />
    <Card name="flor" isActive={isActive} onClick={onCardClick} />
  </Board>
);

// export default class GamePage extends Component {
//   state = {
//     isActive: false
//   };

//   handleCardClick = () => {
//     this.setState(prevState => ({
//       isActive: !prevState.isActive
//     }));
//   };
//   render() {
//     return (
//       <Board>
//         <Card
//           name="test card"
//           isActive={this.state.isActive}
//           onClick={this.handleCardClick}
//         />
//       </Board>
//     );
//   }
// }
const mapStateToProps = state => ({
  isActive: state.isActive
});

const mapDispatchToProps = dispatch => ({
  onCardClick: () => {
    dispatch({ type: "SELECT_CARD" });
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GamePage);
