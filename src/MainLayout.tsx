import { Outlet } from "react-router-dom";
import {
  AppBar,
  Badge,
  BadgeProps,
  Box,
  IconButton,
  Stack,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

export default function MainLayout(props: { cartCount: number }) {
  const navigate = useNavigate();
  return (
    <>
      <Box component={"div"} sx={{ flexGrow: 1, mb: 1 }}>
        <AppBar position="static" sx={{ pt: 1, pb: 1 }}>
          <Toolbar>
            <Typography
              variant="h4"
              component="div"
              sx={{ flexGrow: 1 }}
              onClick={() => navigate("/")}
            >
              Webshop
            </Typography>
            <IconButton
              aria-label="cart"
              color="inherit"
              onClick={() => {
                navigate("/basket");
              }}
            >
              <StyledBadge badgeContent={props.cartCount} color="primary">
                <ShoppingCartIcon />
              </StyledBadge>
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
      <Stack sx={{ pl: 1, pr: 1, mt: 1 }}>
        <Outlet />
      </Stack>
    </>
  );
}
