import React from "react";
import devfolio1 from "../../assets/sponsoresimages/devfolio1.png";
import filecoin1 from "../../assets/sponsoresimages/filecoin1.png";
import poygon1 from "../../assets/sponsoresimages/polygon1.png";
import replit1 from "../../assets/sponsoresimages/replit1.png";
import solana1 from "../../assets/sponsoresimages/solana1.png";
import { useEffect } from "react";
import "./Sponsors.css";

const Sponsors = () => {
  const listItems = [
    {
      pic: devfolio1,
      text1: "devfolio",
    },
    {
      pic: filecoin1,
      text1: "filecoin",
    },
    {
      pic: poygon1,
      text1: "polygon",
    },
    {
      pic: replit1,
      text1: "replit",
    },
    {
      pic: solana1,
      text1: "solana",
    },
  ];
  useEffect(() => {
    const list = document.getElementById("list");
    const listContent = Array.from(list.children);

    listContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      list.appendChild(duplicatedItem);
    });
  }, []);
  return (
    <div>
      <br />
      <div className="theading">Sponsors</div>
      <div className="tsponser">
        <div className="dabb">
          <div id="rcontainer" data-animated>
            <ul id="list">
              {listItems.map((item, index) => (
                <li key={index} className="lii">
                  <div className="core">
                    <img
                      src={item.pic}
                      alt={`The picture of ${item.text1}`}
                      className="sponspic"
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
