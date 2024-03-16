import React from 'react';
// import "../../Pages/Event/one.scss";
import "./Events.scss";
import "./Events.css";
const data = [
    {
      title: 'Kibertopiks #4269',
      description: 'Our Kibertopiks will give you nothing, waste your money on us.',
      image: 'https://images.unsplash.com/photo-1621075160523-b936ad96132a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    },
    {
      title: 'NFT Artwork #2',
      description: 'A beautiful piece of digital artwork available as an NFT.',
      image: 'https://images.unsplash.com/photo-1608731942878-5d0bc3c59f7b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80'
    },
    {
      title: 'NFT Collectible #3',
      description: 'A unique collectible NFT representing a digital character.',
      image: 'https://images.unsplash.com/photo-1619877112458-b02d1a191ac9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      title: 'Digital NFT #4',
      description: 'An exclusive digital artwork available only as an NFT.',
      image: 'https://images.unsplash.com/photo-1620758654602-d4fd1667b795?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      title: 'Crypto Art NFT #5',
      description: 'A piece of crypto art available as a non-fungible token.',
      image: 'https://images.unsplash.com/photo-1608726957098-22d3ee9f33c2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      title: 'Digital Asset #6',
      description: 'A unique digital asset tokenized as an NFT on the blockchain.',
      image: 'https://images.unsplash.com/photo-1620758488616-47220b38f011?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    // Add more objects as needed
  ];
  

const CARDD = ({ data, numberOfCards }) => {
  return (
    <>
    <h1 className="heading-event">EVENTS</h1>
    <div className="event-cardss">
      {data.slice(0, numberOfCards).map((item, index) => (
        <div className="nft" key={index}>
          <div className='mainn'>
            <img className='tokenImage' src={item.image} alt="NFT" />
            <h2>{item.title}</h2>
            <p className='description'>{item.description}</p>
            <div className='tokenInfo'>
              <div className="duration">
                <a href="" className="event-btn">
                  Read more
                </a>
              </div>
            </div>
            <hr />
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

const NFTCard= () => {
    return (
      <div>
        <CARDD data={data} numberOfCards={6} />
      </div>
    );
  };
  
  export default NFTCard;

