import React, { Component } from 'react';
import Contact from '../../../components/Contact/Contact';
import FloatingScroller from '../../../components/FloatingScroller/FloatingScroller';
import Footer from '../../../components/Footer/Footer';
import InfoSection from '../../../components/InfoSection/InfoSection';
import JumbotronMain from '../../../components/JumbotronMain/JumbotronMain';
import Layout from '../../../components/Layout/Layout';
import ShowCase from '../../../components/ShowCase/ShowCase';
import {INFOSECTION, JUMBOTRON, PORTFOLIO, SUBSERVICES} from '../../../data/content';
import EcommerceImage from '../../../images/Hero/ecommerce1.png';
import ScrollTop from '../../../utils/ScrollTop';
import Subservices from "../../../components/Subservices/Subservices";

class ECommerceServices extends Component {
  render() {
    return (
      <ScrollTop>
        <Layout>
          <JumbotronMain titles={JUMBOTRON.ecommerce} image={EcommerceImage} bg={JUMBOTRON.colors.ecommerce} />
          <InfoSection
            heading={INFOSECTION.ecommerce.heading}
            subheading={INFOSECTION.ecommerce.subheading}
          />
          <Subservices data={SUBSERVICES.ecommerce} />
          <ShowCase
            pages={PORTFOLIO.ecommerce.pages}
            activeType={PORTFOLIO.ecommerce.activeType}
            showCategories={PORTFOLIO.ecommerce.showCategories}
            title={PORTFOLIO.ecommerce.title}
          />
          <Contact />
          <Footer />
          <FloatingScroller />
        </Layout>
      </ScrollTop>
    );
  }
}

export default ECommerceServices;
