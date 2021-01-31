import React from "react";
import Background from "../../components/background/background";
import ItemDetail from "../../components/itemDetails/itemDetails";
import Movies from "../../data/data.json";

class ItemDetails extends React.Component {
  constructor(props) {
    super(props);
    this.idMovie = props.match.params.id;
    this.state = { movie: {} };
  }

  componentDidMount() {
    this.getMovie();
  }

  getMovie() {
    const movie = Movies.find((movie) => movie.id == this.idMovie);
    this.setState({ movie });
  }

  render() {
    const { movie } = this.state;

    return (
      <div>
        <Background />
        <ItemDetail movie={movie} />
      </div>
    );
  }
}

export default ItemDetails;
