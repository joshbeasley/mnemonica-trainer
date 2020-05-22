import React, { Component } from "react";
import mappings from "../mappings";
import { Button } from "@material-ui/core";
import styles from "./NumberToCard.module.css";

export class NumberToCard extends Component {
  constructor(props) {
    super(props);
    this.state = this.generateNewCards();
  }

  generateNewCards = () => {
    const index = Math.ceil(Math.random() * 52);
    const card1 = mappings[index].symbol;
    let card2 = mappings[Math.ceil(Math.random() * 52)].symbol;
    let card3 = mappings[Math.ceil(Math.random() * 52)].symbol;

    while (card1 === card2 || card1 === card3 || card2 === card3) {
      card2 = mappings[Math.ceil(Math.random() * 52)].symbol;
      card3 = mappings[Math.ceil(Math.random() * 52)].symbol;
    }

    const cards = [
      {
        id: 1,
        value: card1,
      },
      {
        id: 2,
        value: card2,
      },
      {
        id: 3,
        value: card3,
      },
    ];

    this.shuffle(cards);

    return {
      index: index,
      cards: cards,
      submit: "",
    };
  };

  shuffle = (array) => {
    array.sort(() => Math.random() - 0.5);
  };

  handleClick = (value) => {
    this.setState({ submit: value });
  };

  handleNextClick = () => {
    this.setState(this.generateNewCards());
  };

  render() {
    const cards = this.state.cards;
    return (
      <div>
        <h3>What is card is in position number?</h3>
        <h1>{this.state.index}</h1>
        <div className={styles["card-buttons"]}>
          {cards.map((card) => (
            <div className={styles["card-button"]} key={card.id}>
              <Button
                size="large"
                variant="contained"
                color="primary"
                onClick={() => this.handleClick(card.value)}
                key={card.id}
              >
                {card.value}
              </Button>
            </div>
          ))}
        </div>
        {this.state.submit === "" ? (
          ""
        ) : this.state.submit == mappings[this.state.index].symbol ? (
          <div>
            <p>Correct!</p>
            <Button
              variant="contained"
              color="secondary"
              onClick={this.handleNextClick}
            >
              Next Card
            </Button>
          </div>
        ) : (
          <p>Incorrect, please try again!</p>
        )}
      </div>
    );
  }
}

export default NumberToCard;
