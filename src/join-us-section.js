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
				localStorage.setItem("subscriptionEmail", email);
				input.style.display = "none";
				document.getElementById("subscribe").textContent = "Unsubscribe";
			} else {
				alert("is not valid email");
			}
  
			input.value = "";
		}
  
		form.addEventListener("submit", getFormInputValue);
    
		const savedEmail = localStorage.getItem("subscriptionEmail");
		if (savedEmail) {
			input.value = savedEmail;
		}
  
		document.getElementById("subscribe").addEventListener("click", function () {
			if (this.textContent === "Unsubscribe") {
				localStorage.removeItem("subscriptionEmail");
				input.style.display = "flex";
				form.style.display = "flex";
				this.textContent = "Subscribe";
			}
		});
	}
  
	
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
