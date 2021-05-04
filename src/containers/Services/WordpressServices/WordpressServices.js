import React, { Component } from 'react';
import Contact from '../../../components/Contact/Contact';
import FloatingScroller from '../../../components/FloatingScroller/FloatingScroller';
import Footer from '../../../components/Footer/Footer';
import InfoSection from '../../../components/InfoSection/InfoSection';
import JumbotronMain from '../../../components/JumbotronMain/JumbotronMain';
import Layout from '../../../components/Layout/Layout';
import ShowCase from '../../../components/ShowCase/ShowCase';
import {INFOSECTION, JUMBOTRON, PORTFOLIO, SUBSERVICES} from '../../../data/content';

import WordpressImage from '../../../images/Hero/wordpress.png';
import ScrollTop from '../../../utils/ScrollTop';
import Subservices from "../../../components/Subservices/Subservices";

class WordpressServices extends Component {
  render() {
    return (
      <ScrollTop>
        <Layout>
          <JumbotronMain titles={JUMBOTRON.wordpress} image={WordpressImage} bg={JUMBOTRON.colors.wordpress} />
          <InfoSection
            heading={INFOSECTION.wordpress.heading}
            subheading={INFOSECTION.wordpress.subheading}
          />
          <Subservices data={SUBSERVICES.wordpress} />
          <ShowCase
            pages={PORTFOLIO.wordpress.pages}
            activeType={PORTFOLIO.wordpress.activeType}
            showCategories={PORTFOLIO.wordpress.showCategories}
            title={PORTFOLIO.wordpress.title}
          />
          <Contact />
          <Footer />
          <FloatingScroller />
        </Layout>
      </ScrollTop>
    );
  }
}

export default WordpressServices;
