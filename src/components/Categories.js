//components/Categories.js

import React, { useState } from "react";
import "../App.css";

function Categories() {
  const [biddingItem, setBiddingItem] = useState(null);
  const [bidAmount, setBidAmount] = useState(0);

  const getUserByIndex = (index) => {
    const users = [
      {
        username: "User1",
        contactNumber: "123-456-7890",
        email: "user1@example.com",
      },
      {
        username: "User2",
        contactNumber: "234-567-8901",
        email: "user2@example.com",
      },
      {
        username: "User3",
        contactNumber: "345-678-9012",
        email: "user3@example.com",
      },
      {
        username: "User4",
        contactNumber: "456-789-0123",
        email: "user4@example.com",
      },
      {
        username: "User5",
        contactNumber: "567-890-1234",
        email: "user5@example.com",
      },
    ];

    return users[index];
  };

  const categoriesData = [
    {
      id: 1,
      name: "Car",
      description: "Explore the latest car models .",
      imageUrl: "https://wallpapercave.com/wp/wp8725045.jpg",
      sellerInfo: getUserByIndex(0),
      auctionInfo: {
        status: "Open",
        timeRemaining: "5h 30m",
        basePrice: 1500000,
        currentPrice: 0,
        currentBidder: null,
      },
    },
    {
      id: 2,
      name: "Clothing",
      description: "Stay in style with our fashionable clothing collection.",
      imageUrl:
        "https://th.bing.com/th/id/OIP.JQIyKGj_2Eu-ec9LtAnDtwHaGs?rs=1&pid=ImgDetMain",
      sellerInfo: getUserByIndex(1),
      auctionInfo: {
        status: "Open",
        timeRemaining: "3d 12h",
        basePrice: 1000,
        currentPrice: 0,
        currentBidder: null,
      },
    },
    {
      id: 3,
      name: "Books",
      description:
        "Immerse yourself in the world of literature with our diverse book collection.",
      imageUrl: "https://wallpapercave.com/wp/wp2036967.jpg",
      sellerInfo: getUserByIndex(2),
      auctionInfo: {
        status: "Open",
        timeRemaining: "1w 1d",
        basePrice: 300,
        currentPrice: 0,
        currentBidder: null,
      },
    },
    {
      id: 4,
      name: "Honda second hand vehicle",
      description: "Best working condition .",
      imageUrl:
        "https://th.bing.com/th/id/OIP.mbnuo3iVLVXAYdotWypY9AHaFj?rs=1&pid=ImgDetMain",
      sellerInfo: getUserByIndex(3),
      auctionInfo: {
        status: "Open",
        timeRemaining: "2d 8h",
        basePrice: 600000,
        currentPrice: 0,
        currentBidder: null,
      },
    },
    {
      id: 5,
      name: "Sports wear",
      description:
        "Fuel your active lifestyle with our high-quality sports tshirt.",
      imageUrl:
        "https://static.vecteezy.com/system/resources/previews/003/223/762/original/t-shirt-sport-design-racing-jersey-uniform-front-and-back-view-free-vector.jpg",
      sellerInfo: getUserByIndex(4),
      auctionInfo: {
        status: "Open",
        timeRemaining: "6h 20m",
        basePrice: 1299,
        currentPrice: 0,
        currentBidder: null,
      },
    },
  ];

  const handleBidClick = (item) => {
    setBiddingItem(item);
    setBidAmount(
      item.auctionInfo.basePrice + Math.floor(Math.random() * 50) + 1
    );
  };

  const handlePlaceBid = () => {
    setBiddingItem((prevItem) => ({
      ...prevItem,
      auctionInfo: {
        ...prevItem.auctionInfo,
        currentPrice: bidAmount,
        currentBidder: "user123",
      },
    }));
  };

  return (
    <div className="categories-container">
      <h2>Categories</h2>
      <div className="categories-list">
        {categoriesData.map((category) => (
          <div key={category.id} className="category-item">
            <div className="category-image">
              <img src={category.imageUrl} alt={category.name} />
            </div>
            <div className="category-details">
              <h3>{category.name}</h3>
              <p className="category-description">{category.description}</p>
              <div className="category-seller-info">
                <p>
                  <strong>Seller Information:</strong>
                </p>
                <p>Username: {category.sellerInfo.username}</p>
                <p>Contact Number: {category.sellerInfo.contactNumber}</p>
                <p>Email: {category.sellerInfo.email}</p>
              </div>
              <div className="category-auction-info">
                <p>
                  <strong>Auction Information:</strong>
                </p>
                <p>Status: {category.auctionInfo.status}</p>
                <p>Time Remaining: {category.auctionInfo.timeRemaining}</p>
                {category.auctionInfo.status === "Open" && (
                  <>
                    <button onClick={() => handleBidClick(category)}>
                      Click to Bid
                    </button>
                  </>
                )}
              </div>
              {biddingItem && biddingItem.id === category.id && (
                <div className="bid-modal">
                  <h3>Bid Information</h3>
                  <p>
                    <strong>Item:</strong> {biddingItem.name}
                  </p>
                  <p>
                    <strong>Base Price:</strong> Rs.
                    {biddingItem.auctionInfo.basePrice}
                  </p>
                  <p>
                    <strong>Current Price:</strong> Rs.
                    {biddingItem.auctionInfo.currentPrice}
                  </p>
                  <p>
                    <strong>Current Bidder:</strong>{" "}
                    {biddingItem.auctionInfo.currentBidder || "None"}
                  </p>
                  <input
                    type="number"
                    value={bidAmount}
                    onChange={(e) => setBidAmount(e.target.value)}
                    min={biddingItem.auctionInfo.basePrice + 1}
                  />
                  <button onClick={handlePlaceBid}>Place Bid</button>
                  <button onClick={() => setBiddingItem(null)}>Close</button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
