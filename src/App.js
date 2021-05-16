import React from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { Profiles } from "./data";
import "./App.css";
import { HelmetComponent } from "./Helmet";

function App(props) {
  // Page path from the URL (e.g., "/home" or "/1" or "/home/" or "/1/")
  const curPage = props.location.pathname.split('/')?.[1];

  // Page routing
  const detailPages = Profiles.map((d, i) => `${i + 1}`);
  const allPages = ["home", "profiles", "about"].concat(detailPages);
  const selectedPage = curPage && allPages.find((d) => d === curPage) ? curPage : "home";

  const getNameTitle = (d) => d.name + (d.title ? `, ${d.title}` : "");

  // DEBUG
  console.log(props.location, curPage);//.split('/')[1]);

  return (
    <div className="app">
      <HelmetComponent profile={Profiles[+curPage - 1]} />
      <div className="header">
        <a className="title" href="/home">
          Connections&nbsp;
        </a>
        <span className="subtitle">
          &nbsp;Career Paths in Biomedical Informatics
        </span>
        <nav className="nav">
          <a
            className={
              "nav-link " +
              (selectedPage === "home" ? "nav-link-selected" : "")
            }
            href="/home"
          >
            Home
          </a>
          <a
            className={
              "nav-link " +
              (selectedPage === "profiles" ? "nav-link-selected" : "")
            }
            href="/profiles"
          >
            Profiles
          </a>
          <a
            className={
              "nav-link " +
              (selectedPage === "about" ? "nav-link-selected" : "")
            }
            href="/about"
          >
            About
          </a>
        </nav>
      </div>
      <div className="body">
        {/* --------------- HOME --------------- */}
        {selectedPage === "home" ? (
          <div className="home">
            <p className="home-title plain-text">
              This video project documents the training experiences of
              predoctoral and postdoctoral trainees from 16 National Library of
              Medicine-funded biomedical informatics and data science training
              programs.
            </p>
            <div className="participant-detail-video">
              <iframe
                width="100%"
                height="100%"
                src={"https://www.youtube.com/embed/sigaui40EyE"}
                title={"Connections: Career Paths in Biomedical Informatics"}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <p className="home-text plain-text">
              America’s biomedical informatics training programs are preparing
              individuals from diverse personal, educational, and professional
              backgrounds for a broad range of meaningful career opportunities.
              These opportunities enable program graduates to leverage
              biomedical informatics in basic research, medicine, healthcare
              systems, and other increasingly data-driven areas.
              <br />
              <br />
              As of 2021, among these training programs are 16{" "}
              <a
                target="_blank"
                href="https://www.nlm.nih.gov/ep/GrantTrainInstitute.html"
              >
                National Library of Medicine training programs
              </a>{" "}
              at Columbia University, Harvard University, Indiana University,
              Oregon Health & Science University, Rice University, Stanford
              University, State University of New York at Buffalo, University of
              California San Diego, University of Colorado, University of North
              Carolina Chapel Hill, University of Pittsburgh, University of
              Utah, University of Washington, University of Wisconsin Madison,
              Vanderbilt University, and Yale University.
              <br />
              <br />
              At each program, individuals from diverse backgrounds come
              together for a distinct moment in time. These individuals include
              computer scientists, statisticians, engineers, and data scientists
              who are interested in learning about and contributing to biology,
              medicine, and healthcare. There are also individuals from across
              the healthcare sector—clinical scientists, biologists, medical
              doctors, healthcare administrators, and entrepreneurs—who want to
              gain data-related skills to improve health and advance their
              careers. Program participants are excited to be exposed to
              individuals from different backgrounds, learn together, and work
              collaboratively to improve health. Connections: Career Paths in
              Biomedical Informatics documents their stories.
              <br />
              <br />
              Interviews were recorded in Spring 2019 and Summer 2019.
            </p>
          </div>
        ) : null}
        {/* --------------- ABOUT --------------- */}
        {selectedPage === "about" ? (
          <div className="about">
            <p className="about-text plain-text">
              Connections is funded by the National Library of Medicine
              Administrative Supplement Funds to the{" "}
              <a
                target="_blank"
                href="https://dbmi.hms.harvard.edu/education/nlm-biomedical-informatics-data-science-fellowship"
              >
                Harvard Medical School Biomedical Informatics and Data Science
                Training program
              </a>
              , 3T15LM007092-26S1.
              <h2>Principal Investigators</h2>
              <a
                target="_blank"
                href="https://dbmi.hms.harvard.edu/people/nils-gehlenborg"
              >
                Nils Gehlenborg, PhD
              </a>{" "}
              and{" "}
              <a
                target="_blank"
                href="https://dbmi.hms.harvard.edu/people/alexa-mccray"
              >
                Alexa McCray, PhD
              </a>{" "}
              in the Department of Biomedical Informatics at Harvard Medical
              School led the production of this video project.
              <h2>Production Dates</h2>
              Interviews were recorded in Spring 2019 and Summer 2019.
              Postproduction was completed in 2020.
              <h2>License</h2>
              This website and all content are made available under the{" "}
              <a
                target="_blank"
                href="https://creativecommons.org/licenses/by/4.0/"
              >
                CC-BY 4.0 license
              </a>
              .
            </p>
          </div>
        ) : null}
        {/* --------------- LIST OF PARTICIPANTS --------------- */}
        {selectedPage === "profiles" ? (
          <>
            <div className="participant-list-title">Profiles</div>
            <div className="gallery">
              {Profiles.map((d, i) => (
                // <div className='item' onClick={() => {window.open(pkg.homepage + '#/' + (i + 1) + '', "_self")}} key={d.name}>
                <a className="item" href={"/" + (i + 1)} key={d.name}>
                  <img className="headshot" src={d.img} />
                  <div className="p-name-title">{getNameTitle(d)}</div>
                  <div className="p-inst">
                    <span className="p-inst-prefix">{"Trained at "}</span>
                    {d.institution}
                  </div>
                </a>
              ))}
            </div>
          </>
        ) : null}
        {/* --------------- PARTICIPANTS DETAIL --------------- */}
        {detailPages.includes(curPage) ? (
          <>
            <div key={curPage} className="participant-detail">
              <div className="participant-detail-title">
                {Profiles[+curPage - 1].csTitle}
                <div className="participant-detail-subtitle">
                  {`Trained as a ${Profiles[
                    +curPage - 1
                  ].role.toLocaleLowerCase()} at `}
                  <a
                    target="_blank"
                    href={Profiles[+curPage - 1].link}
                  >
                    {Profiles[+curPage - 1].institution}
                  </a>
                </div>
              </div>
              <div className="participant-detail-video">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${
                    Profiles[+curPage - 1].csYt
                  }`}
                  title={Profiles[+curPage - 1].csTitle}
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
                  children={Profiles[+curPage - 1].csBody}
                />
              </div>
              <div className="release-data-desc">
                Trainee information current as of 2019.
              </div>
            </div>
            <div className="h-splitter" />
            <div className="next-prev-button">
              {0 !== +curPage - 1 ? (
                <a
                  className="prev-button"
                  href={`/${+curPage - 1}`}
                >
                  {`← Previous: ${Profiles[+curPage - 2].name}`}
                </a>
              ) : null}
              {/* Just to reserve proper height */}
              {0 === +curPage - 1 ? (
                <a className="prev-button prev-button-hidden">{"-"}</a>
              ) : null}
              {Profiles.length - 1 !== +curPage - 1 ? (
                <a
                  className="next-button"
                  href={`/${+curPage + 1}`}
                >
                  {`Next: ${Profiles[+curPage].name} →`}
                </a>
              ) : null}
            </div>
          </>
        ) : null}
      </div>
      <div className="footer">
        Produced at{" "}
          <span className='alt-link' onClick={() => window.open('https://dbmi.hms.harvard.edu/', '_blank')}>
            Harvard Medical School
          </span>{" "}
          with funding by the{" "}
          <span className='alt-link' onClick={() => window.open('https://www.nlm.nih.gov/', '_blank')}>
            National Library of Medicine
          </span>
        . All materials licensed under CC-BY 4.0.
      </div>
    </div>
  );
}

export default App;
