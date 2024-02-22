import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../Icon/Icon'; // Adjust the import path according to your project structure
import './Navigation.css'; // Assuming SCSS is set up in your project

const Navigation = () => {
  // Define the navigation items
  const items = [
    {
      text: "Transfers",
      route: "transfers",
      icon: "TransfersIcon",
    },
    {
      text: "Channels",
      route: "discover",
      icon: "DiscoverIcon",
    },
  ];

  return (
    <div className="navigation">
      {items.map((item) => (
        <Link to={`/${item.route}`} id={item.route} key={item.route} className="navigation__item">
          <Icon className="navigation__icon" iconName={item.icon} />
          {item.text}
        </Link>
      ))}
    </div>
  );
};

export default Navigation;
