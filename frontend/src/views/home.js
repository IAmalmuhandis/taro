import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import PrimaryPinkButton from '../components/primary-pink-button'
import FeatureCard from '../components/feature-card'
import OutlineBlackButton from '../components/outline-black-button'
import ListItem from '../components/list-item'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Soft UI Pro</title>
        <meta property="og:title" content="Soft UI Pro" />
      </Helmet>
      <Header></Header>
      <div className="home-hero">
        <div className="home-container01">
          <div className="home-card">
            <h1 className="home-text">TARO APP</h1>
            <h1 className="home-text01 HeadingOne">Plan your dream event</h1>
            <span className="home-text02">
              Bring your dream event to life with Taro App – the ultimate event
              planning tool for every occasion
            </span>
            <div className="home-container02">
              <div className="home-container03">
                <Link to="/profile" className="home-navlink">
                  <PrimaryPinkButton
                    button="Get Started"
                    className="home-component01"
                  ></PrimaryPinkButton>
                </Link>
              </div>
            </div>
            <div className="home-container04">
              <img
                alt="image"
                src="/playground_assets/northino%20logo-1500h.png"
                className="home-image"
              />
              <img
                alt="image"
                src="/playground_assets/northino%20logo-1500h.png"
                className="home-image01"
              />
              <img
                alt="image"
                src="/playground_assets/northino%20logo-1500h.png"
                className="home-image02"
              />
              <img
                alt="image"
                src="/playground_assets/northino%20logo-1500h.png"
                className="home-image03"
              />
            </div>
          </div>
        </div>
      </div>
      <img
        alt="image"
        src="/playground_assets/curved6-1500h.jpg"
        className="home-image04"
      />
      <section className="home-features">
        <FeatureCard
          text="Discover the perfect event center for your dream celebration today."
          title="Components"
          image_src="/playground_assets/cube1.svg"
        ></FeatureCard>
        <FeatureCard
          text="Savor delicious meals from top-rated caterers at your event."
          new_prop="Eatery Services"
          image_src="/playground_assets/person1.svg"
        ></FeatureCard>
        <FeatureCard
          text="Set the perfect mood with our skilled DJs and MCs."
          title="Less Code"
          new_prop="DJs &amp; MC"
          image_src="/playground_assets/rocket1.svg"
        ></FeatureCard>
        <FeatureCard
          text="Explore our other services and let us exceed your expectations."
          title="Fully Responsive"
          new_prop="Others"
          image_src="/playground_assets/credit%20card1.svg"
        ></FeatureCard>
      </section>
      <section className="home-container05">
        <div className="home-container06">
          <h1 className="home-text03">Inspiration</h1>
          <span className="home-text04">
            See what&apos;s possible with Taro App
          </span>
        </div>
        <div className="home-container07">
          <div className="home-container08">
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEzfHxXZWRkaW5nfGVufDB8fHx8MTY4MTkxMjU1MQ&amp;ixlib=rb-4.0.3&amp;w=1100"
              className="home-image05"
            />
            <span className="home-text05">
              <span>
                &quot;Planning an event is like painting a masterpiece. It takes
                time, effort, and attention to detail to create something truly
                beautiful.&quot;
              </span>
              <br></br>
              <span> - Maya Angelou.</span>
            </span>
            <div className="home-container09">
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1578922864601-79dcc7cbcea9?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI2fHxiaXJ0aGRheXxlbnwwfHx8fDE2ODE5MTI3MTI&amp;ixlib=rb-4.0.3&amp;w=1000"
                className="home-image06"
              />
            </div>
          </div>
          <div className="home-container10">
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDR8fGV2ZW50fGVufDB8fHx8MTY4MTkxMjUwOA&amp;ixlib=rb-4.0.3&amp;w=1100"
              className="home-image07"
            />
            <div className="home-container11">
              <h3 className="home-text09">
                Popular Event Types You Can Simply Organize With Taro App
              </h3>
              <p>
                <br></br>
                <span>
                  Wedding - A special day for two people in love to celebrate
                  their union with their family and friends.
                </span>
                <br></br>
                <br></br>
                <span>
                  Birthday Party - A celebration of someone&apos;s life and the
                  passing of another year.
                </span>
                <br></br>
                <br></br>
                <span>
                  Corporate Event - An event organized by a company for its
                  employees, clients, or stakeholders, typically for business
                  purposes.
                </span>
                <br></br>
                <br></br>
                <span>
                  Conference - A meeting of people for discussion or training,
                  usually focused on a particular topic or theme.
                </span>
                <br></br>
                <br></br>
                <span>
                  Product Launch - An event designed to introduce a new product
                  or service to the public or a specific target audience.
                </span>
                <br></br>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="home-testimonials">
        <div className="home-container12">
          <div className="home-container13">
            <div className="home-container14">
              <h2 className="home-text26">Get in Touch with Us</h2>
              <p className="home-text27">
                Feel free to contact our support Team for any inquiries or
                assistance!
              </p>
              <p className="home-text28">
                <span className="Body">Email : taro.info@gmail.com</span>
                <br></br>
                <span>Call : 08123402377</span>
                <br></br>
              </p>
              <p className="home-text33">Support Team</p>
              <div className="home-container15">
                <img
                  alt="image"
                  src="/playground_assets/img_0600-200w.jpg"
                  className="home-image08"
                />
                <div className="home-container16"></div>
                <img
                  alt="image"
                  src="/playground_assets/team-3-200h.jpg"
                  className="home-image09"
                />
                <div className="home-container17"></div>
                <img
                  alt="image"
                  src="/playground_assets/img_0600-200w.jpg"
                  className="home-image10"
                />
              </div>
            </div>
          </div>
          <div className="home-logos">
            <div className="home-container18">
              <div className="home-container19">
                <div className="home-container20">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                </div>
                <div className="home-container21">
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="home-icon02"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </div>
                <div className="home-container22">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon04"
                  >
                    <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                  </svg>
                </div>
              </div>
              <div className="home-container23">
                <a
                  href="https://www.youtube.com/@northino"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link"
                >
                  <div className="home-container24">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="home-icon06"
                    >
                      <path d="M525.143 744.571v-89.714c0-18.857-5.714-28.571-16.571-28.571-6.286 0-12.571 2.857-18.857 9.143v128c6.286 6.286 12.571 9.143 18.857 9.143 10.857 0 16.571-9.143 16.571-28zM630.286 674.857h37.714v-19.429c0-19.429-6.286-29.143-18.857-29.143s-18.857 9.714-18.857 29.143v19.429zM304 522.857v40h-45.714v241.714h-42.286v-241.714h-44.571v-40h132.571zM418.857 594.857v209.714h-38.286v-22.857c-14.857 17.143-29.143 25.714-43.429 25.714-12 0-20.571-5.143-24-16-2.286-6.286-3.429-16-3.429-30.857v-165.714h37.714v154.286c0 8.571 0 13.714 0.571 14.857 0.571 5.714 3.429 8.571 8.571 8.571 8 0 15.429-5.714 24-17.714v-160h38.286zM562.857 658.286v83.429c0 18.857-1.143 33.143-4 41.714-4.571 16-14.857 24-30.286 24-13.143 0-26.286-8-38.857-23.429v20.571h-38.286v-281.714h38.286v92c12-14.857 25.143-22.857 38.857-22.857 15.429 0 25.714 8 30.286 24 2.857 8.571 4 22.286 4 42.286zM706.286 732v5.143c0 12.571-0.571 20.571-1.143 24.571-1.143 8.571-4 16-8.571 22.857-10.286 15.429-26.286 22.857-45.714 22.857-20 0-35.429-7.429-46.286-21.714-8-10.286-12-26.857-12-49.143v-73.714c0-22.286 3.429-38.286 11.429-49.143 10.857-14.286 26.286-21.714 45.714-21.714 18.857 0 34.286 7.429 44.571 21.714 8 10.857 12 26.857 12 49.143v43.429h-76v37.143c0 19.429 6.286 29.143 19.429 29.143 9.143 0 14.857-5.143 17.143-14.857 0-2.286 0.571-10.857 0.571-25.714h38.857zM448.571 261.143v89.143c0 19.429-6.286 29.143-18.286 29.143-12.571 0-18.286-9.714-18.286-29.143v-89.143c0-19.429 5.714-29.714 18.286-29.714 12 0 18.286 10.286 18.286 29.714zM753.143 668.571v0c0-49.143 0-101.143-10.857-148.571-8-33.714-35.429-58.286-68-61.714-77.714-8.571-156.571-8.571-235.429-8.571-78.286 0-157.143 0-234.857 8.571-33.143 3.429-60.571 28-68 61.714-10.857 47.429-11.429 99.429-11.429 148.571v0c0 48.571 0 100.571 11.429 148.571 7.429 33.143 34.857 57.714 67.429 61.714 78.286 8.571 157.143 8.571 235.429 8.571s157.143 0 235.429-8.571c32.571-4 60-28.571 67.429-61.714 11.429-48 11.429-100 11.429-148.571zM321.714 296.571l51.429-169.143h-42.857l-29.143 111.429-30.286-111.429h-44.571c8.571 26.286 18.286 52.571 26.857 78.857 13.714 40 22.286 69.714 26.286 90.286v114.857h42.286v-114.857zM486.857 342.857v-74.286c0-22.286-4-38.857-12-49.714-10.857-14.286-25.714-21.714-44.571-21.714-19.429 0-34.286 7.429-44.571 21.714-8 10.857-12 27.429-12 49.714v74.286c0 22.286 4 38.857 12 49.714 10.286 14.286 25.143 21.714 44.571 21.714 18.857 0 33.714-7.429 44.571-21.714 8-10.286 12-27.429 12-49.714zM590.286 411.429h38.286v-211.429h-38.286v161.714c-8.571 12-16.571 17.714-24 17.714-5.143 0-8.571-2.857-9.143-9.143-0.571-1.143-0.571-5.714-0.571-14.857v-155.429h-38.286v167.429c0 14.857 1.143 24.571 3.429 31.429 4 10.286 12.571 15.429 24.571 15.429 14.286 0 28.571-8.571 44-25.714v22.857zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                    </svg>
                  </div>
                </a>
                <div className="home-container25">
                  <div className="home-container26">
                    <svg
                      viewBox="0 0 602.2582857142856 1024"
                      className="home-icon08"
                    >
                      <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          alt="image"
          src="/playground_assets/bottom.svg"
          className="home-bottom-wave-image"
        />
        <img
          alt="image"
          src="/playground_assets/waves-white.svg"
          className="home-image11"
        />
        <img
          alt="image"
          src="/playground_assets/top.svg"
          className="home-top-wave-image"
        />
      </section>
      <section className="home-contaier">
        <div className="home-container27">
          <div className="home-container28">
            <svg viewBox="0 0 1024 1024" className="home-icon10">
              <path d="M363.722 722.052l41.298-57.816-45.254-45.256-57.818 41.296c-10.722-5.994-22.204-10.774-34.266-14.192l-11.682-70.084h-64l-11.68 70.086c-12.062 3.418-23.544 8.198-34.266 14.192l-57.818-41.298-45.256 45.256 41.298 57.816c-5.994 10.72-10.774 22.206-14.192 34.266l-70.086 11.682v64l70.086 11.682c3.418 12.060 8.198 23.544 14.192 34.266l-41.298 57.816 45.254 45.256 57.818-41.296c10.722 5.994 22.204 10.774 34.266 14.192l11.682 70.084h64l11.68-70.086c12.062-3.418 23.544-8.198 34.266-14.192l57.818 41.296 45.254-45.256-41.298-57.816c5.994-10.72 10.774-22.206 14.192-34.266l70.088-11.68v-64l-70.086-11.682c-3.418-12.060-8.198-23.544-14.192-34.266zM224 864c-35.348 0-64-28.654-64-64s28.652-64 64-64 64 28.654 64 64-28.652 64-64 64zM1024 384v-64l-67.382-12.25c-1.242-8.046-2.832-15.978-4.724-23.79l57.558-37.1-24.492-59.128-66.944 14.468c-4.214-6.91-8.726-13.62-13.492-20.13l39.006-56.342-45.256-45.254-56.342 39.006c-6.512-4.766-13.22-9.276-20.13-13.494l14.468-66.944-59.128-24.494-37.1 57.558c-7.812-1.892-15.744-3.482-23.79-4.724l-12.252-67.382h-64l-12.252 67.382c-8.046 1.242-15.976 2.832-23.79 4.724l-37.098-57.558-59.128 24.492 14.468 66.944c-6.91 4.216-13.62 8.728-20.13 13.494l-56.342-39.006-45.254 45.254 39.006 56.342c-4.766 6.51-9.278 13.22-13.494 20.13l-66.944-14.468-24.492 59.128 57.558 37.1c-1.892 7.812-3.482 15.742-4.724 23.79l-67.384 12.252v64l67.382 12.25c1.242 8.046 2.832 15.978 4.724 23.79l-57.558 37.1 24.492 59.128 66.944-14.468c4.216 6.91 8.728 13.618 13.494 20.13l-39.006 56.342 45.254 45.256 56.342-39.006c6.51 4.766 13.22 9.276 20.13 13.492l-14.468 66.944 59.128 24.492 37.102-57.558c7.81 1.892 15.742 3.482 23.788 4.724l12.252 67.384h64l12.252-67.382c8.044-1.242 15.976-2.832 23.79-4.724l37.1 57.558 59.128-24.492-14.468-66.944c6.91-4.216 13.62-8.726 20.13-13.492l56.342 39.006 45.256-45.256-39.006-56.342c4.766-6.512 9.276-13.22 13.492-20.13l66.944 14.468 24.492-59.13-57.558-37.1c1.892-7.812 3.482-15.742 4.724-23.79l67.382-12.25zM672 491.2c-76.878 0-139.2-62.322-139.2-139.2s62.32-139.2 139.2-139.2 139.2 62.322 139.2 139.2c0 76.878-62.32 139.2-139.2 139.2z"></path>
            </svg>
          </div>
          <h2 className="home-text34 HeadingTwo">Why Us</h2>
          <span className="home-text35">
            Experience stress-free event planning with our innovative platform.
          </span>
        </div>
        <div className="home-container29">
          <div className="home-container30">
            <div className="home-container31"></div>
            <div className="home-container32">
              <svg viewBox="0 0 987.4285714285713 1024" className="home-icon12">
                <path d="M438.857 508.571l312 312c-79.429 80.571-190.286 130.286-312 130.286-242.286 0-438.857-196.571-438.857-438.857s196.571-438.857 438.857-438.857v435.429zM545.714 512h441.714c0 121.714-49.714 232.571-130.286 312zM950.857 438.857h-438.857v-438.857c242.286 0 438.857 196.571 438.857 438.857z"></path>
              </svg>
              <h1 className="home-text36">
                <span className="HeadingOne">Explore and Discover!</span>
                <br></br>
                <br></br>
                <br></br>
              </h1>
              <Link to="/profile" className="home-navlink1">
                <OutlineBlackButton
                  button="get started"
                  rootClassName="outline-black-button-root-class-name"
                  className="home-component06"
                ></OutlineBlackButton>
              </Link>
            </div>
          </div>
          <div className="home-container33">
            <ListItem
              new_prop="1. Easy and Convenient Planning: "
              description="With Taro App, customers can plan their dream event with just a few clicks, making the entire process seamless and convenient. Our platform provides all the necessary tools and features to make event planning a breeze."
            ></ListItem>
            <ListItem
              title="2. Performance Analyze"
              description="Taro App offers customers a wide selection of vendors, including event centers, caterers, DJs, MCs, and other professionals required for any event. Our customers can choose from a variety of options based on their needs and preferences, ensuring that their event is tailored to their unique vision."
              new_prop="2. Wide Selection of Vendors:"
            ></ListItem>
            <ListItem
              title="3. Social Conversions"
              description="We understand that planning an event can be expensive, which is why we offer affordable pricing options for our customers. Our pricing is competitive and transparent, with no hidden fees or charges. This allows our customers to plan their dream event without breaking the bank."
              new_prop="3. Affordable Pricing:"
            ></ListItem>
          </div>
        </div>
        <div className="home-divider"></div>
      </section>
      <Footer></Footer>
    </div>
  )
}

export default Home
