import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
const cround1 = [
  {
    id: 1,
    Name: "Mohan Kumar P R",
    Block: "Vivo 502",
    Gender: "Male",
    Cricket: "1",
    Volleyball: "1",
    Throwball: "1",
    Handball: "1",
    "Kho Kho": "1",
    "Water Polo": "1",
    "Water Throwball": "1",
    "Tug Of War": "1",
    Basketball: "1",
    Football: "1",
    Badminton: "1",
    "Lawn Tennis": "1",
    "Table Tennis": "0",
    basePrice: 2,
  },
  {
    id: 2,
    Name: "Santosh",
    Block: "Magnifica 804",
    Gender: "Male",
    Cricket: "1",
    Volleyball: "1",
    Throwball: "1",
    Handball: "1",
    "Kho Kho": "0",
    "Water Polo": "1",
    "Water Throwball": "1",
    "Tug Of War": "1",
    Basketball: "1",
    Football: "1",
    Badminton: "0",
    "Lawn Tennis": "",
    "Table Tennis": "",
    basePrice: 2,
  },
  {
    id: 3,
    Name: "Rakesh R",
    Block: "Bella G02",
    Gender: "Male",
    Cricket: "1",
    Volleyball: "1",
    Throwball: "1",
    Handball: "1",
    "Kho Kho": "1",
    "Water Polo": "1",
    "Water Throwball": "1",
    "Tug Of War": "1",
    Basketball: "0",
    Football: "1",
    Badminton: "1",
    "Lawn Tennis": "1",
    "Table Tennis": "1",
    basePrice: 2,
  },
  {
    id: 4,
    Name: "Kamaksha",
    Block: "Alta G1",
    Gender: "Male",
    Cricket: "1",
    Volleyball: "1",
    Throwball: "1",
    Handball: "1",
    "Kho Kho": "1",
    "Water Polo": "1",
    "Water Throwball": "1",
    "Tug Of War": "1",
    Basketball: "1",
    Football: "1",
    Badminton: "1",
    "Lawn Tennis": "1",
    "Table Tennis": "1",
    basePrice: 2,
  },
  {
    id: 5,
    Name: "Rajendraa",
    Block: "Florido 301",
    Gender: "Male",
    Cricket: "0",
    Volleyball: "1",
    Throwball: "1",
    Handball: "0",
    "Kho Kho": "0",
    "Water Polo": "0",
    "Water Throwball": "0",
    "Tug Of War": "1",
    Basketball: "0",
    Football: "0",
    Badminton: "1",
    "Lawn Tennis": "0",
    "Table Tennis": "0",
    basePrice: 2,
  },
  {
    id: 6,
    Name: "Sudeepto roy",
    Block: "Alta 603",
    Gender: "Male",
    Cricket: "0",
    Volleyball: "1",
    Throwball: "1",
    Handball: "1",
    "Kho Kho": "1",
    "Water Polo": "1",
    "Water Throwball": "1",
    "Tug Of War": "0",
    Basketball: "0",
    Football: "0",
    Badminton: "1",
    "Lawn Tennis": "1",
    "Table Tennis": "0",
    basePrice: 2,
  },
  {
    id: 7,
    Name: "NAVYADEEP",
    Block: "MAGNIFICA 303",
    Gender: "Male",
    Cricket: "1",
    Volleyball: "1",
    Throwball: "1",
    Handball: "1",
    "Kho Kho": "1",
    "Water Polo": "1",
    "Water Throwball": "1",
    "Tug Of War": "1",
    Basketball: "0",
    Football: "0",
    Badminton: "0",
    "Lawn Tennis": "",
    "Table Tennis": "",
    basePrice: 2,
  },
  {
    id: 8,
    Name: "Manas Ranjan Sur",
    Block: "Bella 702",
    Gender: "Male",
    Cricket: "1",
    Volleyball: "1",
    Throwball: "1",
    Handball: "1",
    "Kho Kho": "1",
    "Water Polo": "0",
    "Water Throwball": "0",
    "Tug Of War": "0",
    Basketball: "1",
    Football: "1",
    Badminton: "1",
    "Lawn Tennis": "1",
    "Table Tennis": "1",
    basePrice: 2,
  },
  {
    id: 9,
    Name: "Anusha",
    Block: "Buena 201",
    Gender: "Female",
    Cricket: "0",
    Volleyball: "0",
    Throwball: "1",
    Handball: "1",
    "Kho Kho": "1",
    "Water Polo": "0",
    "Water Throwball": "0",
    "Tug Of War": "1",
    Basketball: "0",
    Football: "1",
    Badminton: "1",
    "Lawn Tennis": "0",
    "Table Tennis": "1",
    basePrice: 2,
  },
  {
    id: 10,
    Name: "Kritee Chopra",
    Block: "Unico 805",
    Gender: "Female",
    Cricket: "0",
    Volleyball: "1",
    Throwball: "1",
    Handball: "0",
    "Kho Kho": "1",
    "Water Polo": "0",
    "Water Throwball": "1",
    "Tug Of War": "1",
    Basketball: "1",
    Football: "0",
    Badminton: "1",
    "Lawn Tennis": "0",
    "Table Tennis": "0",
    basePrice: 2,
  },
  {
    id: 11,
    Name: "Khushboo",
    Block: "Unico 506",
    Gender: "Female",
    Cricket: "1",
    Volleyball: "0",
    Throwball: "0",
    Handball: "0",
    "Kho Kho": "1",
    "Water Polo": "0",
    "Water Throwball": "0",
    "Tug Of War": "1",
    Basketball: "1",
    Football: "0",
    Badminton: "1",
    "Lawn Tennis": "0",
    "Table Tennis": "0",
    basePrice: 2,
  },
  {
    id: 12,
    Name: "Saroj",
    Block: "Florido 301",
    Gender: "Female",
    Cricket: "0",
    Volleyball: "0",
    Throwball: "1",
    Handball: "1",
    "Kho Kho": "0",
    "Water Polo": "0",
    "Water Throwball": "1",
    "Tug Of War": "1",
    Basketball: "0",
    Football: "0",
    Badminton: "1",
    "Lawn Tennis": "0",
    "Table Tennis": "0",
    basePrice: 2,
  },
];

export default function Auction() {
  const [teams, setTeams] = useState([
    { teamName: "Team 1", players: [], availableCash: 100 },
    { teamName: "Team 2", players: [], availableCash: 100 },
    { teamName: "Team 3", players: [], availableCash: 100 },
    { teamName: "Team 4", players: [], availableCash: 100 },
  ]);
  const [round1, setRound1] = useState(cround1);
  const [playerDetails, setPlayerDetails] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [inputId, setInputId] = useState("");
  const [slot, setSlot] = useState("round1");
  const [selectedTeam, setSelectedTeam] = useState("");
  const [priceIncrementValue, setPriceIncrementValue] = useState(1);
  const [soldPrice, setSoldPrice] = useState();

  const handleTeamChange = (event) => {
    setSelectedTeam(event.target.value);
  };

  const handleSold = () => {
    if (!selectedTeam) {
      alert("Please select a team!");
      return;
    }

    setTeams((prevTeams) => {
      const updatedTeams = prevTeams.map((team) => {
        if (team.teamName === selectedTeam) {
          return {
            ...team,
            players: [...team.players, playerDetails.Name], // Add player to team's players array
          };
        }
        return team;
      });
      return updatedTeams;
    });

    // Update round1 array
    setRound1((prevRound1) =>
      prevRound1.map((player) =>
        player.id === playerDetails.id
          ? { ...player, status: "Sold", teamName: selectedTeam }
          : player
      )
    );

    closeModal(); // Optional: Close the modal after the update
  };

  const handleInputChange = (e) => {
    setInputId(e.target.value);
  };

  const handleOpenModal = () => {
    const player = round1.find((player) => player.id === parseInt(inputId, 10));
    console.log(player);
    if (player) {
      setPlayerDetails(player);
      setShowModal(true);
    } else {
      alert("Player not found!");
    }
  };

  const getPlayerImageUrl = (slot, playerId) => {
    const slotNumber = slot === "round1" ? 1 : slot === "round2" ? 2 : 1; // Adjust logic for other slots as needed
    return `assets/players/${slotNumber}_${playerId}.jpg`;
  };

  // Function to close modal
  const closeModal = () => {
    setShowModal(false);
    setPlayerDetails(null);
  };

  const getRandomDuration = () => Math.random() * 1 + 1; // Random duration between 1 and 3 seconds
  const getRandomDelay = () => Math.random() * 2;

  return (
    <>
      <div className="panel-header panel-header-lg">
        <h1>Auction</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            marginBottom: "20px",
          }}
        >
          {teams.map((team, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "200px",
                height: "150px",
                border: "2px solid rgb(255 74 2)",
                borderRadius: "15px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                padding: "10px",
                margin: "10px",
                textAlign: "center",
                backgroundColor: "#f9f9f9",
              }}
            >
              <h3 style={{ margin: "10px 0", color: "#ff4a02" }}>
                {team.teamName}
              </h3>
              <p style={{ margin: "5px 0", fontSize: "1.2em", color: "#555" }}>
                Players: {team.players.length}
              </p>
              <strong
                style={{
                  margin: "5px 0",
                  fontSize: "1.3em",
                  color: "#000",
                }}
              >
                Cash: ₹{team.availableCash * 10000000}
              </strong>
            </div>
          ))}
        </div>
        <div>
          <input
            type="text"
            placeholder="Player ID"
            value={inputId}
            onChange={handleInputChange}
            style={{ marginLeft: "10px" }}
          />
          <button onClick={handleOpenModal} style={{ marginLeft: "5px" }}>
            Show Details
          </button>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row", // Stack the buttons vertically
            justifyContent: "center", // Center horizontally
            alignItems: "center", // Center vertically
            height: "40vh", // Make the container take up the full height of the viewport
            textAlign: "center",
            flexWrap: "wrap",
          }}
        >
          {round1.map((player) => (
            <button
              key={player.id}
              style={{
                margin: "0px 50px 0px 10px",
                padding: "10px 20px",
                backgroundColor: "rgb(255 74 2)",
                color: "black",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: "1.5em",
                animation: `growShrink ${getRandomDuration()}s ${getRandomDelay()}s infinite alternate`,
              }}
            >
              {player.Name}
            </button>
          ))}
        </div>
        <Dialog
          open={showModal}
          onClose={closeModal}
          maxWidth="lg"
          style={{ width: "98%" }} // You can control the width here, 'lg' is 100% by default
          PaperProps={{
            style: {
              width: "98%",
              height: "98%",
              margin: "auto",
              maxWidth: "100%",
            },
          }}
        >
          <DialogTitle>Player Details</DialogTitle>
          <DialogContent>
            {playerDetails && (
              <Grid container spacing={3}>
                {/* Left column for details */}
                <Grid item xs={6} sm={6} md={6} lg={6} style={{ width: "50%" }}>
                  <Typography variant="h6">
                    <strong>Name:</strong> {playerDetails.Name}
                  </Typography>
                  <Typography variant="body1">
                    <strong>Block:</strong> {playerDetails.Block}
                  </Typography>
                  <Typography variant="body1">
                    <strong>Gender:</strong> {playerDetails.Gender}
                  </Typography>
                  <Typography variant="body1" style={{ marginTop: "10px" }}>
                    <strong>Nominated for:</strong>
                  </Typography>
                  <ul
                    style={{
                      listStyleType: "circle",
                      marginLeft: "20px",
                      marginTop: "5px",
                    }}
                  >
                    {Object.keys(playerDetails)
                      .filter(
                        (key) =>
                          playerDetails[key] === "1" &&
                          ![
                            "id",
                            "Name",
                            "Block",
                            "Gender",
                            "basePrice",
                          ].includes(key)
                      )
                      .map((key) => (
                        <li key={key} style={{ marginBottom: "5px" }}>
                          {key}
                        </li>
                      ))}
                  </ul>
                  {/* Display Base Price */}
                  <Typography
                    variant="h6"
                    style={{
                      fontSize: "2.5em",
                      marginTop: "1em",
                      fontWeight: "bold",
                      color: "#ff4a02",
                    }}
                  >
                    <strong>Price:</strong> ₹
                    {playerDetails.basePrice * priceIncrementValue * 10000000}
                  </Typography>
                  <Button
                    onClick={() =>
                      setPriceIncrementValue(priceIncrementValue + 0.5)
                    }
                    variant="contained"
                    style={{
                      marginLeft: "10px",
                      backgroundColor: "#ff4a02",
                      color: "#fff",
                      textTransform: "none",
                      fontSize: "1.5em",
                    }}
                  >
                    +
                  </Button>
                </Grid>
                <Grid item xs={6} sm={6} md={6} lg={6}>
                  <img
                    src={getPlayerImageUrl(slot, playerDetails.id)}
                    alt={`${playerDetails.Name}`}
                    style={{
                      width: "100%",
                      height: "auto",
                      borderRadius: "8px",
                    }}
                  />
                </Grid>
              </Grid>
            )}
          </DialogContent>
          <DialogActions>
            <input
              type="number"
              value={soldPrice}
              style={{
                padding: "8px 12px",
                fontSize: "14px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                marginRight: "10px",
                width: "150px", // You can adjust the width as needed
              }}
            />
            <select
              value={selectedTeam}
              onChange={handleTeamChange}
              style={{
                padding: "8px 12px",
                fontSize: "14px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                marginRight: "10px",
              }}
            >
              <option value="" disabled>
                Select Team
              </option>
              {teams.map((team, index) => (
                <option key={index} value={team.teamName}>
                  {team.teamName}
                </option>
              ))}
            </select>

            {/* Sold Button */}
            <Button
              onClick={handleSold}
              variant="contained"
              color="secondary"
              style={{ textTransform: "none" }}
            >
              Sold
            </Button>

            {/* Close Button */}
            <Button
              onClick={closeModal}
              variant="contained"
              color="primary"
              style={{ textTransform: "none" }}
            >
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
}
