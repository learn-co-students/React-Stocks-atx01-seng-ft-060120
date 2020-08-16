import React, { Component } from "react";
import Stock from "../components/Stock";

class StockContainer extends Component {
  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {this.props.filterBy === "All"
          ? this.props.stocks.map((stock) => (
              <Stock
                handleClick={this.props.addToPortfolio}
                key={stock.id}
                stock={stock}
              />
            ))
          : this.props.stocks
              .filter((stock) => stock.type === this.props.filterBy)
              .map((stock) => (
                <Stock
                  handleClick={this.props.addToPortfolio}
                  key={stock.id}
                  stock={stock}
                />
              ))}
      </div>
    );
  }
}

export default StockContainer;
