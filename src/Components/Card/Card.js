import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Export } from "../../Asserts/TypesPokemon/Export";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { purple } from "@mui/material/colors";
//Redux
import { useDispatch } from "react-redux";
import { DetailsPokemon } from "../../Hook/SearchHook/SearchHook";
import { setData } from "../../Redux/Action/ActionData";
//React Router Dom
import { useHistory } from "react-router";



const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  width: "100%",
  "&:hover": {
    backgroundColor: purple[700],
  },
}));

export default function RecipeReviewCard({ Props }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const { Plant, Water, Fire, Bug, Normal, Poison, Electric, Flying, Ghost  } = Export();

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

  const Onclick = async (Name) => {
    localStorage.setItem('PokeName', Name)
    const result = await DetailsPokemon(Name);
    const resp = result;
    dispatch(setData(resp))
    history.push("/Details");
  };

  return Props.map((e) => {
    return (
      <Card key={e.id} sx={{ maxWidth: 345 }}>
        <CardHeader
          className="TitleSpan"
          style={{ backgroundColor: Color(e.types[0].type.name) }}
          avatar={
            <Avatar
              alt="Remy Sharp"
              style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
              src={TyepPokemon(e.types[0].type.name)}
            />
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={e.name}
        ></CardHeader>
        <CardMedia
          component="img"
          className="imgCustom"
          image={e.sprites.front_default}
          alt={e.name}
        />
        <CardContent>
          {e.types.length === 1 ? (
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={12}>
                <Item>Tipo</Item>
              </Grid>
              <Grid item xs={12}>
                <Item>{e.types[0].type.name}</Item>
              </Grid>
              <Grid item xs={12}>
                <Stack spacing={2} direction="row">
                  <ColorButton
                    variant="contained"
                    onClick={() => {
                      Onclick(e.name);
                    }}
                  >
                    Details
                  </ColorButton>
                </Stack>
              </Grid>
            </Grid>
          ) : (
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={12}>
                <Item>Tipo</Item>
              </Grid>
              <Grid item xs={6}>
                <Item>{e.types[0].type.name}</Item>
              </Grid>
              <Grid item xs={6}>
                <Item>{e.types[1].type.name}</Item>
              </Grid>
              <Grid item xs={12}>
                <Stack spacing={2} direction="row">
                  <ColorButton
                    variant="contained"
                    onClick={() => {
                      Onclick(e.name);
                    }}
                  >
                    Details
                  </ColorButton>
                </Stack>
              </Grid>
            </Grid>
          )}
        </CardContent>
      </Card>
    );
  });
}
