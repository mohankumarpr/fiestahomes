import React, { useState, useEffect } from "react";
import { cround1 } from "./players";
import "./auction.css";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  TextField,
} from "@mui/material";
import Grid from "@mui/material/Grid2";

export default function Auction() {
  //const [round1, setRound1] = useState(cround1);
  const [round1, setRound1] = useState(() => {
    const soldPlayers = JSON.parse(localStorage.getItem("soldPlayers")) || [];

    const filteredData = cround1.filter(
      (player) => !soldPlayers.some((sold) => sold.id === player.id)
    );

    return filteredData;
  });

  const [teams, setTeams] = useState(() => {
    const savedTeams = localStorage.getItem("teamsData");
    return savedTeams
      ? JSON.parse(savedTeams)
      : [
          {
            teamName: "Knights of Fiesta",
            owners: ["Vikas", "Anusree"],
            players: [],
            availableCash: 100,
            color: "#0b0bb5",
          },
          {
            teamName: "Flames of Fiesta",
            owners: ["Ashish", "Kalaivani"],
            players: [],
            availableCash: 100,
            color: "#ff4a02",
          },
          {
            teamName: "Thunders of Fiesta",
            owners: ["Nikhil", "Parul"],
            players: [],
            availableCash: 100,
            color: "#d00c0c",
          },
          {
            teamName: "Fire of Fiesta",
            owners: ["Sunil", "Anjana"],
            players: [],
            availableCash: 100,
            color: "#FF671F",
          },
        ];
  });

  // Save the teams data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("teamsData", JSON.stringify(teams));
  }, [teams]);

  const [playerDetails, setPlayerDetails] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [inputId, setInputId] = useState("");
  const [slot, setSlot] = useState("round1");
  const [selectedTeam, setSelectedTeam] = useState("");
  const [priceIncrementValue, setPriceIncrementValue] = useState(0);
  const [soldPrice, setSoldPrice] = useState();

  const handleTeamChange = (event) => {
    setSelectedTeam(event.target.value);
  };

  // const handleSold = () => {
  //   if (!selectedTeam) {
  //     alert("Please select a team!");
  //     return;
  //   }

  //   const soldPrice = playerDetails.basePrice + priceIncrementValue;
  //   console.log("soldPrice = ", soldPrice);

  //   // Update the teams array
  //   setTeams((prevTeams) => {
  //     const updatedTeams = prevTeams.map((team) => {
  //       if (team.teamName === selectedTeam) {
  //         return {
  //           ...team,
  //           players: [
  //             ...team.players,
  //             {
  //               playerName: playerDetails.Name,
  //               soldPrice: soldPrice,
  //               Gender: playerDetails.Gender
  //             },
  //           ],
  //         };
  //       }
  //       return team;
  //     });
  //     console.log(updatedTeams);
  //     return updatedTeams;
  //   });

  //   // Update the round1 array
  //   setRound1((prevRound1) =>
  //     prevRound1.map((player) =>
  //       player.id === playerDetails.id
  //         ? {
  //             ...player,
  //             status: "Sold",
  //             teamName: selectedTeam,
  //             soldPrice: soldPrice,
  //           } // Include sold price
  //         : player
  //     )
  //   );

  //   setPriceIncrementValue(0);
  //   closeModal(); // Optional: Close the modal after the update
  // };
  const handleSold = () => {
    if (!selectedTeam) {
      alert("Please select a team!");
      return;
    }

    alert(1);
    const soldPrice = playerDetails.basePrice + priceIncrementValue;
    console.log("soldPrice = ", soldPrice);

    // Step 1: Get the sold player and update localStorage
    const soldPlayer = round1.find((player) => player.id === playerDetails.id);
    const savedSoldPlayers =
      JSON.parse(localStorage.getItem("soldPlayers")) || [];
    const updatedSoldPlayers = [
      ...savedSoldPlayers,
      {
        ...soldPlayer,
        status: "Sold",
        teamName: selectedTeam,
        soldPrice: soldPrice,
      },
    ];
    console.log("updatedSoldPlayers = ", updatedSoldPlayers);
    localStorage.setItem("soldPlayers", JSON.stringify(updatedSoldPlayers));

    // Step 2: Update the `round1` state without side effects in the updater
    setRound1((prevRound1) =>
      prevRound1.filter((player) => player.id !== playerDetails.id)
    );

    // Step 3: Update the `teams` array without side effects
    setTeams((prevTeams) =>
      prevTeams.map((team) => {
        if (team.teamName === selectedTeam) {
          return {
            ...team,
            players: [
              ...team.players,
              {
                playerName: playerDetails.Name,
                soldPrice: soldPrice,
                Gender: playerDetails.Gender,
              },
            ],
          };
        }
        return team;
      })
    );

    // Reset price increment and optionally close modal
    setPriceIncrementValue(0);
    closeModal(); // Optional: Close the modal after the update
  };

  // const handleInputChange = (e) => {
  //   setInputId(e.target.value);
  // };

  const getRandomPlayer = () => {
    // Filter players with 'empty' or 'undefined' status
    const availablePlayers = round1.filter(
      (player) => !player.status || player.status === ""
    );

    if (availablePlayers.length > 0) {
      // Pick a random player
      const randomPlayer =
        availablePlayers[Math.floor(Math.random() * availablePlayers.length)];
      setPlayerDetails(randomPlayer);
      setShowModal(true);
    } else {
      alert("No available players left.");
    }
  };

  const getPlayerImageUrl = (playerId) => {
    return `assets/players/${playerId}.jpg`;
    //return `assets/players/4.jpg`;
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
          {teams.map((team, index) => {
            // Calculate the total sold price of players
            const totalSoldPrice = team.players.reduce(
              (sum, player) => sum + player.soldPrice,
              0
            );

            // Calculate the final cash
            const remainingCash = team.availableCash - totalSoldPrice;
            const finalCash = remainingCash;
            const minRemainingPlayersNeeded = 20 - team.players.length;

            // Calculate max amount for the current player
            const maxAmountForCurrentPlayer = Math.round(
              remainingCash - (minRemainingPlayersNeeded - 1) * 0.5
            );

            // Count male and female players
            const maleCount = team.players.filter(
              (player) => player.Gender === "Male"
            ).length;
            const femaleCount = team.players.filter(
              (player) => player.Gender === "Female"
            ).length;
            const totalPlayers = team.players.length;

            return (
              <div
                key={index}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  border: "2px solid rgb(255 74 2)",
                  borderColor: team.color,
                  borderRadius: "15px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  padding: "5px",
                  margin: "5px",
                  textAlign: "center",
                  backgroundColor: team.color,
                  color:
                    team.color === "#0b0bb5" || team.color === "#d00c0c"
                      ? "#fff"
                      : "#000",
                }}
                className="team-box"
              >
                <h4 style={{ margin: "2px 0" }}>{team.teamName}</h4>
                <p style={{ fontSize: "0.9em" }}>
                  Owners: {team.owners.join(" & ")}
                </p>
                <p style={{ margin: "2px 0", fontSize: "1em" }}>
                  Players: <b>{totalPlayers}</b> <br />
                  (Males: {maleCount}/13, Females: {femaleCount}/7)
                </p>
                <strong
                  style={{
                    margin: "2px 0",
                    fontSize: "1.2em",
                  }}
                >
                  Cash: ₹{finalCash.toLocaleString()} Crores
                </strong>
                <p style={{ fontSize: "1em", marginTop: "5px" }}>
                  Next Player's Max Bid:{" "}
                  <b>
                    ₹{Math.max(maxAmountForCurrentPlayer, 0).toFixed(0)} Crores
                  </b>
                </p>
              </div>
            );
          })}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "20px 0", // Adds top and bottom margin
            padding: "10px", // Adds padding around the container
            backgroundColor: "#f9f9f9", // Optional light background for better contrast
            borderRadius: "8px", // Rounded corners for a polished look
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
          }}
        >
          {/* <TextField
            label="Player ID"
            variant="outlined"
            value={inputId}
            onChange={handleInputChange}
            style={{
              marginRight: "10px", // Space between input and button
              width: "250px", // Adjust the width of the input
            }}
          /> */}
          <Button
            variant="contained"
            color="primary"
            onClick={getRandomPlayer}
            style={{
              textTransform: "none", // Keeps the text normal (not uppercase)
              fontSize: "1.2rem", // Slightly larger font for readability
            }}
          >
            Pick A Player ({round1?.length})
          </Button>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            height: "40vh",
            textAlign: "center",
            flexWrap: "wrap",
          }}
          className="button-container"
        >
          {round1
            .filter((player) => player.status !== "Sold") // Filter out players whose status is 'sold'
            .map((player) => (
              <button
                key={player.id}
                style={{
                  backgroundColor: "#ffffff",
                  color: "#000000",
                  border: "1px solid #8e4600",
                  borderRadius: "5px",
                  cursor: "pointer",
                  fontSize: "1em",
                  animation: `growShrink ${getRandomDuration()}s ${getRandomDelay()}s infinite alternate`,
                }}
                className="player-button"
              >
                {player.Name}
              </button>
            ))}
        </div>

        <Dialog
          open={showModal}
          onClose={closeModal}
          maxWidth="lg"
          style={{ width: "98%" }}
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
                <Grid item xs={6} sm={6} md={6} lg={6} style={{ width: "44%" }}>
                  <Typography variant="h6">
                    <strong>Name:</strong> {playerDetails?.Name}
                  </Typography>
                  <Typography variant="body1">
                    <strong>Block:</strong> {playerDetails?.Block}
                  </Typography>
                  <Typography variant="body1">
                    <strong>Gender:</strong> {playerDetails?.Gender}
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
                          playerDetails[key] === 1 &&
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
                  <Typography variant="body1" style={{ marginTop: "5px" }}>
                    <strong>From Their own words:</strong>
                  </Typography>
                  <Typography variant="body1">
                    <strong>
                      {playerDetails.aboutMe
                        ? playerDetails.aboutMe
                        : "Not Available"}
                    </strong>
                  </Typography>
                  {/* Display Base Price */}
                  {/* <Typography
                    variant="h6"
                    style={{
                      fontSize: "2em",
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
                  </Button> */}
                </Grid>
                <Grid
                  item
                  xs={6}
                  sm={6}
                  md={6}
                  lg={6}
                  style={{
                    width: "50%",
                    height: "auto",
                    display: "flex", // Flex container to center the image
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={getPlayerImageUrl(playerDetails.id)}
                    alt={`${playerDetails?.Name}`}
                    style={{
                      maxHeight: "65vh", // Ensures the image does not overflow vertically
                      borderRadius: "8px",
                    }}
                  />
                </Grid>
              </Grid>
            )}
          </DialogContent>
          <DialogActions
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "20px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <Typography
                variant="h6"
                style={{
                  fontSize: "1.5em",
                  fontWeight: "bold",
                  marginRight: "10px",
                  color: "#ff4a02",
                }}
              >
                Price: ₹{playerDetails?.basePrice + priceIncrementValue} Crores
              </Typography>
              <Button
                onClick={() =>
                  setPriceIncrementValue((prevValue) => {
                    if (prevValue < 1.5) {
                      return prevValue + 0.25;
                    } else if (prevValue < 4.5) {
                      return prevValue + 0.5;
                    } else {
                      return prevValue + 1;
                    }
                  })
                }
                variant="contained"
                style={{
                  marginLeft: "5px",
                  backgroundColor: "#ff4a02",
                  color: "#fff",
                  textTransform: "none",
                  fontSize: "1.5em",
                  padding: "0",
                }}
              >
                +
              </Button>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <input
                type="number"
                value={soldPrice}
                style={{
                  padding: "8px 12px",
                  fontSize: "14px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  marginRight: "10px",
                  width: "150px",
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
                style={{ textTransform: "none", marginRight: "15px" }}
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
            </div>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
}
