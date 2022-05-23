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
    const regearRow = document.createElement('tr');
    regearRow.className = 'player-death';

    const regearId = document.createElement('td');
    regearId.className = 'regear-id';
    regearId.innerHTML = `${regearRequest.regear_id}`;

    const regearStatus = document.createElement('td');
    regearStatus.className = 'status';
    regearStatus.innerHTML = `${regearRequest.status}`;

    const playerName = document.createElement('td');
    playerName.className = 'player-name';
    playerName.innerHTML = `${regearRequest.character_name}`;

    const guildName = document.createElement('td');
    guildName.className = 'guild-name';
    guildName.innerHTML = `${regearRequest.guild_name}`;

    const itemPower = document.createElement('td');
    itemPower.className = 'item-power';
    itemPower.innerHTML = `${regearRequest.item_power}`;

    const mainHand = document.createElement('td');
    mainHand.className = 'main-hand';
    mainHand.innerHTML = `${regearRequest.main_tier} ${regearRequest.main_hand}`;

    const head = document.createElement('td');
    head.className = 'head-piece';
    head.innerHTML = `${regearRequest.head_tier} ${regearRequest.head_piece}`;

    const chest = document.createElement('td');
    chest.className = 'chest-armor';
    chest.innerHTML = `${regearRequest.chest_tier} ${regearRequest.chest_armor}`;

    const shoes = document.createElement('td');
    shoes.className = 'shoes';
    shoes.innerHTML = `${regearRequest.shoes_tier} ${regearRequest.shoes}`;

    const timeOfDeath = document.createElement('td');
    timeOfDeath.className = 'time-of-death';
    timeOfDeath.innerHTML = `${regearRequest.time_of_death}`;

    const eventId = document.createElement('td');
    eventId.className = 'event-id';
    eventId.innerHTML = `${regearRequest.event_id}`;

    regearRow.appendChild(regearId);
    regearRow.appendChild(regearStatus);
    regearRow.appendChild(playerName);
    regearRow.appendChild(guildName);
    regearRow.appendChild(itemPower);
    regearRow.appendChild(mainHand);
    regearRow.appendChild(head);
    regearRow.appendChild(chest);
    regearRow.appendChild(shoes);
    regearRow.appendChild(timeOfDeath);
    regearRow.appendChild(eventId);
    regearsArr.push(regearRow);
  }
};

const addToDoc = async (regearsArr) => {
  await generateHTML();
  const regearsTable = document.getElementsByClassName('regears-table-body');
  for (const content of regearsArr) {
    regearsTable[0].appendChild(content);
  }
};

addToDoc(regearsArr);
