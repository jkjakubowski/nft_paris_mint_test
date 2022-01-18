import React, { Component } from "react"
import { hot } from "react-hot-loader"
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
  color: hotpink;
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
              font-size: 4rem;
            `}
          >
            Thanks you for attending the first edition of NFT Paris!
          </h2>
        </div>
      </div>
    )
  }
}

export default hot(module)(App)
