// Import React
import React from "react";
import ApiDemo from "./components/ApiDemo"
import { Spectacle, Deck } from 'spectacle';
import CodeSlide from 'spectacle-code-slide';
import preloader from "spectacle/lib/utils/preloader";
import './style.css';

// Import Spectacle Core tags
import {
  Appear,
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

const images = {
  homerPlay: require('../assets/homer_play.png'),
  homerSit: require('../assets/homer_sit.jpg'),
  soccerBackground: require('../assets/bg_soccer.jpg')
};

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
        <Slide transition={["spin"]} bgImage={images.soccerBackground} bgDarken={0.7} textColor="tertiary">
        <Appear>
          <Heading size={3} textColor="primary" caps>The project</Heading>
          </Appear>
          <Appear>
          <Text margin="10px 0 0" textColor="primary" size={3}>
            RESTful API which manage professional soccer players and teams with <br/>a back-end on Node.js <br />and a MongoDB
          </Text>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary" caps>How will we do it?</Heading>
          <List>
            <ListItem>Using LoopBack</ListItem>
            <ListItem>Creating application</ListItem>
            <ListItem>Creating data models</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary" caps>Pre-requisite</Heading>
          <List>
            <ListItem>Node.js</ListItem>
            <ListItem>MongoDB server running</ListItem>
          </List>
        </Slide>
        <Slide transition={['spin']} >
          <Heading size={3} fit textColor="secondary">
            Install LoopBack
          </Heading>
            npm install -g loopback-cli
        </Slide>
        <Slide transition={['spin']}>
          <Heading size={3} fit textColor="secondary">
            Creating Application
          </Heading>
          <Appear>
            <Heading size={6} textColor="tertiary">command : lb</Heading>
          </Appear>
          <Appear>
            <List>
              <ListItem>Application name</ListItem>
              <ListItem>LoopBack version</ListItem>
              <ListItem>Application type</ListItem>
            </List>
          </Appear>
        </Slide>
        <Slide transition={['spin']}>
          <Heading size={3} fit textColor="secondary">
            Installing MongoDB Connector
          </Heading>
          <Appear>
            <Heading textColor="tertiary" fit>command : npm install --save loopback-connector-mongodb</Heading>
          </Appear>

        </Slide>
        <Slide transition={['spin']}>
          <Heading size={3} fit textColor="secondary">
            Connecting MongoDB Connector
          </Heading>
          <Appear>
            <Heading textColor="tertiary" fit>command : lb datasource mongoDS --connector mongoDB</Heading>
          </Appear>
          <Appear>
            <List>
              <ListItem>Datasource Name</ListItem>
              <ListItem>Connector type</ListItem>
              <ListItem>Other settings : host, port, database</ListItem>
            </List>
          </Appear>
        </Slide>
        <Slide transition={['spin']}>
          <Heading size={3} fit textColor="secondary">
            Creating model
          </Heading>
          <Appear>
            <Heading textColor="tertiary" size={6}>command : lb model</Heading>
          </Appear>
          <Appear>
            <List>
              <ListItem>Model Name</ListItem>
              <ListItem>Datasource</ListItem>
              <ListItem>Persistence type</ListItem>
              <ListItem>Model : Server or Common?</ListItem>
            </List>
          </Appear>
        </Slide>
        <Slide transition={['spin']}>
          <Heading size={3} fit textColor="secondary">
            Creating relation
          </Heading>
          <Appear>
            <Heading textColor="tertiary" size={6} >command : lb relation</Heading>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgImage={images.homerPlay} bgDarken={0.8} textColor="primary">
          <Heading size={1} textColor="primary" caps fit>Demo</Heading>
          {/*<ApiDemo/>*/}
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={3} textColor="secondary" caps>What about authentication?</Heading>
          <Appear>
            <Heading textColor="tertiary" size={6} >command : lb acl</Heading>
          </Appear>
          <Appear>
            <List>
              <ListItem>Model(s) to apply</ListItem>
              <ListItem>Authentication scope</ListItem>
              <ListItem>Access Type</ListItem>
              <ListItem>Role</ListItem>
              <ListItem>Permission</ListItem>
            </List>
          </Appear>
        </Slide>
        <Slide transition={["spin"]} bgColor="secondary" textColor="primary">
          <Heading size={3} textColor="primary">Summary</Heading>
          <List textColor="primary">
            <ListItem>lb : Create the application</ListItem>
            <ListItem>lb model : Create database models</ListItem>
            <ListItem>lb relation : Create models relations</ListItem>
            <ListItem>lb acl : Set up authentication</ListItem>
          </List>
        </Slide>
        <Slide transition={["spin"]} bgImage={images.homerSit} bgSize="contain" bgPosition="top" bgDarken={0.7} >
          <Heading size={3} textColor="primary">Links</Heading>
          <List textColor="primary" fit>
            <ListItem>loopback.io </ListItem>
            <ListItem>github.com/yahyabaassou/rest-api-cli</ListItem>
          </List>
        </Slide>
      </Deck>
    );
  }
}
