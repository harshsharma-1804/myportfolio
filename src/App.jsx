import React from "react";
import Header from "./Components/header";
import Main from "./Components/main";
import Footer from "./Components/footer";

const siteProps = {
  name: "Harsh Vardhan",
  surname: "Sharma",
  title: "Web Designer",
  email: "harshvsharma1804@gmail.com",
  gitHub: "harshsharma-1804",
  instagram: "harshsharma_1804",
  linkedIn: "harshvsharma1804",
  medium: "",
  twitter: "harshsharma1804",
  youTube: "Code",
};


const App = () => {
  return (
    <div>
      <Header/>
      <Main name={siteProps.name} surname={siteProps.surname} title={siteProps.title}/>
      <Footer {...siteProps}/>
    </div>
  );
};

export default App;