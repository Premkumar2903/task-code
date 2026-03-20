import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button,
  Typography,
} from "@mui/material";

export default function ProductCard() {
  return (
    <Card sx={{ maxWidth: 350, mt: 4 }}>
      <CardHeader title="Wireless Headphones" subheader="₹2000" />

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Good quality wireless headphones with noise cancellation.
        </Typography>
      </CardContent>

      <CardActions>
        <Button size="small">Buy</Button>
        <Button size="small">Details</Button>
      </CardActions>
    </Card>
  );
}