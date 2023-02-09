import * as React from "react";
import Container from "@mui/material/Container";
import styles from "./Trending.module.scss";
import classNames from "classnames";
import Grid from "@mui/material/Grid";
import theme from "../../theme";
import { ThemeProvider } from "@mui/material/styles";
import { FormControl, Select,MenuItem } from "@mui/material";
import Card from "../card/Card";


export default function Trending({cards=[]}) {

    const [select, setSelect] = React.useState("");
    const handleChange = (event) => {
        setSelect(event.target.value);
      };

    return (
        <ThemeProvider theme={theme}>
        <div className={classNames(styles.wrapper)}>
          <Container className={classNames(styles.container)} maxWidth="xl">
            <Grid  container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                >   
                    <Grid item xs={3}>
                        <h1>Trending</h1>
                    </Grid>
                    <Grid item xs={3}>
                        <FormControl fullWidth>
                            <Select
                            id="select-for-trending"
                            value={select}
                            onChange={handleChange}
                            defaultValue={"This week"}
                            >
                            <MenuItem value={"this week"}>This week</MenuItem>
                            <MenuItem value={"this month"}>This Month</MenuItem>
                            <MenuItem value={"this year"}>This Year</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
            </Grid>
          
            <Grid  container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={2}>
                    {cards.map((card) =>
                        <Grid item xs={3} key={cards.name}>
                        <Card 
                            name={card.name}
                            likes={card.likes} 
                            mediaUrl={card.mediaUrl} 
                            user={card.owner}
                            price={card.price}
                            currency={card.currency} 
                        /> 
                        </Grid>
                    )}
            </Grid>
          </Container>
        </div>
        </ThemeProvider>
      );

}