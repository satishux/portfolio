import React, { Component } from 'react';
import Contact from '../../../components/Contact/Contact';
import FloatingScroller from '../../../components/FloatingScroller/FloatingScroller';
import Footer from '../../../components/Footer/Footer';
import InfoSection from '../../../components/InfoSection/InfoSection';
import JumbotronMain from '../../../components/JumbotronMain/JumbotronMain';
import Layout from '../../../components/Layout/Layout';
import ShowCase from '../../../components/ShowCase/ShowCase';
import {INFOSECTION, JUMBOTRON, PORTFOLIO, SUBSERVICES} from '../../../data/content';

import GraphicsImage from '../../../images/Hero/graphics.png';
import ScrollTop from '../../../utils/ScrollTop';
import Subservices from "../../../components/Subservices/Subservices";

class GraphicsServices extends Component {
  render() {
    return (
      <ScrollTop>
        <Layout>
          <JumbotronMain titles={JUMBOTRON.graphics} image={GraphicsImage} bg={JUMBOTRON.colors.graphics} />
          <InfoSection
            heading={INFOSECTION.graphics.heading}
            subheading={INFOSECTION.graphics.subheading}
          />
          <Subservices data={SUBSERVICES.graphics} />
          <ShowCase
            pages={PORTFOLIO.graphics.pages}
            activeType={PORTFOLIO.graphics.activeType}
            showCategories={PORTFOLIO.graphics.showCategories}
            categories={PORTFOLIO.graphics.categories}
            title={PORTFOLIO.graphics.title}
          />
          <Contact />
          <Footer />
          <FloatingScroller />
        </Layout>
      </ScrollTop>
    );
  }
}

export default GraphicsServices;
