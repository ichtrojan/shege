import Head from 'next/head'
import Header from "../components/header";

export default () => (
    <main>
        <Head>
            <title>SHEGE</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            <link rel="shortcut icon" href="/static/favicon.png"/>
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet"/>
            <meta name="viewport"
                  content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
            <meta name="theme-color" content="white"/>
            <meta property="og:title" content="Shege"/>
            <meta property="og:type" content="website"/>
            <meta property="og:description" content="Shege new experience"/>
            <meta property="og:url" content="https://shege.tech"/>
            <meta name="apple-mobile-web-app-capable" content="yes"/>
            <meta name="apple-mobile-web-app-status-bar-style" content="white"/>
        </Head>
        <Header/>
        <section className="intro">
            <h1>Welcome to <span className="line-through">normal</span> <b>Shege</b></h1>
            <h3>A whole new <b>Experience</b></h3>
            <h3>Tech consultancy</h3>
            <div className="line"></div>
            <div className="line"></div>
            <h3>HI@SHEGE.TECH</h3>
        </section>
        <style jsx>{`
      @keyframes fadein {
  			from { opacity: 0; }
  			to   { opacity: 1; }
  		}
      a {
        color: #0076FF;
        text-decoration: none;
        border-bottom: 1px solid transparent;
        transition: border .2s ease;
      }
      a :hover {
        border-bottom: 1px solid #0076FF;
      }
      .award  {
        text-align: left;
        max-width: 400px;
        border-right: 1px solid #eaeaea;
        padding-left: 50px;
        padding-right: 50px;
      }
      b {
        font-weight: 600;
      }
      .cssda {
        display: flex;
        justify-content: center;
        margin-top: -50px;
      }
      .date {
        text-align: left;
        padding-left: 50px;
      }
      .electron {
        display: flex;
        justify-content: center;
      }
      .guardian {
        display: flex;
        justify-content: center;
        max-width: 100%;
        padding-bottom: 50px;
        padding-top: 150px;
        text-align: center;
        border-bottom: 1px solid #eaeaea;
      }
      .hackernews {
        display: flex;
        justify-content: center;
      }
      h1 {
        font-size: 6em;
        font-weight: 300;
        margin: 0;
      }
      h2 {
        font-size: 3.375em;
        margin: 0 0 10px 0;
      }
      h3 {
        font-size: 1.625em;
        font-weight: 300;
        margin: 0;
      }
      h4 {
        margin: 0;
      }
      .hyper {
        display: flex;
        justify-content: center;
        max-width: 100%;
        padding-bottom: 150px;
        padding-top: 150px;
        text-align: center;
        border-bottom: 1px solid #eaeaea;
      }
      .hyper-icon {
        margin-top: -75px;
        margin-bottom: 50px;
      }
      .sharelock {
        background: #FAFBFC;
        display: flex;
        justify-content: center;
        max-width: 100%;
        padding-bottom: 150px;
        padding-top: 150px;
        text-align: center;
        border-bottom: 1px solid #eaeaea;
      }
      .intro {
        max-width: 980px;
        padding: 0 30px;
      }
      .line {
        border-left: 1px solid transparent;
        height: 100px;
        margin: 0 auto;
        margin-top: 100px;
      }
      .line-through {
        text-decoration:line-through;
      }
      main {
        animation: fadein 2s;
      }
      .meta {
        margin-bottom: 50px;
      }
      .now-desktop {
        background: #FAFBFC;
        display: flex;
        justify-content: center;
        max-width: 100%;
        padding-bottom: 150px;
        padding-top: 150px;
        text-align: center;
        border-bottom: 1px solid #eaeaea;
      }
      p {
        font-size: 0.875em;
        line-height: 1.500em;
      }
      .project {
        height: auto;
      }
      section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100vh;
        margin: auto;
      }
      .wrapper {
        max-width: 980px;
      }
      .zeit {
        display: flex;
        justify-content: center;
        max-width: 100%;
        padding-bottom: 150px;
        text-align: center;
        border-bottom: 1px solid #EAEAEA;
      }
      @media screen and (max-width: 1200px) {
        .award  {
          border-right: none;
          padding-left: 20px;
          padding-right: 20px;
          text-align: center;
          margin: auto;
        }
        .date {
          text-align: center;
          padding-left: 0;
        }
        .cssda {
          flex-direction: column;
        }
        .electron {
          flex-direction: column;
        }
        .electron .image {
          transform: scale(0.75);
          margin-bottom: 10px;
        }
        .electron .date {
          margin-bottom: 75px;
        }
        .guardian {
          padding-bottom: 0;
          padding-top: 75px;
        }
        .hackernews {
          flex-direction: column;
        }
        .hackernews .date {
          margin-bottom: 75px;
        }
        .hackernews .image {
          transform: scale(0.75);
          margin-bottom: 10px;
        }
        .hyper-icon {
          margin-top: 0;
        }
        .image {
          width: 250px;
          margin: 0 auto;
        }
        .hyper {
          padding-bottom: 0;
          padding-top: 75px;
        }

        .intro {
          margin-top: 100px;
        }
        .now-desktop {
          padding-bottom: 0;
          padding-top: 75px;
        }
        .sharelock {
          padding-bottom: 0;
          padding-top: 75px;
        }
        .line {
          margin-bottom: 100px;
        }
        .wrapper {
          width: 100vw;
        }
        .zeit {
          padding-bottom: 50px;
        }
      }
      @media screen and (max-width: 992px) {
        .line {
          display: none;
        }
        .intro {
          border-bottom: 1px solid #EAEAEA;
          margin-bottom: 150px;
          padding-bottom: 150px;
        }
        section  {
          height: auto;
        }
      }
      @media screen and (max-width: 576px) {
        h1 {
          font-size: 22vw;
        }
        .intro {
          margin-bottom: 100px;
          margin-top: 50px;
          margin-bottom: 100px;
          padding-bottom: 100px;
        }
      }
    `}</style>
        <style global jsx>{`
      ::selection {
        background: #000;
        color: #FFF;
      }
      body {
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
        margin: 0;
      }
    `}</style>
    </main>
);
