// Import React
import React from "react";
import ApiDemo from "./components/ApiDemo"
import { Spectacle, Deck } from 'spectacle';
import CodeSlide from 'spectacle-code-slide';
import preloader from "spectacle/lib/utils/preloader";
import './style.css';
import soccerImage from "../assets/city.jpg"
import createApp from "../assets/createApp.png"
import nextStep from "../assets/nextStep.png"
import mongoDBConnector from "../assets/mongoDBConnector.png"
import teamModel from "../assets/teamModel.png"
import relationModels from "../assets/relationModels.png"

// Import Spectacle Core tags
import {
  BlockQuote,
  ComponentPlayground,
  Cite,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Image,
  Text,
  GoToAction
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const theme = createTheme({
  primary: "#f5c80d",
  secondary: "#1F2022",
  tertiary: "#94979e",
  quarternary: "#737373"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} textColor="secondary" caps>A RESTful API in 5 minutes</Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            all from command line
          </Text>
        </Slide>
        <Slide transition={["spin"]} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary" caps>The project</Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit>
            RESTful API which manage professional soccer players and teams with <br/>a back-end on Node.js <br />and a MongoDB
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary" caps>How will we do it?</Heading>
          <List>
            <ListItem>Using LoopBack</ListItem>
            <ListItem>Creating application via CLI</ListItem>
            <ListItem>Creating data models via CLI</ListItem>
          </List>
          <GoToAction slide={1}>Jump to 3</GoToAction>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary" caps>Pre-requisite</Heading>
          <List>
            <ListItem>Node.js</ListItem>
            <ListItem>MongoDB server running</ListItem>
          </List>
        </Slide>
          <CodeSlide
            transition={[]}
            lang="js"
            code={require("raw-loader!../../../code/script.example")}
            ranges={[
              { loc: [1, 7], title: "Walking through some commands" },
              { loc: [1, 2], title: "Install LoopBack" },
              { loc: [2, 3], title: "Creating Application!" , note: "Make sure you are in the right directory!"},
              { loc: [2, 3], image: createApp },
              { loc: [3, 4], title: "Installing MongoDB Connector"},
              { loc: [4, 5], title: "Connecting MongoDB Connector"},
              { loc: [4, 5], image: mongoDBConnector},
              { loc: [5, 6], title: "Creating model", note: "We create two models : Team and Player!"},
              { loc: [5, 6], image: teamModel},
              { loc: [6, 7], title: "Creating relation", note: "One team has many players!"},
              { loc: [6, 7], image: relationModels}
            ]}/>
            <CodeSlide
              transition={[]}
              lang="js"
              code={require("raw-loader!../../../code/soccer-team/common/models/team.json")}
              ranges={[
                { loc: [1, 270], title: "Walking through generated model" },
                { loc: [1, 2], note: "Model Name" },
                { loc: [2, 7], note: "Persistennce Information" },
                { loc: [7, 21], note: "Team Properties" },
                { loc: [22, 32], note: "Relation between a team and players " }
              ]}/>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Standard List</Heading>
          <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Demo</Heading>
          <ApiDemo/>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
