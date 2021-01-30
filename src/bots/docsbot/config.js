import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import MessageParserDocs from "./widgets/docs/MessageParserDocs/MessageParserDocs";
import ActionProviderDocs from "./widgets/docs/ActionProviderDocs/ActionProviderDocs";
import Config from "./widgets/docs/Config/Config";
import WidgetDocs from "./widgets/docs/WidgetDocs/WidgetDocs";

const botName = "Daniel"
const config = {
  botName: [botName],
  lang: "no",
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#5ccc9d",
    },
  },
  initialMessages: [
    createChatBotMessage(
      `Hi I'm Daniel. I’m a salesman for Emich Chevrolet. How can I assist you?`
    ),
    createChatBotMessage(
      "We have many vehicles available, when's the best time for you to stop by?",
      {
        withAvatar: true,
        delay: 900,
        widget: "widget",
      }
    ),
  ],
  state: {
    gist: "",
    infoBox: "",
  },
  customComponents: {},
  widgets: [
    {
      widgetName: "messageParser",
      widgetFunc: (props) => <MessageParserDocs {...props} />,
      mapStateToProps: ["gist", "infoBox"],
    },
    {
      widgetName: "actionProviderDocs",
      widgetFunc: (props) => <ActionProviderDocs {...props} />,
      mapStateToProps: ["gist", "infoBox"],
    },
    {
      widgetName: "config",
      widgetFunc: (props) => <Config {...props} />,
      mapStateToProps: ["gist", "infoBox"],
    },
    {
      widgetName: "widget",
      widgetFunc: (props) => <WidgetDocs {...props} />,
      mapStateToProps: ["gist", "infoBox"],
    },
  ],
};

export default config;
