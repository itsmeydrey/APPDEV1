// Truthy & Falsy

const values = [0, "", "hi", null, undefined, [], {}];

values.forEach((val) => {
  if (val) {
    console.log(val, "-> truthy");
  } else {
    console.log(val, "-> falsy");
  }
});

// &&, || and !

const username = "ydrey";
const password = "finalsjava!*";

const canLogIn = username !== "" && password !== "";
console.log(canLogIn); // true

const isAdmin = false;
const isSubscriber = true;
const canWatch = isAdmin || isSubscriber;
console.log(canWatch); // true

console.log("" || "JavaScript Refresher");        // "JavaScript Refresher" (first truthy)
console.log(username && "Welcome back, Ydrey!");  // "Welcome back, Ydrey!" (both truthy)
console.log(!canLogIn);                // false