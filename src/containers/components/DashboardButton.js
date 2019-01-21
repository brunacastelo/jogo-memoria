import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const DashboardButton = ({ children, to }) => (
  <Button
    variant="outlined"
    color="primary"
    size="large"
    fullWidth
    component={Link}
    to={to}
  >
    {children}
  </Button>
);

export default DashboardButton;
