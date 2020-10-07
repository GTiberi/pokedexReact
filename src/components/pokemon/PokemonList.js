import React, { Component } from "react";
import PokemonCard from "./PokemonCard";
import axios from "axios";

export default class PokemonList extends Component {
  state = {
    url: "",
    pokemon: null,
  };

  async componentDidMount() {
    switch (this.props.generations) {
      case "1":
        await this.setState({
          url: "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151",
        });
        break;
      case "2":
        await this.setState({
          url: "https://pokeapi.co/api/v2/pokemon/?offset=151&limit=251",
        });
        break;
      case "3":
        await this.setState({
          url: "https://pokeapi.co/api/v2/pokemon/?offset=251&limit=386",
        });
        break;
      case "4":
        await this.setState({
          url: "https://pokeapi.co/api/v2/pokemon/?offset=386&limit=493",
        });
        break;
      case "5":
        await this.setState({
          url: "https://pokeapi.co/api/v2/pokemon/?offset=493&limit=649",
        });
        break;
      case "6":
        await this.setState({
          url: "https://pokeapi.co/api/v2/pokemon/?offset=649&limit=721",
        });
        break;
      case "7":
        await this.setState({
          url: "https://pokeapi.co/api/v2/pokemon/?offset=721&limit=809",
        });
        break;
      default:
        await this.setState({
          url: "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=809",
        });
        break;
    }
    const res = await axios.get(this.state.url);
    this.setState({ pokemon: res.data["results"] });
  }

  render() {
    return (
      <React.Fragment>
        {this.state.pokemon ? (
          <div className="row">
            {this.state.pokemon.map((pokemon) => (
              <PokemonCard
                key={pokemon.name}
                name={pokemon.name}
                url={pokemon.url}
              />
            ))}
          </div>
        ) : (
          <h1>Loading Pokemons</h1>
        )}
      </React.Fragment>
    );
  }
}
