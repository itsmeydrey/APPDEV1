// Callback Functions

function fetchUserMock(callback) {
  setTimeout(() => {
    callback({ name: "Ydrey Ann", age: 20 });
  }, 1000);
}

fetchUserMock((user) => {
  console.log("Got user:", user);
});

// Promises & async/await

function fetchUser() {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ name: "Ydrey Ann", age: 20 }), 1000);
  });
}

async function showUser() {
  try {
    const user = await fetchUser();
    console.log("Got user:", user);
  } catch (error) {
    console.log("Failed to load user");
  }
}

showUser();