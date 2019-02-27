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
  Code,
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
              RESTful API which manage professional soccer players and teams with <br/>
              a back-end on Node.js <br />
              and a MongoDB
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
          <Heading size={3} textColor="secondary" caps>What Loopback is?</Heading>
          <Image src="https://media.giphy.com/media/YalzdbnnMFTBm/giphy.gif" margin="0px center 100px" height="500"/>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary" caps>Loopback</Heading>
          <Text margin="10px 0 0" textColor="secondary" size={3}>
          The LoopBack framework is a set of Node.js modules that you can use independently or together to quickly build REST APIs.
          </Text>
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
            npm i -g @loopback/cli
        </Slide>
        <Slide transition={['spin']}>
          <Heading size={3} fit textColor="secondary">
            Creating Application
          </Heading>
          <Appear>
            <Code>lb4 app</Code>
          </Appear>
          <Appear>
            <List>
              <ListItem>Project name</ListItem>
              <ListItem>Project description</ListItem>
              <ListItem>Project root directory</ListItem>
              <ListItem>Application class name</ListItem>
              <ListItem>Select features to enable</ListItem>
            </List>
          </Appear>
        </Slide>
        <Slide transition={['spin']}>
          <Heading size={3} fit textColor="secondary">
            Installing MongoDB Connector
          </Heading>
          <Appear>
            <Code>npm install --save loopback-connector-mongodb</Code>
          </Appear>
        </Slide>
        <Slide transition={['spin']}>
          <Heading size={3} fit textColor="secondary">
            Connecting MongoDB Connector
          </Heading>
          <Appear>
            <Code>lb4 datasource mongoDS --connector mongoDB</Code>
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
            <Code>lb4 model</Code>
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
            Creating repositories
          </Heading>
          <Appear>
            <Code>lb4 repository</Code>
          </Appear>
          <Appear>
            <List>
              <ListItem>Datasource</ListItem>
              <ListItem>Select Model to generate Repository (press 'a' for all)</ListItem>
            </List>
          </Appear>
        </Slide>
        <Slide transition={['spin']}>
          <Heading size={3} fit textColor="secondary">
            Creating controllers
          </Heading>
          <Appear>
            <Code>lb4 controller</Code>
          </Appear>
          <Appear>
            <List>
              <ListItem>Controller class name</ListItem>
              <ListItem>Kind of controller (CRUD)</ListItem>
              <ListItem>Name of the model</ListItem>
              <ListItem>Name of the repository</ListItem>
              <ListItem>Type of id defined in the model</ListItem>
              <ListItem>Base of HTTP path name</ListItem>
            </List>
          </Appear>
        </Slide>
        <Slide transition={['spin']}>
          <Heading size={3} fit textColor="secondary">
            Generated folder hierarchy
          </Heading>
          <Appear>
            <List>
              <ListItem>Datasources: ./src/datasources</ListItem>
              <ListItem>Controllers: ./src/controllers</ListItem>
              <ListItem>Models: ./src/models</ListItem>
              <ListItem>Repositories: ./src/repositories</ListItem>
            </List>
          </Appear>
        </Slide>
        <Slide transition={['spin']}>
          <Heading size={3} fit textColor="secondary">
            Creating relation
          </Heading>
          <Appear>
            <Code>lb relation</Code>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgImage={images.homerPlay} bgDarken={0.8} textColor="primary">
          <Heading size={1} textColor="primary" caps fit>Demo</Heading>
          {/*<ApiDemo/>*/}
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={3} textColor="secondary" caps>What about authentication?</Heading>
          <Appear>
            <Code>lb acl</Code>
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
