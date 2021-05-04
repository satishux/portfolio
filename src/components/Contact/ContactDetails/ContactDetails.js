import React from 'react';

import classes from './ContactDetails.module.scss';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faSkype} from '@fortawesome/free-brands-svg-icons';

const ContactDetails = () => {
  return (
    <div className={classes.contactDetails}>
      <h3 className={classes.title}>Contact Us</h3>
      {/*<h6 className={classes.address1}>*/}
      {/*  142 Pelican Drive • 1252nd Floor, Suite 420 New York City, New York*/}
      {/*  99912*/}
      {/*</h6>*/}
      {/*<p className={classes.address2}>*/}
      {/*  Temporibus autem quibusdam et aut officiis debitis aut rerum*/}
      {/*  necessitatibus saepe eveniet ut et voluptates. Temporibus autem*/}
      {/*  quibusdam et aut.*/}
      {/*</p>*/}
      {/*<div className={classes.sectionDivider}></div>*/}
      <p className={classes.contactMethod}>
        <strong><FontAwesomeIcon icon={faEnvelope} />:</strong> info@itliquid.com
      </p>
      {/*<p className={classes.contactMethod}>*/}
      {/*  <strong>Email Alt:</strong> */}
      {/*</p>*/}
      <p className={classes.contactMethod}>
        <strong><FontAwesomeIcon icon={faSkype} />:</strong> info@itliquid.com
      </p>

      <p className={classes.contactMethod}>
        <strong><FontAwesomeIcon icon={faPhone} />:</strong> +919926856400
      </p>

      <p className={classes.contactMethod}>
        <strong><FontAwesomeIcon icon={faWhatsapp} />:</strong> +917269848087
      </p>
    </div>
  );
};

export default ContactDetails;
