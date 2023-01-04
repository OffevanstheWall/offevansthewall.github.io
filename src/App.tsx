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
      <h1>Hi, I'm Jacob Evans</h1>
      <h2>My work:</h2>
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
      </ul>

      <p>
        <a href="https://docs.google.com/document/d/1YGccSPtpC2VxiirIEfTi-VwAqG-qQTn6SkHS4lPbs0E/edit?usp=sharing">
          My Full Resume
        </a>
      </p>
    </div>
  );
}
