import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  card: {
    maxWidth: 345
  }
});

const BusinessCard = ({ business }) => {
  /* Sample business data
  building_number: null
  city: "Denver"
  created_at: "2019-09-18T01:43:06.704Z"
  description: "Our mission is to be a leader in the distribution and merchandising of food, pharmacy, ..."
  id: 30
  lat: "39.59512"
  long: "-104.89775"
  name: "Golden King"
  recommended: null
  state: "CO"
  street: "7939 E Arapahoe Rd"
  stripe_email: null
  stripe_token: null
  theme: "Argentinian"
  updated_at: "2019-09-18T01:43:06.704Z"
  user_id: 30
  website: "http://jerde.org/tracey.hauck"
  zipcode: 80112
  */
  const classes = useStyles();
  return (
    // `business/${business.id}`
    <Link
      to={`business/${business.id}`}
      key={business.id}
      style={{ textDecoration: 'none', padding: '0.75rem' }}
    >
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Business Logo"
            height="140"
            image="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F46239%2Fsalmon-dish-food-meal-46239.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26h%3D350&f=1&nofb=1"
            title="Business Logo"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              align="left"
              color="primary"
            >
              {business.name}
            </Typography>
            <Typography
              gutterBottom
              variant="h6"
              component="h2"
              align="left"
              color="textSecondary"
            >
              {business.theme}
            </Typography>
            <Typography
              gutterBottom
              variant="subtitle1"
              component="h6"
              align="left"
              color="textSecondary"
            >
              {business.street}
            </Typography>
            <Typography
              variant="subtitle2"
              color="textSecondary"
              component="p"
              align="left"
            >
              {business.description === undefined ? (
                <p></p>
              ) : (
                business.description
                  .split(' ')
                  .slice(0, 5)
                  .join(' ') + '....'
              )}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size="small"
            variant="contained"
            color="primary"
            style={{ background: '#125999' }}
          >
            Menu & More
          </Button>
        </CardActions>
      </Card>
    </Link>
  );
};

export default BusinessCard;
