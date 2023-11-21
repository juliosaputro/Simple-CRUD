import React from "react";
import TopBar from "../components/TopBar";
import TableData from "../components/TableData";

export default function Home() {
  return <TopBar children={<TableData />} />;
}
