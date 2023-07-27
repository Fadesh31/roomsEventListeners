import LargeRoom from "./roomsEventListners.js";

function createAndDisplayRoom(name, length, width, height, windows, doorSize, doorType, floorType, doorClosed, wallColor) {
  const room = new LargeRoom(name, length, width, height, windows, doorSize, doorType, floorType, doorClosed, wallColor);

  room.toggleDoor(false);
  room.setNewFloorType("Hardwood");

  const content = `
    <h1 class="largeroom__name">${room.name}</h1>
    <ul class="largeroom__features">
      <li class="largeroom__length">Length:<span> ${room.length}m</span></li>
      <li class="largeroom__width">Width:<span> ${room.width}m</span></li>
      <li class="largeroom__height">Height:<span> ${room.height}m</span></li>
      <li class="largeroom__windows">Windows:<span> ${room.windows}</span></li>
      <li class="largeroom__door">Door size:<span> ${room.door.Size} inches</span></li>
      <li class="largeroom__type">Door Type:<span> ${room.door.Type}</span></li>
      <li class="largeroom__floor">Floor type:<span> ${room.floorType}</span></li>
      <li class="largeroom__door">Door status:<span> ${room.doorClosed}</span></li>
      <li class="largeroom__wall">Wall Color:<span id="wallColor_${room.name.replace(/\s+/g, "").toLowerCase()}">${room.wallColor}</span></li>
    </ul>
    <button class="change-wall-color-button" data-room-name="${room.name}">Change Wall Color</button>
  `;

  const main = document.querySelector(".maincontent");

  const newArticle = document.createElement("article");
  newArticle.classList.add("largeroom");
  newArticle.setAttribute("id", `room_${name.replace(/\s+/g, "").toLowerCase()}`);
  newArticle.innerHTML = content;

  main.append(newArticle);

  // Add event listener to the button
  const changeWallColorButton = newArticle.querySelector(".change-wall-color-button");
  changeWallColorButton.addEventListener("click", () => {
    changeWallColor(room);
  });

  return room;
}

/**
 * Add a navigation section to the DOM
 */
const navContent = `
  <li><a href="#">Home</a></li>
  <li><a href="#">About</a></li>
  <li><a href="#">Backpacks</a></li>
  <li><a href="#">Other things</a></li>
  <li><a href="#">Contact</a></li>
`;

const mainNav = document.createElement("nav");
mainNav.classList.add("main-navigation");
const navList = document.createElement("ul");
navList.innerHTML = navContent;
mainNav.append(navList);

document.querySelector(".siteheader").append(mainNav);


function changeWallColor(room) {
  // Generate a random color for the wall
  const randomColor = generateRandomColor();
  
  // Update the room object's wallColor property
  room.wallColor = randomColor;
  
  // Update the displayed wall color on the web page
  const wallColorElement = document.getElementById(`wallColor_${room.name.replace(/\s+/g, "").toLowerCase()}`);
  wallColorElement.textContent = randomColor;
}

function generateRandomColor() {
  // Generate a random hexadecimal color code
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Create and display rooms
const room1 = createAndDisplayRoom(
  "Living Room",
  20,
  15,
  10,
  3,
  8,
  "wooden",
  "carpet",
  true,
  "beige"
);

const room2 = createAndDisplayRoom(
  "Bedroom",
  18,
  12,
  8,
  2,
  7,
  "wooden",
  "carpet",
  false,
  "light blue"
);

const room3 = createAndDisplayRoom(
  "Kitchen",
  15,
  10,
  9,
  1,
  6,
  "wooden",
  "tile",
  true,
  "white"
);
