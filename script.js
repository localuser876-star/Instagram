/*
    SCHOOL PROJECT MOCKUP

    IMPORTANT:
    The real-looking login fields are NOT sent to Supabase.
    Only the clearly labeled "Demo User ID" field is stored.
*/


/* =========================================================
   SUPABASE
========================================================= */

const SUPABASE_URL =
    "https://mqwkukaiifvlgsjnynoe.supabase.co";

const SUPABASE_PUBLISHABLE_KEY =
    "sb_publishable_8Lce10p93l9kP3RBNFj08w_2jgSYZGc";

const supabaseClient =
    window.supabase.createClient(
        SUPABASE_URL,
        SUPABASE_PUBLISHABLE_KEY
    );


/* =========================================================
   DEMO USER ID SUBMISSION
========================================================= */

const demoUserIdForm =
    document.getElementById("demoUserIdForm");

if (demoUserIdForm) {

    demoUserIdForm.addEventListener(
        "submit",
        async function (event) {

            event.preventDefault();

            const demoUserIdInput =
                document.getElementById("demoUserIdInput");

            const demoUserId =
                demoUserIdInput
                    ? demoUserIdInput.value.trim()
                    : "";

            const { error } =
                await supabaseClient
                    .from("login_entries")
                    .insert({
                        user_id: demoUserId
                    });

            if (error) {

                console.error(
                    "Supabase error:",
                    error
                );

                alert(
                    "There was a problem saving the demo ID."
                );

                return;
            }

            alert(
                "Demo user ID saved successfully."
            );

            demoUserIdInput.value = "";

        }
    );

}


/* =========================================================
   DESKTOP LOGIN
========================================================= */

const loginForm =
    document.getElementById("demoLoginForm");

if (loginForm) {

    loginForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            window.location.href =
                "https://www.instagram.com/";

        }
    );

}


/* =========================================================
   FORGOT PASSWORD
========================================================= */

const forgotPassword =
    document.getElementById("forgotPassword");

if (forgotPassword) {

    forgotPassword.addEventListener(
        "click",
        function () {

            window.location.href =
                "https://www.instagram.com/accounts/password/reset/";

        }
    );

}


/* =========================================================
   CREATE ACCOUNT
========================================================= */

const createAccount =
    document.getElementById("createAccount");

if (createAccount) {

    createAccount.addEventListener(
        "click",
        function () {

            window.location.href =
                "https://www.instagram.com/accounts/emailsignup/";

        }
    );

}


/* =========================================================
   FACEBOOK
========================================================= */

const facebookButton =
    document.getElementById("facebookButton");

if (facebookButton) {

    facebookButton.addEventListener(
        "click",
        function () {

            // Demo only.

        }
    );

}


/* =========================================================
   DESKTOP LANGUAGE
========================================================= */

const languageButton =
    document.getElementById("languageButton");

if (languageButton) {

    languageButton.addEventListener(
        "click",
        function () {

            // Demo only.

        }
    );

}


/* =========================================================
   MOBILE OPEN APP
========================================================= */

const mobileOpenInstagram =
    document.getElementById("mobileOpenInstagram");

const mobileOpenTop =
    document.getElementById("mobileOpenTop");


function showOpenAppMessage() {

    // Demo only.

}


if (mobileOpenInstagram) {

    mobileOpenInstagram.addEventListener(
        "click",
        showOpenAppMessage
    );

}


if (mobileOpenTop) {

    mobileOpenTop.addEventListener(
        "click",
        showOpenAppMessage
    );

}


/* =========================================================
   MOBILE LOGIN OVERLAY
========================================================= */

const mobileLogin =
    document.getElementById("mobileLogin");

const mobileTopLogin =
    document.getElementById("mobileTopLogin");

const mobileLoginOverlay =
    document.getElementById("mobileLoginOverlay");

const closeMobileLogin =
    document.getElementById("closeMobileLogin");


function openMobileLogin() {

    if (mobileLoginOverlay) {

        mobileLoginOverlay.classList.add("active");

        document.body.style.overflow =
            "hidden";

    }

}


function closeMobileLoginBox() {

    if (mobileLoginOverlay) {

        mobileLoginOverlay.classList.remove("active");

        document.body.style.overflow =
            "";

    }

}


if (mobileLogin) {

    mobileLogin.addEventListener(
        "click",
        openMobileLogin
    );

}


if (mobileTopLogin) {

    mobileTopLogin.addEventListener(
        "click",
        openMobileLogin
    );

}


if (closeMobileLogin) {

    closeMobileLogin.addEventListener(
        "click",
        closeMobileLoginBox
    );

}


/* =========================================================
   CLOSE MOBILE LOGIN WHEN CLICKING OUTSIDE
========================================================= */

if (mobileLoginOverlay) {

    mobileLoginOverlay.addEventListener(
        "click",
        function (event) {

            if (
                event.target ===
                mobileLoginOverlay
            ) {

                closeMobileLoginBox();

            }

        }
    );

}


/* =========================================================
   MOBILE LOGIN FORM
========================================================= */

const mobileLoginForm =
    document.getElementById("mobileLoginForm");

if (mobileLoginForm) {

    mobileLoginForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            window.location.href =
                "https://www.instagram.com/";

        }
    );

}


/* =========================================================
   MOBILE FORGOT PASSWORD
========================================================= */

const mobileForgot =
    document.getElementById("mobileForgot");

if (mobileForgot) {

    mobileForgot.addEventListener(
        "click",
        function () {

            window.location.href =
                "https://www.instagram.com/accounts/password/reset/";

        }
    );

}


/* =========================================================
   MOBILE SIGN UP
========================================================= */

const mobileSignup =
    document.getElementById("mobileSignup");

if (mobileSignup) {

    mobileSignup.addEventListener(
        "click",
        function () {

            // Demo only.

        }
    );

}


/* =========================================================
   MOBILE LANGUAGE
========================================================= */

const mobileLanguage =
    document.getElementById("mobileLanguage");

if (mobileLanguage) {

    mobileLanguage.addEventListener(
        "click",
        function () {

            alert(
                "Language selector — demo only."
            );

        }
    );

}
