import JoinUsSection from "./join-us-section.js";
import validate from "./email-validator.js";
import './styles/style.css'
import './styles/normalize.css'

const sectionCreator = {
  create: function (type) {
    switch (type) {
      case "standard":
        return JoinUsSection.createStandardProgram();
      case "advanced":
        return JoinUsSection.createAdvancedProgram();
      default:
        throw new Error("Invalid program type.");
    }
  },
};

// Use the factory method to create the standard program section
sectionCreator.create("standard");
