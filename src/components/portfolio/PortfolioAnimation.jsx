import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import { FiLink } from "react-icons/fi";
import Masonry from "react-masonry-css";

const breakpointColumnsObj = {
  default: 3,
  1100: 3,
  700: 2,
  500: 1,
};

// const tabList = ["All", "Branding", "Photography", "Fashion", "Product"];
const tabList = ["Todos"];
const tabListContent = [
  {
    porftoliItems: [
      {
        img: "/juanjoWeb/img/portfolio/zapato.jpg",
        width: 400,
        height: 550,
        title: "Product Card - color dinamic",
        subTitle: "HTML, CSS, Vanilla js,",
        alterText: "HTML, CSS, vanilla js",
        delayAnimation: "",
        portfolioLink:
          "https://soyjuanjohernandez.github.io/clase-de-CSS-product-card/",
      },
      {
        img: "/juanjoWeb/img/portfolio/social.jpg",
        width: 400,
        height: 400,
        title: "Social dashboard",
        subTitle: "HTML, CSS, Vanilla js, web components",
        alterText: "social",
        delayAnimation: "100",
        portfolioLink:
          "https://soyjuanjohernandez.github.io/social_media_dashboard/",
      },
      {
        img: "/juanjoWeb/img/portfolio/57movies.jpg",
        width: 400,
        height: 400,
        title: "57 movies UI Design",
        subTitle: "Adobe XD",
        alterText: "social",
        delayAnimation: "200",
        portfolioLink:
          "https://xd.adobe.com/view/a82d552f-fdb6-4649-abca-a7a2107bc598-fd7e/screen/c435ddc6-5369-44cf-8963-f6df739e8ddc/",
      },
      {
        img: "/juanjoWeb/img/portfolio/frasesApp.jpg",
        width: 400,
        height: 400,
        title: "Frases App UI Design",
        subTitle: "Adobe XD",
        alterText: "social",
        delayAnimation: "300",
        portfolioLink:
          "https://xd.adobe.com/view/ffca5aa9-c526-4e89-85de-12f0dbb0015a-aa99/",
      },
      {
        img: "/juanjoWeb/img/portfolio/verakay.jpg",
        width: 400,
        height: 400,
        title: "Sport Team page",
        subTitle: "HTML, CSS, Vanilla js",
        alterText: "social",
        delayAnimation: "400",
        portfolioLink: "https://soyjuanjohernandez.github.io/Verakay/",
      },
      {
        img: "/juanjoWeb/img/portfolio/gifsearch.jpg",
        width: 400,
        height: 400,
        title: "Gif search",
        subTitle: "React js",
        alterText: "social",
        delayAnimation: "500",
        portfolioLink: "https://soyjuanjohernandez.github.io/gif-app-react/",
      },
    ],
  },
];

const PortfolioAnimation = () => {
  return (
    <div className="portfolio-filter-01">
      <Tabs>
        <TabList className="filter d-flex flex-wrap justify-content-start">
          {tabList.map((val, i) => (
            <Tab key={i}>{val}</Tab>
          ))}
        </TabList>
        {/* End tablist */}
        <Gallery>
          {tabListContent.map((tabContent, i) => (
            <TabPanel key={i}>
              <div className="portfolio-content ">
                <Masonry
                  breakpointCols={breakpointColumnsObj}
                  className="my-masonry-grid"
                  columnClassName="my-masonry-grid_column"
                >
                  {tabContent.porftoliItems.map((val, i) => (
                    <div
                      className="portfolio-box-01"
                      key={i}
                      data-aos="fade-right"
                      data-aos-duration="1200"
                      data-aos-delay={val.delayAnimation}
                    >
                      <div className="portfolio-img">
                        <div className="portfolio-info">
                          <h5>
                            <a
                              href={val.portfolioLink}
                              target="_blank"
                              rel="noreferrer"
                            >
                              {val.title}
                            </a>
                          </h5>
                          <span>{val.subTitle}</span>
                        </div>
                        {/* End .portfolio-info */}
                        <Item
                          original={val.img}
                          thumbnail={val.img}
                          width={val.width}
                          height={val.height}
                        >
                          {({ ref }) => (
                            <div className="gallery-link">
                              <img
                                src={val.img}
                                alt="Childhood"
                                role="button"
                                ref={ref}
                              />
                            </div>
                          )}
                        </Item>

                        <a
                          className="portfolio-icon"
                          href={val.portfolioLink}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FiLink />
                        </a>
                        {/* End .portfolio-icon */}
                      </div>
                    </div>
                  ))}
                </Masonry>
              </div>
              {/* End list wrapper */}
            </TabPanel>
          ))}
        </Gallery>
        {/* End tabpanel */}
      </Tabs>
    </div>
  );
};

export default PortfolioAnimation;
