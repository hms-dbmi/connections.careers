import pkg from "../package.json";
import { data } from "./data";
import React from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import home from "./rsc/home.png";
import * as qs from "qs";
import footer_logo from "./footer-logo.png";
import "./App.css";

function App(props) {
  // page path from URL
  const urlParams = qs.parse(props.location.search, {
    ignoreQueryPrefix: true,
  });
  const curPage = props.location.pathname; // urlParams?.page; //

  const participantsPages = data.map((d, i) => `/${i + 1}`);
  const allPages = ["/home", "/participants", "/about"].concat(
    participantsPages
  );
  const selectedMenu =
    curPage && allPages.find((d) => d === curPage) ? curPage : allPages[0];

  const getNameTitle = (d) => d.name + (d.title ? `, ${d.title}` : "");

  // DEBUG
  // console.log(props.location, curPage);//.split('/')[1]);

  return (
    <div className="app">
      <div className="header">
        <span
          className="title"
          onClick={() => window.open(pkg.homepage, "_self")}
        >
          Connections&nbsp;
        </span>
        <span className="subtitle">
          &nbsp;Career Paths in Biomedical Informatics
        </span>
        <nav className="nav">
          <a
            className={
              "nav-link " +
              (selectedMenu === "/home" ? "nav-link-selected" : "")
            }
            href="#/home"
          >
            Home
          </a>
          <a
            className={
              "nav-link " +
              (selectedMenu === "/participants" ? "nav-link-selected" : "")
            }
            href="#/participants"
          >
            Participants
          </a>
          <a
            className={
              "nav-link " +
              (selectedMenu === "/about" ? "nav-link-selected" : "")
            }
            href="#/about"
          >
            About
          </a>
          {/* <span className="nav-link" onClick={() => window.open(pkg.homepage + '#/home', "_self")}>Home</span>
          <span className="nav-link" onClick={() => window.open(pkg.homepage + '#/participants', "_self")}>Participants</span>
          <span className="nav-link" onClick={() => window.open(pkg.homepage + '#/about', "_self")}>About</span> */}
        </nav>
      </div>
      <div className="body">
        {/* --------------- LIST OF PARTICIPANTS --------------- */}
        {selectedMenu === "/home" ? (
          <div className="home">
            <div className="participant-detail-video">
              <iframe
                width="100%"
                height="100%"
                src={'https://www.youtube.com/embed/sigaui40EyE'}
                title={'Connections: Career Paths in Biomedical Informatics'}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <p className="home-text">
              (placeholder) Trainees from across the 16 National of Library of
              Medicine (NLM) university-based Biomedical Informatics and Data
              Science Research Trainees programs will be featured in 16-part
              video series titled Connections: Career Paths in Biomedical
              Informatics. The 16 video testimonials capture the career paths of
              NLM training grant graduates.
              <br />
              <br />
              The video project is funded by the National Library of Medicine
              Administrative Supplement Funds to the Harvard Medical School
              Biomedical Informatics and Data Science Training program,
              3T15LM007092-26S1. The videos will be available under the CC-BY
              4.0 license.
            </p>
          </div>
        ) : null}
        {/* --------------- LIST OF PARTICIPANTS --------------- */}
        {selectedMenu === "/participants" ? (
          <>
            <div className="participant-list-title">Participants</div>
            <div className="gallery">
              {data.map((d, i) => (
                // <div className='item' onClick={() => {window.open(pkg.homepage + '#/' + (i + 1) + '', "_self")}} key={d.name}>
                <a className="item" href={"#/" + (i + 1)} key={d.name}>
                  <img className="headshot" src={d.img} />
                  <div className="p-name-title">{getNameTitle(d)}</div>
                  <div className='p-inst'>{d.institution}</div>
                </a>
              ))}
            </div>
          </>
        ) : null}
        {/* --------------- PARTICIPANTS DETAIL --------------- */}
        {participantsPages.includes(curPage) ? (
          <>
          <div key={curPage} className="participant-detail">
            <div className="participant-detail-title">
              {data[+curPage.split("/")[1] - 1].csTitle}
            </div>
            <div className="participant-detail-video">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${
                  data[+curPage.split("/")[1] - 1].csYt
                }`}
                title={data[+curPage.split("/")[1] - 1].csTitle}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div>
              <ReactMarkdown
                className="md"
                remarkPlugins={[gfm]}
                rehypePlugins={[rehypeRaw]}
                children={data[+curPage.split("/")[1] - 1].csBody}
              />
            </div>
          </div>
          <div className="h-splitter"/>
          <div className="next-prev-button">
            {0 !== (+curPage.split("/")[1] - 1) ?
              <a className="prev-button" href={`#/${(+curPage.split("/")[1] - 1)}`}>
                {`← Previous: ${data[(+curPage.split("/")[1] - 2)].name}`}
              </a> : null}
              {/* Just to reserve proper height */}
              {0 === (+curPage.split("/")[1] - 1) ? <a className="prev-button prev-button-hidden">{'-'}</a> : null}
            {(data.length -1) !== (+curPage.split("/")[1] - 1) ?
              <a className="next-button" href={`#/${(+curPage.split("/")[1] + 1)}`}>
                {`Next: ${data[(+curPage.split("/")[1])].name} →`}
              </a> : null}
          </div>
          </>
        ) : null}
      </div>
      <div className="footer">
        <div>
          © 2021{" "}
          <a href="https://dbmi.hms.harvard.edu/" target="_blank">
            Department of Biomedical Informatics
          </a>{" "}
          /{" "}
          <a href="https://hms.harvard.edu/" target="_blank">
            Harvard Medical School
          </a>
        </div>
        {/* <img className="footer-logo" src={footer_logo}/> */}
      </div>
    </div>
  );
}

export default App;
