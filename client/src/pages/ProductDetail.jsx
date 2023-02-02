import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetail() {
  const params = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    // Dito niyo kukunin ung info ng product sa database niyo
    // const getData = async () => await axios.get("http://localhost:`port ng server"/`route na nakaassign`)
    // let result = await getData()
    // setProduct(result)
    let result = { name: `PROODDDUCT ${params.id}`, price: 1200 };
    setProduct(result);
  }, []);
  return (
    <Box
      sx={{
        minHeight: "50vh",
        mt: "100px",
      }}
    >
      <Typography variant="h1" textAlign="center">
        {product.name}
      </Typography>
    </Box>
  );
}

export default ProductDetail;
