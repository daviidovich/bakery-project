import React from "react";
import "./Section History.css";
import Headline from "../Another/Sections headline";
import HistoryButton from "./History-buttons";
import HistoryElem from "./HistoryElement";
import { PhoneIcon, MapIcon, ClockIcon, CommentIcon } from "../Another/Icons";

let name: string = "Jachson Stwin Roy";
let position: string = "CEO Bakery";

interface mySt {
  items: any;
  current: string;
}

interface HistoryElement {
  image: any;
  header: string;
  desc: string;
  subheader: string;
  info: any;
  cta: string;
}

export default class History extends React.Component<{}, mySt> {
  constructor(props: any) {
    super(props);
    this.state = {
      items: {
        history: {
          image: require("./bakery-history.jpg"),
          header: "History Since From 1980",
          desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.`,
          subheader: "Our Address",
          info: {
            address1: {
              icon: ClockIcon,
              text: "08:00 am - 08:30 pm",
              class: "workTime"
            },
            address2: {
              icon: PhoneIcon,
              text: "+99 546 584 26",
              class: "phone"
            },
            address3: {
              icon: MapIcon,
              text: "16122 Collins Street, Australia",
              class: "address"
            }
          },
          cta: "VIEW ON THE MAP"
        },
        team: {
          image: require("./bakery-team.jpg"),
          header: "The Best Culinary Specialists",
          desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.`,
          subheader: "Follow us",
          info: {
            address1: {
              icon: CommentIcon,
              text: " instagram.com/bakery_australia"
            },
            address2: {
              icon: CommentIcon,
              text: " facebook.com/bakeryAustralia"
            },
            address3: {
              icon: CommentIcon,
              text: " twitter.com/bakeryInAustralia"
            }
          }
        },
        awards: {
          image: require("./bakery-awards.jpg"),
          header: "№15 In The Top-50 Best Restaurants In The World",
          desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur.`,
          subheader: "We are waiting for you!"
        }
      },
      current: "history"
    };
  }

  swapContent = (dataFromChild: string) => {
    this.setState({ current: dataFromChild });
  };

  setActive = (value: string) => {
    this.setState({ current: value });
  };

  render() {
    const data: HistoryElement = this.state.items[this.state.current];
    const names = this.state.items;

    return (
      <div className="history" id="history">
        <Headline label="Bakery History" />
        <div className="history-content flex-center">
          <div className="history__text text text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo
          </div>
          <div className="history__name">{name}</div>
          <div className="history__position">{position}</div>
          <div className="history__buttons flex-space-between">
            {Object.keys(names).map((name: any, i: number) => {
              return (
                <HistoryButton
                  key={i}
                  toggler={this.swapContent}
                  label={name}
                  isActive={this.state.current === name}
                  setActive={this.setActive}
                />
              );
            })}
          </div>
          <HistoryElem current={data} />
        </div>
      </div>
    );
  }
}
