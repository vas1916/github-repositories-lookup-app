import React, { FunctionComponent } from "react";
import ListItem from "@material-ui/core/ListItem";
import { ListLink } from "../Types/UserRepositoriesTypes";

export const ListItemLink:FunctionComponent<ListLink> = (props) => <ListItem alignItems="center"  component="a" {...props} />;
