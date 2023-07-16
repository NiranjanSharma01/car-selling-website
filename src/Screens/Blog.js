import React from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <>
      <div class="impl_bread_wrapper">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 col-md-12">
              <h1>blog</h1>
            </div>
            <hr />
              <span style={{ color:'white', zIndex:'999'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem, ea. <br /><p>Lorem ipsum dolor sit amet.</p></span>   
          </div>
        </div>
      </div>

      <div class="impl_blog_wrapper impl_blog_page">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 col-md-12">
              <div class="impl_blog_inner">
                <div class="row">
                  <div class="col-lg-3 col-md-3">
                    <div class="impl_sidebar">
                      <div class="impl_product_search widget woocommerce">
                        <h2 class="widget-title">looking for</h2>
                        <div class="impl_footer_subs">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Search..."
                          />
                          <button class="foo_subs_btn">
                            <i style={{position:"absolute",marginTop:-9,fontSize:18}} class="fa fa-search" aria-hidden="true"></i>
                          </button>
                        </div>
                      </div>
                      {/* Categories */}
                      <div class="widget widget_categories">
                        <h2 class="widget-title">Categories</h2>
                        <ul>
                          <li>
                            <a href="##"> Changing Oil</a>
                          </li>
                          <li>
                            <a href="##"> Saving Fuel</a>
                          </li>
                          <li>
                            <a href="##"> Antilock Brakes</a>
                          </li>
                          <li>
                            <a href="##"> Battery</a>
                          </li>
                          <li>
                            <a href="##"> Tips On Long Car Trips</a>
                          </li>
                          <li>
                            <a href="##"> Air Pressure</a>
                          </li>
                          <li>
                            <a href="##"> Tire Replacement</a>
                          </li>
                        </ul>
                      </div>
                      {/* Recent Post */}
                      <div class="widget widget_recent_entries">
                        <h2 class="widget-title">Recent Posts</h2>
                        <ul>
                          <li>
                            <div class="recent_cmnt_img">
                              <img
                                src="assets/images/blog/r_post1.jpg"
                                alt=""
                              />
                            </div>
                            <div class="recent_cmnt_data">
                              <h4>
                                <a href="/">
                                  Things To Keep In Mind While Travelling.
                                </a>
                              </h4>
                              <span>07 January 2022</span>
                            </div>
                          </li>
                          <li>
                            <div class="recent_cmnt_img">
                              <img
                                src="assets/images/blog/r_post2.jpg"
                                alt=""
                              />
                            </div>
                            <div class="recent_cmnt_data">
                              <h4>
                                <a href="/">
                                  Jaguar Launches New F-Type Sports Car
                                </a>
                              </h4>
                              <span>11 Apr, 2022</span>
                            </div>
                          </li>
                          <li>
                            <div class="recent_cmnt_img">
                              <img
                                src="assets/images/blog/r_post3.jpg"
                                alt=""
                              />
                            </div>
                            <div class="recent_cmnt_data">
                              <h4>
                                <a href="/">Tips To Save Fuel Efficiently</a>
                              </h4>
                              <span>24 Apr, 2022</span>
                            </div>
                          </li>
                        </ul>
                      </div>
                      {/* Tag Cloud */}
                      <div class="widget widget_tag_cloud">
                        <h2 class="widget-title text-dark ms-3">Tags</h2>
                        <ul>
                          <li>
                            <a href="/">Reviews</a>
                          </li>
                          <li>
                            <a href="/">Rolls Royce</a>
                          </li>
                          <li>
                            <a href="/">Safety</a>
                          </li>
                          <li>
                            <a href="/">Latest Lauches</a>
                          </li>
                          <li>
                            <a href="/">Sedan </a>
                          </li>
                          <li>
                            <a href="/">Selling Your Car</a>
                          </li>
                          <li>
                            <a href="/">Travelling Tips</a>
                          </li>
                        </ul>
                      </div>
                      {/* <!--Instagram--> */}
                      <div class="widget widget_instagram_feed">
                        <h2 class="widget-title">instagram feed</h2>
                        <ul>
                          <li>
                            <a href="/">
                              <img src="assets/images/blog/insta1.jpg" alt="" />
                            </a>
                          </li>
                          <li>
                            <a href="/">
                              <img src="assets/images/blog/insta2.jpg" alt="" />
                            </a>
                          </li>
                          <li>
                            <a href="/">
                              <img src="assets/images/blog/insta3.jpg" alt="" />
                            </a>
                          </li>
                          <li>
                            <a href="/">
                              <img src="assets/images/blog/insta4.jpg" alt="" />
                            </a>
                          </li>
                          <li>
                            <a href="/">
                              <img src="assets/images/blog/insta5.jpg" alt="" />
                            </a>
                          </li>
                          <li>
                            <a href="/">
                              <img src="assets/images/blog/insta6.jpg" alt="" />
                            </a>
                          </li>
                        </ul>
                      </div>
                      {/* <!--Follow us--> */}
                      <div class="widget widget_social_links">
                        <h2 class="widget-title">Connect and Follow</h2>
                        <ul>
                          <li>
                            <Link to="/">
                              <i class="fa fa-facebook" aria-hidden="true"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="/">
                              <i class="fa fa-twitter" aria-hidden="true"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="/">
                              <i class="fa fa-linkedin" aria-hidden="true"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="/">
                              <i
                                class="fa fa-google-plus"
                                aria-hidden="true"
                              ></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="/">
                              <i
                                class="fa fa-pinterest-p"
                                aria-hidden="true"
                              ></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="/">
                              <i class="fa fa-instagram" aria-hidden="true"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="/">
                              <i
                                class="fa fa-youtube-play"
                                aria-hidden="true"
                              ></i>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* <!--sidebar end--> */}
                  <div class="col-lg-9 col-md-9 impl_blog_section">
                    <div class="row">
                      <div class="col-lg-12 col-md-12">
                        {/* <!--blog1--> */}
                        <div class="impl_blog_box">
                          <div class="impl_post_img">
                            <img
                              src="assets/images/blog/blog1.jpg"
                              alt=""
                              class="img-fluid"
                            />
                            <span class="impl_pst_date">16 June</span>
                            <div class="impl_pst_img_icon">
                              <Link to="/">
                                <i class="fa fa-link" aria-hidden="true"></i>
                              </Link>
                            </div>
                          </div>
                          <div class="impl_post_data">
                            <h2>
                              <Link to="/">
                                Stories Behind Car Brand Names{" "}
                              </Link>
                            </h2>
                            <p>
                              It is a long established fact that a reader will
                              be distracted by the readable content of a page
                              when looking at its layout. The point of using
                              Lorem Ipsum is that it has a more-or-less normal
                              distribution of letters, as opposed to using
                              'Content here, content here', making it look like
                              readable English. Many desktop publishing packages
                              and web page editors now use Lorem Ipsum as their
                              default model text, and a search for 'lorem ipsum'
                              will uncover many web sites still in their
                              infancy. Various versions have evolved over the
                              years, sometimes by accident, sometimes on purpose
                              (injected humour and the like). There are many
                              variations of passages of Lorem Ipsum available,
                              but the majority have suffered alteration in some
                              form, by injected humour.
                            </p>
                            <div class="impl_pst_info">
                              <div class="impl_pst_admin">
                                <span>
                                  <a href="/">admin</a>
                                </span>
                                <span>
                                  <a href="/">16 May 2022</a>
                                </span>
                              </div>
                              <ul class="impl_pst_views">
                                <li>
                                  <a href="/">
                                    <i class="fa fa-eye" aria-hidden="true"></i>{" "}
                                    413
                                  </a>
                                </li>
                                <li>
                                  <a href="/">
                                    <i
                                      class="fa fa-comments"
                                      aria-hidden="true"
                                    ></i>{" "}
                                    251
                                  </a>
                                </li>
                                <li>
                                  <a href="/">
                                    <i
                                      class="fa fa-share-alt"
                                      aria-hidden="true"
                                    ></i>{" "}
                                    5
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        {/* <!--blog2--> */}
                        <div class="impl_blog_box">
                          <div class="impl_post_img">
                            <img
                              src="assets/images/blog/blog2.jpg"
                              alt=""
                              class="img-fluid"
                            />
                            <span class="impl_pst_date">16 June</span>
                            <div class="impl_pst_img_icon">
                              <a href="/">
                                <i class="fa fa-link" aria-hidden="true"></i>
                              </a>
                            </div>
                          </div>
                          <div class="impl_post_data">
                            <h2>
                              <a href="blog_single.html">
                                Stories Behind Car Brand Names{" "}
                              </a>
                            </h2>
                            <p>
                              It is a long established fact that a reader will
                              be distracted by the readable content of a page
                              when looking at its layout. The point of using
                              Lorem Ipsum is that it has a more-or-less normal
                              distribution of letters, as opposed to using
                              'Content here, content here', making it look like
                              readable English. Many desktop publishing packages
                              and web page editors now use Lorem Ipsum as their
                              default model text, and a search for 'lorem ipsum'
                              will uncover many web sites still in their
                              infancy. Various versions have evolved over the
                              years, sometimes by accident, sometimes on purpose
                              (injected humour and the like). There are many
                              variations of passages of Lorem Ipsum available,
                              but the majority have suffered alteration in some
                              form, by injected humour.
                            </p>
                            <div class="impl_pst_info">
                              <div class="impl_pst_admin">
                                <span>
                                  <a href="/">admin</a>
                                </span>
                                <span>
                                  <a href="/">16 March 2022</a>
                                </span>
                              </div>
                              <ul class="impl_pst_views">
                                <li>
                                  <a href="/">
                                    <i class="fa fa-eye" aria-hidden="true"></i>{" "}
                                    413
                                  </a>
                                </li>
                                <li>
                                  <a href="/">
                                    <i
                                      class="fa fa-comments"
                                      aria-hidden="true"
                                    ></i>{" "}
                                    251
                                  </a>
                                </li>
                                <li>
                                  <a href="/">
                                    <i
                                      class="fa fa-share-alt"
                                      aria-hidden="true"
                                    ></i>{" "}
                                    5
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        {/* <!--blog2--> */}
                        <div class="impl_blog_box">
                          <div class="impl_post_img">
                            <img
                              src="assets/images/blog/blog3.jpg"
                              alt=""
                              class="img-fluid"
                            />
                            <span class="impl_pst_date">16 June</span>
                            <div class="impl_pst_img_icon">
                              <a href="/">
                                <i class="fa fa-link" aria-hidden="true"></i>
                              </a>
                            </div>
                          </div>
                          <div class="impl_post_data">
                            <h2>
                              <a href="blog_single.html">
                                Stories Behind Car Brand Names{" "}
                              </a>
                            </h2>
                            <p>
                              It is a long established fact that a reader will
                              be distracted by the readable content of a page
                              when looking at its layout. The point of using
                              Lorem Ipsum is that it has a more-or-less normal
                              distribution of letters, as opposed to using
                              'Content here, content here', making it look like
                              readable English. Many desktop publishing packages
                              and web page editors now use Lorem Ipsum as their
                              default model text, and a search for 'lorem ipsum'
                              will uncover many web sites still in their
                              infancy. Various versions have evolved over the
                              years, sometimes by accident, sometimes on purpose
                              (injected humour and the like). There are many
                              variations of passages of Lorem Ipsum available,
                              but the majority have suffered alteration in some
                              form, by injected humour.
                            </p>
                            <div class="impl_pst_info">
                              <div class="impl_pst_admin">
                                <span>
                                  <Link to="#">admin</Link>
                                </span>
                                <span>
                                  <Link to="#">26 June 2022</Link>
                                </span>
                              </div>
                              <ul class="impl_pst_views">
                                <li>
                                  <Link to="/">
                                    <i class="fa fa-eye" aria-hidden="true"></i>{" "}
                                    413
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/">
                                    <i
                                      class="fa fa-comments"
                                      aria-hidden="true"
                                    ></i>{" "}
                                    251
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/">
                                    <i
                                      class="fa fa-share-alt"
                                      aria-hidden="true"
                                    ></i>{" "}
                                    5
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <!--pagination start--> */}
                      <div class="col-lg-12 col-md-12">
                        <div class="impl_pagination_wrapper">
                          <nav aria-label="Page navigation example">
                            <ul class="pagination">
                              <li class="page-item">
                                <Link class="page-link" to="/">
                                  <i
                                    class="fa fa-angle-left"
                                    aria-hidden="true"
                                  ></i>
                                </Link>
                              </li>
                              <li class="page-item">
                                <Link class="page-link active" to="/">
                                  1
                                </Link>
                              </li>
                              <li class="page-item">
                                <Link class="page-link" to="/">
                                  2
                                </Link>
                              </li>
                              <li class="page-item">
                                <Link class="page-link" to="/">
                                  3
                                </Link>
                              </li>
                              <li class="page-item">
                                <Link class="page-link" to="/">
                                  <i
                                    class="fa fa-angle-right"
                                    aria-hidden="true"
                                  ></i>
                                </Link>
                              </li>
                            </ul>
                          </nav>
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
    </>
  );
};

export default Blog;
