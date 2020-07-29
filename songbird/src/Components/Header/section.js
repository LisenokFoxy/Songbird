import React from "react";

const sectionArray = [
  "Разминка",
  "Воробьиные",
  "Лесные птицы",
  "Певчие птицы",
  "Хищные птицы",
  "Морские птицы",
];

export class Section extends React.Component {
  render() {
    const sectionId = this.props.sectionId;
    const sectionClass = Array(6).fill("item");
    sectionClass[sectionId] = "item-active";

    const listItems = sectionArray.map((sectionName, index) => {
      if (sectionId === index) {
        return (
          <li className="item-active" key={index}>
            {sectionName}
          </li>
        );
      }
      return (
        <li className={sectionClass[index]} key={index}>
          {sectionName}
        </li>
      );
    });
    return <ul className="section">{listItems}</ul>;
    // return sectionArray;
  }
}
