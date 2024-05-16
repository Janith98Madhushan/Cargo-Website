import "../css/WhyChoseUsSection.css";
import CreateSvgIcon from "./PlusIcon";
import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

const style = {
  p: 0,
  width: "100%",
  borderRadius: 2,
  borderColor: "divider",
  backgroundColor: "background.paper",
};

const WhyChooseUsSection = () => {
  return (
    <div className="why-choose-us">
      <h2>Why Choose Us</h2>
      <p>Lorem ipsum dolor sit amet consectetur</p>
      <div className="reason">
        <List sx={style} aria-label="mailbox folders">
          <ListItem>
            <ListItemText primary="Dui ac hendreirit elementum quam ispum actutor iorem" />{" "}
            <CreateSvgIcon />
          </ListItem>
          <Divider component="li" />
          <ListItem>
            <ListItemText primary="Mauris vel magna a est laborist volutpat" />
            <CreateSvgIcon />
          </ListItem>
          <Divider component="li" />
          <ListItem>
            <ListItemText primary="Sed bibendum ornare lorem mauris feugiat suspendisse neque" />
            <CreateSvgIcon />
          </ListItem>
          <Divider component="li" />
          <ListItem>
            <ListItemText primary="Nulla scelerisque dul hendreerit elementum quam" />
            <CreateSvgIcon />
          </ListItem>
        </List>
      </div>
    </div>
  );
};

export default WhyChooseUsSection;
