import React, { Component } from 'react';
import Contact from '../../../components/Contact/Contact';
import FloatingScroller from '../../../components/FloatingScroller/FloatingScroller';
import Footer from '../../../components/Footer/Footer';
import InfoSection from '../../../components/InfoSection/InfoSection';
import JumbotronMain from '../../../components/JumbotronMain/JumbotronMain';
import Layout from '../../../components/Layout/Layout';
import ShowCase from '../../../components/ShowCase/ShowCase';
import {INFOSECTION, JUMBOTRON, PORTFOLIO, SUBSERVICES} from '../../../data/content';

import ReactImage from '../../../images/Hero/react.png';
import ScrollTop from '../../../utils/ScrollTop';
import Subservices from "../../../components/Subservices/Subservices";

class ReactServices extends Component {
  render() {
    return (
      <ScrollTop>
        <Layout>
          <JumbotronMain titles={JUMBOTRON.react} image={ReactImage} bg={JUMBOTRON.colors.react} />
          <InfoSection
            heading={INFOSECTION.react.heading}
            subheading={INFOSECTION.react.subheading}
          />
          <Subservices data={SUBSERVICES.react} />
          <ShowCase
            pages={PORTFOLIO.react.pages}
            activeType={PORTFOLIO.react.activeType}
            showCategories={PORTFOLIO.react.showCategories}
            title={PORTFOLIO.react.title}
          />
          <Contact />
          <Footer />
          <FloatingScroller />
        </Layout>
      </ScrollTop>
    );
  }
}

export default ReactServices;
