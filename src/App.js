import React, { Component } from "react"
import { hot } from "react-hot-loader"
import ReactPlayer from "react-player"
import video from "../public/ressources/Ticket_Final.mp4"
import "./App.css"
/** @jsx jsx */
import { jsx, css, Global } from "@emotion/react"

const GlobalStyles = css`
  @font-face {
    font-family: "druk_wide";
    src: url("./fonts/druk_wide.otf") format("otf");
  }

  * {
    text-align: center;
  }
`

const style = css`
  @font-face {
    font-family: "druk_wide";
    src: url("src/fonts/druk_wide.otf") format("otf");
  }
  color: #5835e9;
  font-size: 5rem;
  font-family: "druk_wide";
`

class App extends Component {
  render() {
    return (
      <div className="App">
        <Global styles={GlobalStyles} />
        <div
          css={css`
            height: 100vh;
            width: 100vw;
          `}
        >
          <h1 css={style}>Special gift!</h1>
          <h2
            css={css`
              font-size: 2rem;
              color: #ffffff;
              margin-top: 1rem;
            `}
          >
            Thanks for attending the first edition of NFT Paris!
          </h2>

          <ReactPlayer
            url={video}
            width="100%"
            height="100%"
            controls={false}
          />
        </div>
      </div>
    )
  }
}

export default hot(module)(App)
