import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { redirect, useNavigate } from "react-router-dom";

let PHPPrice = new Intl.NumberFormat("en-PH", {
  style: "currency",
  currency: "PHP",
});

const products = [
  {
    id: 10,
    name: "shabu",
    price: "6000",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores repellendus accusantium mollitia laboriosam aliquam neque distinctio dolorem, animi nostrum quam!",
    image: "10.png",
  },
  {
    id: 11,
    name: "Marijuana",
    price: "5800",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores repellendus accusantium mollitia laboriosam aliquam neque distinctio dolorem, animi nostrum quam!",
    image: "11.png",
  },
  {
    id: 14,
    name: "Emman",
    price: "43000",
    description: "bading 'to",
    image: "14.png",
  },
  {
    id: 15,
    name: "Cocaine",
    price: "9000",
    description: "galing sa pdea ng taguig letsgooo",
    image: "15.png",
  },
  {
    id: 16,
    name: "sample",
    price: "1200",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores repellendus accusantium mollitia laboriosam aliquam neque distinctio dolorem, animi nostrum quam!",
    image: "10.png",
  },
  {
    id: 17,
    name: "Ana",
    price: "3400",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores repellendus accusantium mollitia laboriosam aliquam neque distinctio dolorem, animi nostrum quam!",
    image: "11.png",
  },
  {
    id: 18,
    name: "Des",
    price: "43000",
    description: "bading 'to",
    image: "14.png",
  },
  {
    id: 19,
    name: "Cocaine",
    price: "9000",
    description: "galing sa pdea ng taguig letsgooo",
    image: "15.png",
  },
];

function Products() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        minHeight: "50vh",
        mt: "100px",
      }}
    >
      <Container>
        <Typography variant="h1" textAlign="center">
          Products
        </Typography>

        <Grid container columnSpacing={2} rowSpacing={3}>
          {products.map((product) => (
            <Grid key={product.id} item xs={12} sm={6} md={3}>
              <Card sx={{ background: "pink" }}>
                <CardActionArea
                  onClick={() => navigate(`/product/${product.id}`)}
                >
                  <CardMedia
                    component="img"
                    alt="product"
                    height={300}
                    src={`/img/${product.image}`}
                  />
                  <CardContent
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      variant="h4"
                      fontWeight="bold"
                      textAlign="center"
                    >
                      {product.name}
                    </Typography>
                    <Typography>
                      {PHPPrice.format(product.price)}
                    </Typography>
                    <Typography textAlign="center">
                      {product.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>

                <CardActions>
                  <Button>See more</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Products;
