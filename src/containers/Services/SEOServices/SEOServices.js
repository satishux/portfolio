import React, { Component } from 'react';
import Contact from '../../../components/Contact/Contact';
import FloatingScroller from '../../../components/FloatingScroller/FloatingScroller';
import Footer from '../../../components/Footer/Footer';
import InfoSection from '../../../components/InfoSection/InfoSection';
import JumbotronMain from '../../../components/JumbotronMain/JumbotronMain';
import Layout from '../../../components/Layout/Layout';
import { INFOSECTION, JUMBOTRON } from '../../../data/content';

import SEOImage from '../../../images/Hero/seo.png';
import ScrollTop from '../../../utils/ScrollTop';

class SEOServices extends Component {
  render() {
    return (
      <ScrollTop>
        <Layout>
          <JumbotronMain titles={JUMBOTRON.seo} image={SEOImage} bg={JUMBOTRON.colors.seo} />
          <InfoSection
            heading={INFOSECTION.seo.heading}
            subheading={INFOSECTION.seo.subheading}
          />
          <Contact />
          <Footer />
          <FloatingScroller />
        </Layout>
      </ScrollTop>
    );
  }
}

export default SEOServices;
