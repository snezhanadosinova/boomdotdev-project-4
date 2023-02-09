import classNames from "classnames";
import millify from "millify";
import { Card as MuiCard, Chip, CardContent, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Avatar from "../avatar/Avatar";
import styles from "./Card.module.scss";
import theme from "../../theme";
import { ThemeProvider } from "@mui/material/styles";

export default function Card({
  name = "",
  likes = 0,
  mediaUrl = "",
  user = { avatar: { url: "" }, verified: false },
  price = "",
  currency = "",
}) {

  const likesMilified = millify(likes);

  return (
    <ThemeProvider theme={theme}>
      <MuiCard
        className={classNames(styles.card)}
        sx={{
          maxWidth: 340
        }}
      >
        <CardContent>
          <Avatar url={user.avatar.url} verified={user.verified} size="33" />
          <div className={classNames(styles.mediaContainer)}>
            <img src={mediaUrl} className={classNames(styles.media)} />
          </div>
          <div className={classNames(styles.cardText)}>
            <div>
              <Typography className={classNames(styles.title)}>
                {name}
              </Typography>
              <Typography
                className={classNames(styles.price)}
                color="secondary"
              >
                {price} {currency}
              </Typography>
            </div>
            <Chip
              label={likesMilified}
              variant="outlined"
              color="secondary"
              icon={<FavoriteIcon sx={{width:"13px"}} />}
              className={classNames(styles.likes)}
            />
          </div>
        </CardContent>
      </MuiCard>
    </ThemeProvider>
  );
}