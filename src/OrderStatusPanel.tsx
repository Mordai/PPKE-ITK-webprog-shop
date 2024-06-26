import { List, ListItem, Stack, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import { OrderStatus } from "./Types";


export default function OrderStatusPanel(props: {orderStatus : OrderStatus}) {
  return (
    <Stack
      display={"flex"}
      justifyContent={"center"}
      justifyItems={"center"}
      alignContent={"center"}
      alignItems={"center"}
      gap={2}
    >
      {props.orderStatus.status === "Ordered" && (
        <CheckCircleIcon sx={{ fontSize: "5em", color: "green" }} />
      )}
      {props.orderStatus.status === "Error" && (
        <ReportProblemIcon sx={{ fontSize: "5em", color: "orange" }} />
      )}

      <Typography variant="h3" sx={{ flexGrow: 1, fontWeight: "bold" }}>
        {props.orderStatus.status === "Ordered" && "Sikeres rendelés!"}
        {props.orderStatus.status === "Error" && "Sikertelen rendelés!"}
      </Typography>
      <Typography variant="body1" sx={{ flexGrow: 1 }}>
        {props.orderStatus.status === "Ordered" &&
          `A rendelés azonosítója: ${props.orderStatus.id}`}
        {props.orderStatus.status === "Error" &&
          `Hibaüzenet: ${props.orderStatus.message}`}
      </Typography>
      
      {props.orderStatus.errors &&
      <List sx={{ listStyleType: 'disc' }}>
        {Object.entries(props.orderStatus.errors).map(([key, value]) => {
          if(typeof key === "string")
            {
              return <ListItem>
                <Typography variant="body1" sx={{ flexGrow: 1 }}>{value}</Typography>
                </ListItem>
            }
        })}
      </List>
      }
     
    </Stack>
  );
}
