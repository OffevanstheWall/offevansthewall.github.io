import { useEffect, useState } from "react";
import "./App.css";

async function getGithubData(): Promise<typeof import("./repo.json")> {
  return fetch("https://api.github.com/users/offevansthewall/repos").then(
    (response) => {
      return response.json();
    }
  );
}

export default function App() {
  const [repos, setRepos] = useState<typeof import("./repo.json")>([]);

  useEffect(() => {
    getGithubData().then((x) => {
      console.log(x);
      setRepos(x);
    });
  }, []);

  return (
    <div className="App">
      <div className="header">
        <div className="container">
          <h1 id="jacob-evans">Hi I'm, Jacob Evans</h1>
        </div>
      </div>
      <div className="container">
        <h2 id="education">Education</h2>
        <h3 id="utah-state-university---huntsman-school-of-business">
          Utah State University - Huntsman School of Business
        </h3>
        <p>
          <em>Bachelor of Science in Management Information Systems</em>
        </p>
      </div>
      <div className="container">
        <h2 id="experience">Experience</h2>
        <h3>My work:</h3>
        <ul>
          {repos
            .filter((x) => !x.name.includes("offevansthewall"))
            .map((repo) => {
              return (
                <li>
                  <h3>{repo.name}</h3>
                  <nav>
                    <a href={repo.homepage}>homepage</a>{" "}
                    <a href={repo.html_url}>repo</a>
                  </nav>
                  <p>{repo.description}</p>
                </li>
              );
            })}
          <li>
            <h3>GeoConTexas</h3>
            <nav>
              <a href="https://geocontexas.com">homepage</a>{" "}
            </nav>
            <p>A quick project built using a website builder.</p>
          </li>
        </ul>
        <h3 id="redbird-metrics-llc">Redbird Metrics LLC</h3>
        <p>
          <em>Front End Web Developer</em>
        </p>
        <ul>
          <li>
            <p>Collaborated with Team</p>
          </li>
          <li>
            <p>Reviewed UI mockups with graphic designers</p>
          </li>
          <li>
            <p>Created User Interfaces using HTML, CSS, Javascript</p>
          </li>
          <li>
            <p>
              Set weekly and daily metrics to increase efficiency and time
              management using scrum development methodology
            </p>
          </li>
          <li>
            <p>Developed relationships with fellow developers</p>
          </li>
        </ul>
        <h3 id="berrys-bullets">Berrys Bullets</h3>
        <p>
          <em>Electroplating Technician</em>
        </p>
        <ul>
          <li>
            <p>Forklifted lead cores into acid wash</p>
          </li>
          <li>
            <p>
              Measured bullet samples for statistical variance in weight and
              dimensions
            </p>
          </li>
          <li>
            <p>Ensured that bullets plate with copper to desired weight</p>
          </li>
          <li>
            <p>Loaded copper into plating baths</p>
          </li>
          <li>
            <p>Finished bullets and loaded into pallets for packaging</p>
          </li>
        </ul>
        <h3 id="geoconstructors-ltd">GeoConstructors LTD</h3>
        <p>
          <em>ICF and Metal Installer</em>
        </p>
        <ul>
          <li>
            <p>Installs ICF(Integrated Concrete Forms)</p>
          </li>
          <li>
            <p>Installs forms while maintaining plumb, true and square</p>
          </li>
          <li>
            <p>Mixes, pours, and finishes concrete walls</p>
          </li>
          <li>
            <p>Measures, cuts and welds metal structures</p>
          </li>
        </ul>
        <h2 id="leadership-and-service">Leadership and Service</h2>
        <h3 id="the-church-of-jesus-christ-of-latter-day-saints">
          The Church of Jesus Christ of Latter Day Saints
        </h3>
        <p>
          <em>Volunteer Representative</em>
        </p>
        <ul>
          <li>
            <p>Volunteered Daily with locals</p>
          </li>
          <li>
            <p>
              Trained 3 people in work ethic, goal achievement and language
              learning
            </p>
          </li>
          <li>
            <p>
              Set weekly and daily plans to attain metrics to increase
              efficiency and time management
            </p>
          </li>
          <li>
            <p>Developed relationships with people</p>
          </li>
        </ul>
      </div>
      <p>
        <a href="https://docs.google.com/document/d/1YGccSPtpC2VxiirIEfTi-VwAqG-qQTn6SkHS4lPbs0E/edit?usp=sharing">
          My Full Resume
        </a>
      </p>
    </div>
  );
}
