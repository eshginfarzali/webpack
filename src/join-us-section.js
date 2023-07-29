import validate from "./email-validator.js";

const JoinUsSection = (function () {
    function createSection(title, buttonText) {
      const joinSection = document.getElementById("join-our-program");
      joinSection.innerHTML = `
        <h2>${title}</h2>
        <h3>Sed do eiusmod tempor incididunt <br />
        ut labore et dolore magna aliqua.</h3>
        <form id="join-form">
            <input id="inp" type="email" name="email" value="" placeholder="Enter your email" required />
            <button id="subscribe" class="join-team-btn" type="submit">${buttonText}</button>
        </form>
      `;
      const form = document.getElementById("join-form");
      const input = document.getElementById("inp");
      function getFormInputValue(e) {
        e.preventDefault();
        const email = input.value;
        
        if (validate(email)) {
          console.log("Email is valid:", email);
          alert(`Email is valid: ${email}`);
        } else {
          console.log("Email is not valid:", email);
          alert("Email is not valid");
        }
  
        input.value = "";
      }
  
      form.addEventListener("submit", getFormInputValue);
    }
  
    // Public methods
    return {
      createStandardProgram: function () {
        createSection("Join Our Program", "Subscribe");
      },
      createAdvancedProgram: function () {
        createSection("Join Our Advanced Program", "Subscribe to Advanced Program");
      },
    };
  })();
  
  export default JoinUsSection;


