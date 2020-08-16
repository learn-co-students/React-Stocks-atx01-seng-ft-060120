import React, { Component } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "../components/SearchBar";

class MainContainer extends Component {
  state = {
    stocks: [],
    myStocks: [],
    sortBy: "None",
    filterBy: "All",
  };

  componentDidMount() {
    console.log("starting tofetch");
    fetch("http://localhost:3000/stocks")
      .then((res) => res.json())
      .then((stocks) => this.setState({ stocks }))
      .then(console.log("finished fetching"));
  }

  addToPortfolio = (stock) => {
    if (this.state.myStocks.includes(stock)) {
      return;
    } else {
      const myStocks = [...this.state.myStocks, stock];
      this.setState({ myStocks });
    }
  };

  removeFromPortfolio = (stock) => {
    const myStocks = this.state.myStocks.filter((s) => s.id !== stock.id);
    this.setState({ myStocks });
  };

  handleSort = (e) => {
    this.setState({ sortBy: e.target.value }, () => {
      if (this.state.sortBy === "Alphabetically") {
        const alpha = [...this.state.stocks].sort((a, b) =>
          a.name > b.name ? 1 : -1
        );
        this.setState({ stocks: alpha });
      }
      if (this.state.sortBy === "Price") {
        const price = [...this.state.stocks].sort((a, b) =>
          a.price > b.price ? 1 : -1
        );
        this.setState({ stocks: price });
      }
    });
  };

  handleFilter = (e) => {
    this.setState({ filterBy: e.target.value });
  };

  render() {
    return (
      <div>
        <SearchBar
          handleSort={this.handleSort}
          handleFilter={this.handleFilter}
          sortBy={this.state.sortBy}
        />

        <div className="row">
          <div className="col-8">
            <StockContainer
              filterBy={this.state.filterBy}
              stocks={this.state.stocks}
              sortBy={this.state.sortBy}
              addToPortfolio={this.addToPortfolio}
            />
          </div>
          <div className="col-4">
            <PortfolioContainer
              myStocks={this.state.myStocks}
              removeFromPortfolio={this.removeFromPortfolio}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MainContainer;
