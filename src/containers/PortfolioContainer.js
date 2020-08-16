import React, { Component } from "react";
import Stock from "../components/Stock";

class PortfolioContainer extends Component {
  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
        {this.props.myStocks.map((stock) => (
          <Stock
            handleClick={() => this.props.removeFromPortfolio(stock)}
            key={stock.id}
            stock={stock}
          />
        ))}
      </div>
    );
  }
}

export default PortfolioContainer;
