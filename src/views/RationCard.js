import React, { useState } from 'react';
import PopupMessage from './PopupMessage';

export default function RationCard() {
  const [showPopup, setShowPopup] = useState(true);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const message = (
    <>
      आपका वॉलेट बैलेंस कम है, इस सर्विस को स्टार्ट करने के लिए रिचार्ज करे !<br />
      Your Wallet Balance is Low. Please Recharge Now. Using this service, recharge your wallet.
    </>
  );

  return (
    <>
      Ration card
      <PopupMessage show={showPopup} onHide={handleClosePopup} message={message} />
    </>
  );
}
