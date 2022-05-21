let regearData;
const regearsArr = [];

const fetchRegears = async () => {
  const response = await fetch(
    'https://albion-regear-backend.herokuapp.com/regears'
  );
  const regears = await response.json();

  regearData = regears.data;
};

const generateHTML = async () => {
  await fetchRegears();

  for (const regearRequest of regearData) {
    const regearDiv = document.createElement('div');
    regearDiv.className = 'player-death';

    const playerName = document.createElement('h4');
    playerName.className = 'player-name';
    playerName.innerHTML = `Player Name: ${regearRequest.character_name}`;

    const guildName = document.createElement('p');
    guildName.className = 'guild-name';
    guildName.innerHTML = `Guild: ${regearRequest.guild_name}`;

    const itemPower = document.createElement('p');
    itemPower.className = 'item-power';
    itemPower.innerHTML = `IP: ${regearRequest.item_power}`;

    const mainHand = document.createElement('p');
    mainHand.className = 'main-hand';
    mainHand.innerHTML = `Main Hand: ${regearRequest.main_tier} ${regearRequest.main_hand}`;

    const head = document.createElement('p');
    head.className = 'head-piece';
    head.innerHTML = `Head Piece: ${regearRequest.head_tier} ${regearRequest.head_piece}`;

    const chest = document.createElement('p');
    chest.className = 'chest-armor';
    chest.innerHTML = `Chest Armor: ${regearRequest.chest_tier} ${regearRequest.chest_armor}`;

    const shoes = document.createElement('p');
    shoes.className = 'shoes';
    shoes.innerHTML = `Shoes: ${regearRequest.shoes_tier} ${regearRequest.shoes}`;

    const timeOfDeath = document.createElement('p');
    timeOfDeath.className = 'time-of-death';
    timeOfDeath.innerHTML = `Time of Death: ${regearRequest.time_of_death}`;

    const regearStatus = document.createElement('p');
    regearStatus.className = 'status';
    regearStatus.innerHTML = `Status: ${regearRequest.status}`;

    const regearId = document.createElement('p');
    regearId.className = 'regear-id';
    regearId.innerHTML = `Regear ID: ${regearRequest.regear_id}`;

    const eventId = document.createElement('p');
    eventId.className = 'event-id';
    eventId.innerHTML = `Event ID: ${regearRequest.event_id}`;

    regearDiv.appendChild(playerName);
    regearDiv.appendChild(guildName);
    regearDiv.appendChild(itemPower);
    regearDiv.appendChild(mainHand);
    regearDiv.appendChild(head);
    regearDiv.appendChild(chest);
    regearDiv.appendChild(shoes);
    regearDiv.appendChild(timeOfDeath);
    regearDiv.appendChild(regearStatus);
    regearDiv.appendChild(regearId);
    regearDiv.appendChild(eventId);
    regearsArr.push(regearDiv);
  }
};

const addToDoc = async (regearsArr) => {
  await generateHTML();
  const regearsSection = document.getElementsByClassName('regears-list');
  for (const content of regearsArr) {
    regearsSection[0].appendChild(content);
  }
};

generateHTML(regearData);
addToDoc(regearsArr);
