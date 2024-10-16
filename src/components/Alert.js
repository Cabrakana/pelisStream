import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './Alert.css';
const Alert = ({ type, message, onClose, duration }) => {
  useEffect(() => {
    if (duration) {
      const timer = setTimeout(onClose, duration);
      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);

  const renderIcon = () => {
    switch (type) {
      case 'success':
        return '✅'; // Emoji para éxito
      case 'error':
        return '❌'; // Emoji para error
      case 'warning':
        return '⚠️'; // Emoji para advertencia
      default:
        return '';
    }
  };

  return (
    <div className={`alert alert-${type}`}>
      <span className="alert-icon">{renderIcon()}</span>
      <span className="alert-message">{message}</span>
      <button className="alert-close" onClick={onClose}>✖️</button>
    </div>
  );
};

Alert.propTypes = {
  type: PropTypes.oneOf(['success', 'error', 'warning']).isRequired,
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  duration: PropTypes.number,
};

export default Alert;
