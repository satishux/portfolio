import React, { Component } from 'react';

import Layout from '../../components/Layout/Layout';
import JumbotronMain from '../../components/JumbotronMain/JumbotronMain';
import InfoSection from '../../components/InfoSection/InfoSection';
import OurProcess from '../../components/OurProcess/OurProcess';
import Testimonials from '../../components/Testimonials/Testimonials';
import Services from '../../components/Services/Services';
import CountDetails from '../../components/CountDetails/CountDetails';
import ShowCase from '../../components/ShowCase/ShowCase';
import Contact from '../../components/Contact/Contact';
import Footer from '../../components/Footer/Footer';
import FloatingScroller from '../../components/FloatingScroller/FloatingScroller';
import ScrollTop from '../../utils/ScrollTop';

import { INFOSECTION, JUMBOTRON, PORTFOLIO } from '../../data/content';

class Portfolio extends Component {
  render() {
    return (
      <div>
        <ScrollTop>
          <Layout>
            <JumbotronMain titles={JUMBOTRON.home} />
            <InfoSection
              heading={INFOSECTION.home.heading}
              subheading={INFOSECTION.home.subheading}
            />
            <OurProcess />
            <Testimonials />
            <Services />
            <CountDetails />
            <ShowCase
              pages={PORTFOLIO.home.pages}
              activeType={PORTFOLIO.home.activeType}
              showCategories={PORTFOLIO.home.showCategories}
              categories={PORTFOLIO.home.categories}
              title={PORTFOLIO.home.title}
            />
            <Contact />
            <Footer />
            <FloatingScroller />
          </Layout>
        </ScrollTop>
      </div>
    );
  }
}

export default Portfolio;
