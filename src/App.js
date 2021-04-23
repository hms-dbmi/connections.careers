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
        <a
          className="title"
          href="#/home"
        >
          Connections&nbsp;
        </a>
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
        {/* --------------- HOME --------------- */}
        {selectedMenu === "/home" ? (
          <div className="home">
            <p className='home-title plain-text'>
              This video project documents the training experiences of predoctoral and postdoctoral trainees from 16 National Library of Medicine-funded biomedical informatics and data science training programs.
            </p>
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
            <p className="home-text plain-text">
              America’s biomedical informatics training programs are preparing individuals from diverse personal, educational, and professional backgrounds for a broad range of meaningful career opportunities. These opportunities enable program graduates to leverage biomedical informatics in basic research, medicine, healthcare systems, and other increasingly data-driven areas.
              <br />
              <br />
              As of 2021, among these training programs are 16 <a target="_blank" href="https://www.nlm.nih.gov/ep/GrantTrainInstitute.html">National Library of Medicine training programs</a> at Columbia University, Harvard University, Indiana University, Oregon Health & Science University, Rice University, Stanford University, State University of New York at Buffalo, University of California San Diego, University of Colorado, University of North Carolina Chapel Hill, University of Pittsburgh, University of Utah, University of Washington, University of Wisconsin Madison, Vanderbilt University, and Yale University.
              <br />
              <br />
              At each program, individuals from diverse backgrounds come together for a distinct moment in time. These individuals include computer scientists, statisticians, engineers, and data scientists who are interested in learning about and contributing to biology, medicine, and healthcare. There are also individuals from across the healthcare sector—clinical scientists, biologists, medical doctors, healthcare administrators, and entrepreneurs—who want to gain data-related skills to improve health and advance their careers. Program participants are excited to be exposed to individuals from different backgrounds, learn together, and work collaboratively to improve health. Connections: Career Paths in Biomedical Informatics documents their stories.
              <br />
              <br />
              Interviews were recorded in Spring 2019 and Summer 2019.
            </p>
          </div>
        ) : null}
        {/* --------------- ABOUT --------------- */}
        {selectedMenu === "/about" ? (
          <div className="about">
            <p className='about-text plain-text'>
              Connections is funded by the National Library of Medicine Administrative Supplement Funds to the <a target="_blank" href="https://dbmi.hms.harvard.edu/education/nlm-biomedical-informatics-data-science-fellowship">Harvard Medical School Biomedical Informatics and Data Science Training program</a>, 3T15LM007092-26S1. 
              <h2>Principal Investigators</h2>
              <a target="_blank" href="https://dbmi.hms.harvard.edu/people/nils-gehlenborg">Nils Gehlenborg, PhD</a> and <a target="_blank" href="https://dbmi.hms.harvard.edu/people/alexa-mccray">Alexa McCray, PhD</a> in the Department of Biomedical Informatics at Harvard Medical School led the production of this video project.
              <h2>Production Dates</h2>
              Interviews were recorded in Spring 2019 and Summer 2019. Postproduction was completed in 2020. 
              <h2>License</h2>
              This website and all content are made available under the <a target="_blank" href="https://creativecommons.org/licenses/by/4.0/">CC-BY 4.0 license</a>.
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
                  <div className='p-inst'><span className='p-inst-prefix'>{'Trained at '}</span>{d.institution}</div>
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
              <div className="participant-detail-subtitle">
                {`Trained as a ${data[+curPage.split("/")[1] - 1].role.toLocaleLowerCase()} at `}<a target="_blank" href={data[+curPage.split("/")[1] - 1].link}>{data[+curPage.split("/")[1] - 1].institution}</a>
              </div>
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
        Produced at <a href="https://dbmi.hms.harvard.edu/" target="_blank">Harvard Medical School</a> with funding by the <a href="https://www.nlm.nih.gov/" target="_blank">National Library of Medicine</a>. All materials licensed under CC-BY 4.0.
      </div>
    </div>
  );
}

export default App;
