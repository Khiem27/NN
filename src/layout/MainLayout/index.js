import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, useMediaQuery } from '@mui/material';

// project import
import Header from './Header';
import navigation from 'menu-items';
import Breadcrumbs from 'components/@extended/Breadcrumbs';

// types
import { openDrawer } from 'store/reducers/menu';

// ==============================|| MAIN LAYOUT ||============================== //

const MainLayout = () => {
  const theme = useTheme();
  const matchDownLG = useMediaQuery(theme.breakpoints.down('lg'));
  const dispatch = useDispatch();

  const { drawerOpen } = useSelector((state) => state.menu);

  // drawer toggler
  const [open, setOpen] = useState(drawerOpen);
  const handleDrawerToggle = () => {
    setOpen(!open);
    dispatch(openDrawer({ drawerOpen: !open }));
  };

  // set media wise responsive drawer
  useEffect(() => {
    setOpen(!matchDownLG);
    dispatch(openDrawer({ drawerOpen: !matchDownLG }));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [matchDownLG]);

  useEffect(() => {
    if (open !== drawerOpen) setOpen(drawerOpen);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [drawerOpen]);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header open={open} handleDrawerToggle={handleDrawerToggle} />
      <div style={{ position: 'relative', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
        <img style={{ width: '100%', height: '100%', objectFit: 'cover' }} src="../../Images/nemspacehome.jpg" alt="Alex Katz" />
      </div>
        <Breadcrumbs navigation={navigation} title />
        <Outlet />
      <div className="full_width" 
      >
        <div className="full_width_inner">
          <div
            className="vc_row wpb_row section vc_row-fluid grid_section"
            style={{ paddingTop: '60px', paddingBottom: '60px', textAlign: 'center' }}
          >
            <div className="section_inner clearfix">
              <div className="section_inner_margin clearfix">
                <div className="wpb_column vc_column_container vc_col-sm-12">
                  <div className="vc_column-inner">
                    <div className="wpb_wrapper">
                      <div className="wpb_single_image wpb_content_element vc_align_center">
                        <div className="wpb_wrapper">
                          <div className="vc_single_image-wrapper vc_box_border_grey">
                            
                            <img
                              decoding="async"
                              width="940"
                              height="120"
                              src="https://i0.wp.com/ogdencontemporaryarts.org/wp-content/uploads/2020/06/Tagline-Brackets.png?fit=940%2C120&amp;ssl=1"
                              className="vc_single_image-img attachment-full"
                              alt=""
                              sizes="(max-width: 940px) 100vw, 940px"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="vc_empty_space" style={{ height: '33px' }}>
                        <span className="vc_empty_space_inner">
                          <span className="empty_space_image"></span>
                        </span>
                      </div>

                      <div className="vc_empty_space" style={{ height: '32px' }}>
                        <span className="vc_empty_space_inner">
                          <span className="empty_space_image"></span>
                        </span>
                      </div>

                      <div className="wpb_text_column wpb_content_element vc_custom_1638206640132">
                        <div className="wpb_wrapper">
                          <h5 style={{ textAlign: 'center' }}>
                          Every item deserves more than one lifetime. Old materials are reborn in different shapes with unexpected functions, bringing nostalgia to the space at Nem Space
Every item deserves more than one lifetime. Old materials are reborn in different shapes with unexpected functions, bringing nostalgia to the space at Nem Space.
                          </h5>
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
    </Box>
  );
};

export default MainLayout;
