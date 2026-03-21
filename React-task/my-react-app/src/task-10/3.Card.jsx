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
    <Card sx={{ maxWidth: 350, mt: 4, ml: 4}}>
      <CardHeader title="Wireless Headphones" subheader="₹2500" />

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Good quality wireless headphones with noise cancellation.
        </Typography>
      </CardContent>

      <CardActions>
        <Button size="small" variant="contained"
            sx={{
              border: '1px solid transparent',      //making 1px transparent border bc contained can't have border
              '&:hover': {backgroundColor: 'white' , color: '#1976d2;' , borderColor: '#1976d2'}}}>
            Buy
          </Button>
        <Button size="small" variant="outlined">Details</Button>
      </CardActions>
    </Card>
  );
}