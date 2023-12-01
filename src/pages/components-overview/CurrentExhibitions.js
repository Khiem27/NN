import React from 'react';

function CurrentExhibitions() {
    return (
        <div className="content_inner">
        <div className="full_width" style={{ backgroundColor: '#ffffff' }}>
          <div className="full_width_inner">
            <div className="vc_row wpb_row section vc_row-fluid" style={{ paddingTop: '30px', paddingBottom: '30px', textAlign: 'center' }}>
              <div className="full_section_inner clearfix">
                <div className="wpb_column vc_column_container vc_col-sm-12">
                  <div className="vc_column-inner">
                    <div className="wpb_wrapper">
                      <div className="wpb_text_column wpb_content_element">
                        <div className="wpb_wrapper">
                          <h1>Current Exhibitions</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="vc_row wpb_row section vc_row-fluid" style={{ textAlign: 'left' }}>
              <div className="full_section_inner clearfix">
                <div className="wpb_column vc_column_container vc_col-sm-12">
                  <div className="vc_column-inner">
                    <div className="wpb_wrapper">
                      <div className="blog_slider_holder clearfix">
                        <div className="blog_slider blog_slider_carousel" data-blogs_shown="3" data-auto_start="true">
                          <div
                            className="caroufredsel_wrapper"
                            style={{
                              textAlign: 'left',
                              float: 'none',
                              position: 'relative',
                              inset: 'auto',
                              zIndex: 'auto',
                              width: '1905px',
                              margin: '0px',
                              overflow: 'hidden',
                              cursor: 'move',
                              height: '354.031px'
                            }}
                          >
                            <ul
                              className="blog_slides"
                              style={{
                                textAlign: 'left',
                                float: 'none',
                                position: 'absolute',
                                inset: '0px auto auto 0px',
                                margin: '0px',
                                width: '5715px',
                                opacity: '1'
                              }}
                            >
                              <li className="item" style={{ width: '635px' }}>
                                <div className="item_holder">
                                  <div className="blog_text_holder">
                                    <div className="blog_text_holder_outer">
                                      <div className="blog_text_holder_inner">
                                        <h3 className="blog_slider_title entry_title">
                                          <a href="https://ogdencontemporaryarts.org/industrial-art-design-paradboxes/">
                                            Industrial Art &amp; Design — PARAdbOXES
                                          </a>
                                        </h3>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="blog_image_holder">
                                    <span className="image">
                                      <img
                                        decoding="async"
                                        src="https://i0.wp.com/ogdencontemporaryarts.org/wp-content/uploads/2020/09/20_OCA_FacebookEvent_paradboxes-12.8.2020.jpg?resize=1060%2C596&amp;ssl=1"
                                        alt="Paradboxes"
                                        width="1060"
                                        height="596"
                                      />
                                    </span>
                                  </div>
                                </div>
                              </li>
                              <li className="item" style={{ width: '635px' }}>
                                <div className="item_holder">
                                  <div className="blog_text_holder">
                                    <div className="blog_text_holder_outer">
                                      <div className="blog_text_holder_inner">
                                        <h3 className="blog_slider_title entry_title">
                                          <a href="https://ogdencontemporaryarts.org/exhibition-myloan-dinh-unsettled-provisions/">
                                            Exhibition: MyLoan Dinh | Unsettled Provisions
                                          </a>
                                        </h3>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="blog_image_holder">
                                    <span className="image">
                                      <img
                                        decoding="async"
                                        src="https://i0.wp.com/ogdencontemporaryarts.org/wp-content/uploads/2023/10/MyLoan-Dinh_exhibition.png?resize=1060%2C596&amp;ssl=1"
                                        alt=""
                                        width="1060"
                                        height="596"
                                      />
                                    </span>
                                  </div>
                                </div>
                              </li>
                              <li className="item" style={{ width: '635px' }}>
                                <div className="item_holder">
                                  <div className="blog_text_holder">
                                    <div className="blog_text_holder_outer">
                                      <div className="blog_text_holder_inner">
                                        <h3 className="blog_slider_title entry_title">
                                          <a href="https://ogdencontemporaryarts.org/exhibition-nancy-rivera-no-present-to-remember/">
                                            Exhibition: Nancy Rivera | No Present to Remember
                                          </a>
                                        </h3>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="blog_image_holder">
                                    <span className="image">
                                      <img
                                        decoding="async"
                                        src="https://i0.wp.com/ogdencontemporaryarts.org/wp-content/uploads/2023/10/Nancy-Rivera_FacebookEvent.png?resize=1060%2C596&amp;ssl=1"
                                        alt=""
                                        width="1060"
                                        height="596"
                                      />
                                    </span>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <ul className="caroufredsel-direction-nav">
                            <li>
                              <a id="caroufredsel-prev" className="caroufredsel-prev hidden" href="#" style={{ display: 'none' }}>
                                <div>
                                  <i className="fa fa-angle-left" aria-hidden="true"></i>
                                </div>
                              </a>
                            </li>
                            <li>
                              <a className="caroufredsel-next hidden" id="caroufredsel-next" href="#" style={{ display: 'none' }}>
                                <div>
                                  <i className="fa fa-angle-right" aria-hidden="true"></i>
                                </div>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default CurrentExhibitions;
