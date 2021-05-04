import React, { Component } from 'react';
import Contact from '../../../components/Contact/Contact';
import FloatingScroller from '../../../components/FloatingScroller/FloatingScroller';
import Footer from '../../../components/Footer/Footer';
import InfoSection from '../../../components/InfoSection/InfoSection';
import JumbotronMain from '../../../components/JumbotronMain/JumbotronMain';
import Layout from '../../../components/Layout/Layout';
import { INFOSECTION, JUMBOTRON } from '../../../data/content';

import ApplicationsImage from '../../../images/Hero/applications1.png';
import ScrollTop from '../../../utils/ScrollTop';

class ApplicationServices extends Component {
  render() {
    return (
      <ScrollTop>
        <Layout>
          <JumbotronMain
            titles={JUMBOTRON.application}
            image={ApplicationsImage}
            bg={JUMBOTRON.colors.application}
          />
          <InfoSection
            heading={INFOSECTION.application.heading}
            subheading={INFOSECTION.application.subheading}
          />
          <Contact />
          <Footer />
          <FloatingScroller />
        </Layout>
      </ScrollTop>
    );
  }
}

export default ApplicationServices;
