// material-ui
import { Box } from '@mui/material';
import { useState } from 'react';
import '../../../../style/style.css';

// project import

// ==============================|| HEADER - CONTENT ||============================== //

const HeaderContent = () => {
  const mouseEnterFn = (id) => {
    setIdMenuHover(id);
    setIdMenuHover(0);
  };
  const [idMenuHover, setIdMenuHover] = useState(0);

  const mouseLeaveFn = () => {
    setIdMenuHover(0);
  };

  return (
    <Box sx={{ display: 'flex', width: '100%' }}>
      <header className="has_top scroll_header_top_area fixed scrolled_not_transparent menu_position_left page_header">
        <div className="header_inner clearfix">
          <div className="header_top_bottom_holder">
            <div className="header_bottom clearfix" style={{ backgroundColor: 'rgba(0, 0, 0, 1)' }}>
              <div className="header_inner_left">
                <div className="mobile_menu_button">
                  <span>
                    <i className="qode_icon_font_awesome fa fa-bars" aria-hidden="true"></i>
                  </span>
                </div>
                <div className="logo_wrapper" style={{ height: '100px' }}>
                  <a href="/" style={{ lineHeight: '100px' }}>
                    <h1 style={{ color: '#ffffff', fontSize: '30px', fontWeight: '700', fontFamily: 'Montserrat' }}>N É M&nbsp;&nbsp; S P A C E</h1>
                  </a>
                </div>
              </div>
              <div className="header_inner_right">
                <div className="side_menu_button_wrapper right">
                  <div className="side_menu_button" style={{ height: '100px' }}></div>
                </div>
              </div>

              <nav className="main_menu drop_down left" style={{ left: '330.875px' }}>
                <ul id="menu-top-nav-2023" className="">
                  <li
                    id="nav-menu-item-37273"
                    onMouseEnter={() => mouseEnterFn(1)}
                    onMouseLeave={() => mouseLeaveFn()}
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children has_sub narrow"
                  >
                    <a href="https://ogdencontemporaryarts.org/current-exhibitions" className="" style={{ lineHeight: '100px' }}>
                      <i className="menu_icon blank fa" aria-hidden="true"></i>
                      <span>WORKSHOP</span>
                      <span className="plus"></span>
                    </a>
                    <div className={idMenuHover === 1 ? 'second drop_down_start' : 'second'} style={{ height: '0px' }}>
                      <div className="inner">
                        <ul>
                          <li
                            id="nav-menu-item-37245"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children sub"
                          >
                            <a href="/current-exhibitions" className="">
                              <i className="menu_icon blank fa" aria-hidden="true"></i>
                              <span>CURRENT EXHIBITIONS</span>
                              <span className="plus"></span>
                            </a>
                          </li>
                          <li id="nav-menu-item-37356" className="menu-item menu-item-type-post_type menu-item-object-page">
                            <a title="Artist In Residence" href="https://ogdencontemporaryarts.org/air-program/" className="">
                              <i className="menu_icon blank fa" aria-hidden="true"></i>
                              <span>ARTIST IN RESIDENCE</span>
                              <span className="plus"></span>
                            </a>
                          </li>
                          <li id="nav-menu-item-37243" className="menu-item menu-item-type-post_type menu-item-object-page">
                            <a href="https://ogdencontemporaryarts.org/upcoming-exhibitions/" className="">
                              <i className="menu_icon blank fa" aria-hidden="true"></i>
                              <span>UPCOMING EXHIBITIONS</span>
                              <span className="plus"></span>
                            </a>
                          </li>
                          <li id="nav-menu-item-37244" className="menu-item menu-item-type-post_type menu-item-object-page">
                            <a href="https://ogdencontemporaryarts.org/past-exhibitions/" className="">
                              <i className="menu_icon blank fa" aria-hidden="true"></i>
                              <span>PAST EXHIBITIONS</span>
                              <span className="plus"></span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li
                    onMouseEnter={() => mouseEnterFn(2)}
                    onMouseLeave={() => mouseLeaveFn()}
                    id="nav-menu-item-37272"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children has_sub narrow"
                  >
                    <a href="https://ogdencontemporaryarts.org/artist-factory/" className="" style={{ lineHeight: '100px' }}>
                      <i className="menu_icon blank fa" aria-hidden="true"></i>
                      <span>ABOUT US</span>
                      <span className="plus"></span>
                    </a>
                    <div className={idMenuHover === 2 ? 'second drop_down_start' : 'second'} style={{ height: '0px' }}>
                      <div className="inner">
                        <ul>
                          <li id="nav-menu-item-37248" className="menu-item menu-item-type-post_type menu-item-object-page">
                            <a href="https://ogdencontemporaryarts.org/artist-factory/" className="">
                              <i className="menu_icon blank fa" aria-hidden="true"></i>
                              <span>ARTIST FACTORY</span>
                              <span className="plus"></span>
                            </a>
                          </li>
                          <li id="nav-menu-item-37247" className="menu-item menu-item-type-post_type menu-item-object-page">
                            <a href="https://ogdencontemporaryarts.org/artist-factory-tours/" className="">
                              <i className="menu_icon blank fa" aria-hidden="true"></i>
                              <span>ARTIST FACTORY TOURS</span>
                              <span className="plus"></span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li
                    onMouseEnter={() => mouseEnterFn(3)}
                    onMouseLeave={() => mouseLeaveFn()}
                    id="nav-menu-item-37274"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children has_sub narrow"
                  >
                    <a href="https://ogdencontemporaryarts.org/donate/" className="" style={{ lineHeight: '100px' }}>
                      <i className="menu_icon blank fa" aria-hidden="true"></i>
                      <span>PRODUCTS</span>
                      <span className="plus"></span>
                    </a>
                    <div className={idMenuHover === 3 ? 'second drop_down_start' : 'second'} style={{ height: '0px' }}>
                      <div className="inner">
                        <ul>
                          <li id="nav-menu-item-37266" className="menu-item menu-item-type-post_type menu-item-object-page">
                            <a href="https://ogdencontemporaryarts.org/donate/" className="">
                              <i className="menu_icon blank fa" aria-hidden="true"></i>
                              <span>DONATE</span>
                              <span className="plus"></span>
                            </a>
                          </li>
                          <li id="nav-menu-item-37291" className="menu-item menu-item-type-post_type menu-item-object-page">
                            <a href="https://ogdencontemporaryarts.org/memberships/" className="">
                              <i className="menu_icon blank fa" aria-hidden="true"></i>
                              <span>MEMBERSHIPS</span>
                              <span className="plus"></span>
                            </a>
                          </li>
                          <li id="nav-menu-item-37250" className="menu-item menu-item-type-post_type menu-item-object-page">
                            <a href="https://ogdencontemporaryarts.org/merch-landing/" className="">
                              <i className="menu_icon blank fa" aria-hidden="true"></i>
                              <span>STORE</span>
                              <span className="plus"></span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li
                    id="nav-menu-item-37271"
                    onMouseEnter={() => mouseEnterFn(5)}
                    onMouseLeave={() => mouseLeaveFn()}
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children has_sub narrow"
                  >
                    <a href="https://ogdencontemporaryarts.org/our-vision/" className="" style={{ lineHeight: '100px' }}>
                      <i className="menu_icon blank fa" aria-hidden="true"></i>
                      <span>
                        POLICY
                      </span>
                      <span className="plus"></span>
                    </a>
                    <div className={idMenuHover === 5 ? 'second drop_down_start' : 'second'} style={{ height: '0px' }}>
                      <div className="inner">
                        <ul>
                          <li id="nav-menu-item-37238" className="menu-item menu-item-type-post_type menu-item-object-page">
                            <a href="https://ogdencontemporaryarts.org/our-vision/" className="">
                              <i className="menu_icon blank fa" aria-hidden="true"></i>
                              <span>VISION</span>
                              <span className="plus"></span>
                            </a>
                          </li>
                          <li id="nav-menu-item-37240" className="menu-item menu-item-type-post_type menu-item-object-page">
                            <a href="https://ogdencontemporaryarts.org/our-center/" className="">
                              <i className="menu_icon blank fa" aria-hidden="true"></i>
                              <span>SPACE</span>
                              <span className="plus"></span>
                            </a>
                          </li>
                          <li id="nav-menu-item-37239" className="menu-item menu-item-type-post_type menu-item-object-page">
                            <a href="https://ogdencontemporaryarts.org/our-people/" className="">
                              <i className="menu_icon blank fa" aria-hidden="true"></i>
                              <span>PEOPLE</span>
                              <span className="plus"></span>
                            </a>
                          </li>
                          <li id="nav-menu-item-37242" className="menu-item menu-item-type-post_type menu-item-object-page">
                            <a href="https://ogdencontemporaryarts.org/donors/" className="">
                              <i className="menu_icon blank fa" aria-hidden="true"></i>
                              <span>SUPPORTERS</span>
                              <span className="plus"></span>
                            </a>
                          </li>
                          <li id="nav-menu-item-37241" className="menu-item menu-item-type-post_type menu-item-object-page">
                            <a href="https://ogdencontemporaryarts.org/transparency/" className="">
                              <i className="menu_icon blank fa" aria-hidden="true"></i>
                              <span>TRANSPARENCY</span>
                              <span className="plus"></span>
                            </a>
                          </li>
                          <li id="nav-menu-item-37237" className="menu-item menu-item-type-post_type menu-item-object-page">
                            <a href="https://ogdencontemporaryarts.org/contact/" className="">
                              <i className="menu_icon blank fa" aria-hidden="true"></i>
                              <span>CONTACT</span>
                              <span className="plus"></span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li id="nav-menu-item-37988" className="menu-item menu-item-type-post_type menu-item-object-page narrow">
                    <a href="https://ogdencontemporaryarts.org/happy-hour/" className="" style={{ lineHeight: '100px' }}>
                      <i className="menu_icon blank fa" aria-hidden="true"></i>
                      <span>CONTACT WITH US</span>
                      <span className="plus"></span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </Box>
  );
};

export default HeaderContent;
