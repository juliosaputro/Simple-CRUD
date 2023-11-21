import React from "react";
import { Button } from "@mui/material";
import { IsMobile } from "../helper/responsive";

export default function ButtonPrimary({
  tittle = "",
  onClick,
  icon,
  color = "",
}) {
  return (
    <>
      {IsMobile() ? (
        <Button
          variant="contained"
          onClick={onClick}
          style={{
            width: 100,
            height: 37,
            borderRadius: 45,
            backgroundColor: color,
            fontSize: 12,
            lineHeight: 18,
            fontWeight: "600",
            color: "white",
          }}
        >
          {tittle}
        </Button>
      ) : (
        <Button
          variant="contained"
          startIcon={icon}
          onClick={onClick}
          style={{
            width: 159,
            height: 54,
            borderRadius: 45,
            backgroundColor: color,
            fontSize: 18,
            lineHeight: 27,
            fontWeight: "600",
          }}
        >
          {tittle}
        </Button>
      )}
    </>
  );
}
