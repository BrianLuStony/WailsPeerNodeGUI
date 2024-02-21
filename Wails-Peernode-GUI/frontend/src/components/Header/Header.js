import React, { useState, useEffect, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux'; // Assuming Redux for state management
import './Header.scss';

// Assuming these components are already created for React
import Navigation from './Navigation';
import Notifications from './Notifications';
import Button from './Button';
import Divider from '../Divider/Divider';
import Icon from '../Icon/Icon';

// Assuming Logo is a React component and not just an SVG import
import Logo from '../../assets/icons/Logo';

const Header = () => {
  // Local state similar to Vue's data function
  const [showAddFileModal, setShowAddFileModal] = useState(false);

  // Assuming you have a global state management like Redux or Context API
  const { counter, open } = useSelector(state => state.notifications);
  const { remoteFilesConfig, localFilesConfig } = useSelector(state => state.files);

  const dispatch = useDispatch(); // If you're using Redux

  // Methods equivalent in React
  const openAddFileModal = () => {
    // Assuming you have an event bus or use a global context to handle this
    // this.$bus.$emit("openAddFileModal");
  };

  const openSettingsModal = () => {
    // Handle opening settings modal
  };

  const openUserWalletModal = () => {
    // Handle opening user wallet modal
  };

  const toggleNotifications = () => {
    dispatch({ type: 'notifications/toggleNotifications', payload: !open }); // Example Redux action
  };

  return (
    <header className="header">
      <div className="header__left">
        <Logo className="header__logo" />
        <Navigation />
      </div>

      <div className="header__right">
        <Button theme="primary" className="header__button" onClick={openAddFileModal}>
          Add file
        </Button>
        <Divider />
        <Icon
          className="header__icon"
          icon="NotificationsIcon"
          onClick={() => toggleNotifications()}
        />
        <div className="header__notifications-marker" style={{ display: counter ? 'block' : 'none' }}></div>
        <Notifications />
        <Icon
          onClick={openSettingsModal}
          className="header__icon"
          icon="SettingsIcon"
        />
        <Icon
          onClick={openUserWalletModal}
          className="header__icon"
          icon="WalletIcon"
        />
      </div>
    </header>
  );
};

export default Header;
