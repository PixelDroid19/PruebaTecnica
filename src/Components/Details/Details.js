import React from "react";
import { useSelector } from "react-redux";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import ReactCardFlip from "react-card-flip";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Export } from "../../Asserts/TypesPokemon/Export";
//React Router Dom
import { useHistory } from "react-router";

export const Details = () => {
  const history = useHistory();
  const { Datos } = useSelector((stor) => stor.Details);
  const { Plant, Water, Fire, Bug, Normal, Poison, Electric, Flying, Ghost } =
    Export();
  const { id, name, stats, weight, height, sprites, types, abilities, moves } =
    Datos;

  const [isFlipped, setIsFlipped] = React.useState();

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  const Back = () => {
    history.push("/");
  };

  const Color = (color) => {
    switch (color) {
      case "bug":
        return `rgba(172, 199, 60, 0.6)`;

      case "grass":
        return "rgba(89, 159, 43, 0.8)";

      case "water":
        return "rgba(49, 167, 215, 0.8)";

      case "fire":
        return "rgba(224, 104, 65, 0.8)";

      case "electric":
        return "rgba(249, 222, 128, 0.9)";

      case "normal":
        return "rgba(164,172,175, 0.8)";

      case "poison":
        return "rgba(131,106,138, 0.8)";

      case "flying":
        return "rgba(131,126,138, 0.8)";

        case "ghost":
          return "rgba(167, 130, 185, 0.8)";

      default:
        break;
    }
  };

  const TyepPokemon = (type) => {
    switch (type) {
      case "bug":
        return Bug;

      case "grass":
        return Plant;

      case "water":
        return Water;

      case "fire":
        return Fire;

      case "electric":
        return Electric;

      case "normal":
        return Normal;

      case "poison":
        return Poison;

      case "flying":
        return Flying;

      case "ghost":
        return Ghost;

      default:
        break;
    }
  };

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <div className="BoxDetails">
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <div className="CardContainer">
          <Card
            key={id}
            sx={{ maxWidth: 345 }}
            style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
          >
            <CardHeader
              className="TitleSpan"
              style={{
                backgroundColor: Color(types[0].type.name),
                textAlign: "center",
              }}
              avatar={
                <Avatar
                  className="AvatarCustom"
                  sx={{ bgcolor: "rgba(227, 24, 24, 0.8)", cursor: "pointer" }}
                  onClick={Back}
                >
                  {" "}
                  <CatchingPokemonIcon sx={{ fontSize: 40 }} />{" "}
                </Avatar>
              }
              action={
                <IconButton onClick={handleClick} aria-label="settings">
                  <ArrowForwardIcon />
                </IconButton>
              }
              title={name}
            ></CardHeader>
            <CardMedia
              component="img"
              className="imgCustom"
              image={sprites.front_default}
              alt="Paella dish"
            />
            <CardContent>
              {types.length === 1 ? (
                <Grid
                  container
                  rowSpacing={1}
                  columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                >
                  <Grid item xs={12}>
                    <Item
                      style={{
                        boxShadow: "none",
                        border: "none",
                        borderBottom: "1px solid rgb(188,188,195)",
                      }}
                    >
                      <h2 style={{ color: "black" }}>Tipo</h2>
                    </Item>
                  </Grid>
                  <Grid item xs={12}>
                    <Item style={{ border: "none", boxShadow: "none" }}>
                      <Grid
                        container
                        spacing={0}
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Avatar
                          alt={types[0].type.name}
                          style={{
                            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                          }}
                          src={TyepPokemon(types[0].type.name)}
                        />
                      </Grid>
                    </Item>
                  </Grid>
                  <Grid item xs={6}>
                    <Item>
                      <b className="stats">Weight:</b> {weight}
                    </Item>
                  </Grid>
                  <Grid item xs={6}>
                    <Item>
                      <b className="stats">Attack:</b> {stats[1].base_stat}
                    </Item>
                  </Grid>
                  <Grid item xs={6}>
                    <Item>
                      <b className="stats">Height:</b> {height}
                    </Item>
                  </Grid>
                  <Grid item xs={6}>
                    <Item>
                      <b className="stats">Defense:</b> {stats[2].base_stat}
                    </Item>
                  </Grid>
                </Grid>
              ) : (
                <Grid
                  container
                  rowSpacing={1}
                  columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                >
                  <Grid item xs={12}>
                    <Item
                      style={{
                        boxShadow: "none",
                        border: "none",
                        borderBottom: "1px solid rgb(188,188,195)",
                      }}
                    >
                      <h2 style={{ color: "black" }}>Tipo</h2>
                    </Item>
                  </Grid>
                  <Grid item xs={6}>
                    <Item
                      style={{
                        border: "none",
                        float: "right",
                        boxShadow: "none",
                      }}
                    >
                      <Avatar
                        alt={types[0].type.name}
                        style={{
                          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                        }}
                        src={TyepPokemon(types[0].type.name)}
                      />
                    </Item>
                  </Grid>
                  <Grid item xs={6}>
                    <Item
                      style={{
                        border: "none",
                        float: "left",
                        boxShadow: "none",
                      }}
                    >
                      <Avatar
                        alt={types[1].type.name}
                        style={{
                          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                        }}
                        src={TyepPokemon(types[1].type.name)}
                      />
                    </Item>
                  </Grid>
                  <Grid item xs={6}>
                    <Item>
                      <b className="stats">Weight:</b> {weight}
                    </Item>
                  </Grid>
                  <Grid item xs={6}>
                    <Item>
                      <b className="stats">Attack:</b> {stats[1].base_stat}
                    </Item>
                  </Grid>
                  <Grid item xs={6}>
                    <Item>
                      <b className="stats">Height:</b> {height}
                    </Item>
                  </Grid>
                  <Grid item xs={6}>
                    <Item>
                      <b className="stats">Defense:</b> {stats[2].base_stat}
                    </Item>
                  </Grid>
                </Grid>
              )}
            </CardContent>
          </Card>
        </div>

        <div>
          <Card
            key={id}
            sx={{ maxWidth: 345 }}
            style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
          >
            <CardHeader
              className="TitleSpan"
              style={{
                backgroundColor: Color(types[0].type.name),
                textAlign: "center",
              }}
              avatar={
                <Avatar
                  className="AvatarCustom"
                  sx={{ bgcolor: "rgba(227, 24, 24, 0.8)", cursor: "pointer" }}
                  onClick={Back}
                >
                  {" "}
                  <CatchingPokemonIcon sx={{ fontSize: 40 }} />{" "}
                </Avatar>
              }
              action={
                <IconButton onClick={handleClick} aria-label="settings">
                  <ArrowForwardIcon />
                </IconButton>
              }
              title="Details"
            ></CardHeader>

            <CardContent>
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item xs={12}>
                  <Item
                    style={{
                      boxShadow: "none",
                      border: "none",
                      borderBottom: "1px solid rgb(188,188,195)",
                    }}
                  >
                    <h2
                      style={{
                        color: "black",
                        fontSize: 19,
                        padding: "0",
                        margin: "0",
                      }}
                    >
                      abilities
                    </h2>
                  </Item>
                </Grid>
                {  abilities.length === 2 ?
                <>
                <Grid item xs={6}>
                  <Item>
                    <i className="ability">{abilities[0].ability.name}</i>
                  </Item>
                </Grid>
                <Grid item xs={6}>
                  <Item>
                    <i className="ability">{abilities[1].ability.name}</i>
                  </Item>
                </Grid>
                </>:
                 <>
                 <Grid item xs={12}>
                   <Item>
                     <i className="ability">{abilities[0].ability.name}</i>
                   </Item>
                 </Grid>
                 </>
                }
              </Grid>
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item xs={12}>
                  <Item
                    style={{
                      boxShadow: "none",
                      border: "none",
                      borderBottom: "1px solid rgb(188,188,195)",
                    }}
                  >
                    <h2
                      style={{
                        color: "black",
                        fontSize: 19,
                        padding: "0",
                        margin: "0",
                      }}
                    >
                      Movements
                    </h2>
                  </Item>
                </Grid>
                <Grid item xs={6}>
                  <Item>
                    <i className="ability">{moves[0].move.name}</i>
                  </Item>
                </Grid>
                <Grid item xs={6}>
                  <Item>
                    <i className="ability">{moves[2].move.name}</i>
                  </Item>
                </Grid>
                <Grid item xs={6}>
                  <Item>
                    <i className="ability">{moves[3].move.name}</i>
                  </Item>
                </Grid>
                <Grid item xs={6}>
                  <Item>
                    <i className="ability">{moves[4].move.name}</i>
                  </Item>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </div>
      </ReactCardFlip>
    </div>
  );
};
