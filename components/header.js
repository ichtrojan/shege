import Link from "next/link";

export default () => (
  <header>
    <div className="wrapper">
      <div className="logotype">
          SHEGE️
      </div>
      <div className="navigation">
        <Link href="https://github.com/ichtrojan"><a target="_blank">GitHub</a></Link>
      </div>
      <div className="theme">
        <p>2023</p>
      </div>
    </div>
    <style jsx>{`
      a {
        color: #000;
        margin-right: 20px;
        text-decoration: none;
        border-bottom: 1px solid transparent;
        transition: border .2s ease;
      }
      a:last-child {
        margin-right: 0;
      }
      a :hover {
        border-bottom: 1px solid #000;
      }
      p {
        color: #999;
        margin: 0;
        font-size: 0.750em;
      }
      header {
        background-color:rgba(255, 255, 255, 0.5);
        backdrop-filter: blur(8px);
        max-width: 100%;
        position: sticky;
        top: 0;
        z-index: 1;
      }
      .wrapper {
        align-items: center;
        display: flex;
        justify-content: space-between;
        margin: auto;
        max-width: 980px;
        padding-bottom: 20px;
        padding-left: 20px;
        padding-right: 20px;
        padding-top: 20px;
      }
      @media screen and (max-width: 992px) {
        .navigation {
          display: none;
        }
      }
    `}</style>
  </header>
);
