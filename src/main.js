import App from "./App.svelte";

new App({
  target: document.body,
  props: {
    // What's your name?
    name: "Rupert Ettrich",
    // In the following fiels you can either give a single string,
    // or an array of bullet points

    // What do you associate with the term 'CI/CD'?
    associations: [
      "Bitbucket",
      "Pipelines",
      "Tests",
      "SonarQube",
      "Docker",
      "Kubernetes",
    ],
    // Which CI/CD tools do you use in your project?
    tools: "Jenkins, SonarQube",
    // What do you want to learn in this workshop?
    expectations: [
      "How Jenkins works, how to setup CI/CD pipelines on github, and some general CI/CD concepts",
    ],
    // What do you like to do when you're not coding?
    hobbies: ["play guitar", "beach volleyball", "video games"],
  },
});
