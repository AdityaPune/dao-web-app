import React, { Component, useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import {
  Typography,
  TextField,
  MenuItem,
  Grid,
  Button,
} from "@material-ui/core";
import { colors, drawerWidth } from "../../theme/theme";

import Loader from "../loader/loader";

import { ERROR, BICONOMY_CONNECTED } from "../../constants/constants";

import {
  Biconomy,
  PermitClient,
  HTTP_CODES,
  RESPONSE_CODES,
} from "@biconomy/mexa";

import * as moment from "moment";
import _ from "lodash";

// blocknative测试
import { initOnboard } from "../../walletsServices.js";

import config from "../../config/config";

import citadelABI from "./citadelABI.json";

import Web3 from "web3";

import Store from "../../stores/store";
import UnlockModal from "../unlock/unlockModal";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
const emitter = Store.emitter;
const dispatcher = Store.dispatcher;
const store = Store.store;

const styles = (theme) => ({
  root: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    width: "100%",
    justifyContent: "center",
    alignItems: "flex-end",
    minHeight: "800px",
  },
  connectBiconomyContainer: {
    minWidth: "100%",
    display: "flex",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
    [theme.breakpoints.up("md")]: {
      minWidth: "calc(100% - " + drawerWidth + "px)",
      paddingTop: "66px",
    },
    [theme.breakpoints.down("md")]: {
      paddingTop: "2rem",
    },
  },
});

class ConnectBiconomy extends Component {
  constructor(props) {
    super();

    this.state = {
      loading: true,
      modalOpen: false,
      period: "1d",
      onboard: null,
    };
  }

  async componentWillMount() {
    // Add listeners and biconomy initialization
    // Ethereum user detected. You can now use the provider.
    const provider = store.getStore("web3context").library.provider;
    const web3 = new Web3(provider);
    console.log(
      "🚀 | ConnectBiconomy | componentWillMount | provider",
      provider
    );
    // const provider = window["ethereum"];
    // await provider.enable();

    const networkId = await web3.eth.net.getId();
    console.log(
      "🚀 | ConnectBiconomy | componentWillMount | networkId",
      networkId
    );
    const happyHourapiKey = this.getBiconomyHappyHourAPIKey(networkId);
    const erc20PaymentapiKey = this.getBiconomyERC20PaymentAPIKey(networkId);
    const happyHourbiconomy = new Biconomy(provider, {
      walletProvider: window.ethereum,
      apiKey: happyHourapiKey,
      debug: true,
    });
    const erc20Paymentbiconomy = new Biconomy(provider, {
      walletProvider: window.ethereum,
      apiKey: erc20PaymentapiKey,
      debug: true,
    });

    // This web3 instance is used to read normally and write to contract via meta transactions.
    const happyHourWeb3 = new Web3(happyHourbiconomy);

    const erc20PaymentWeb3 = new Web3(erc20Paymentbiconomy);

    happyHourbiconomy
      .onEvent(happyHourbiconomy.READY, () => {
        console.log("🚀 | ConnectBiconomy | happyHourbiconomy");
        // Initialize your dapp here like getting user accounts etc
        dispatcher.dispatch({
          type: BICONOMY_CONNECTED,
          content: {
            happyHourWeb3: happyHourWeb3,
          },
        });
      })
      .onEvent(happyHourbiconomy.ERROR, () => {
        // Handle error while initializing mexa
      });

    erc20Paymentbiconomy
      .onEvent(erc20Paymentbiconomy.READY, () => {
        // Initialize your dapp here like getting user accounts etc
        dispatcher.dispatch({
          type: BICONOMY_CONNECTED,
          content: {
            erc20PaymentWeb3: erc20PaymentWeb3,
          },
        });
      })
      .onEvent(erc20Paymentbiconomy.ERROR, () => {
        // Handle error while initializing mexa
      });
  }

  componentWillUnmount() {
    // Remove Listeners
    // emitter.removeListener(ERROR, this.errorReturned);
  }

  errorReturned = (error) => {
    this.setState({ loading: false });
  };

  render() {
    return null;
  }

  // Return Happy Hour API Key based on network
  getBiconomyHappyHourAPIKey = (networkId) => {
    const apiKeys = {
      1: process.env.REACT_APP_BICONOMY_HAPPY_HOUR_MAINNET_API_KEY,
      42: process.env.REACT_APP_BICONOMY_HAPPY_HOUR_KOVAN_API_KEY,
    };
    return apiKeys[networkId];
  };

  // Return ERC20Payment API Key based on network
  getBiconomyERC20PaymentAPIKey = (networkId) => {
    const apiKeys = {
      1: process.env.REACT_APP_BICONOMY_ERC20_MAINNET_API_KEY,
      42: process.env.REACT_APP_BICONOMY_ERC20_KOVAN_API_KEY,
    };
    return apiKeys[networkId];
  };
}

export default withRouter(withStyles(styles)(ConnectBiconomy));
