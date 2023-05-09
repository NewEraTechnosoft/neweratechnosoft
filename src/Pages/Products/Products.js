import React from "react";
import {
  productAnniversary,
  productCricketLive,
  productPDFCreator,
} from "../../Assets";
import "./Products.css";

const Products = () => {
  return (
    <section className="products">
      <div className="container">
        <div class="row justify-content-center align-items-center g-2 mb-3">
          <div className="col-12 col-md-6 mb-3">
            <div className="pioneers-img" data-aos="zoom-out-up">
              <img
                src={productAnniversary}
                className=" block rounded-lg  h-96 mx-auto"
                alt="Nirmal Kanani CEO & Co-Founder Of New Era Technosoft"
              />
            </div>
          </div>
          <div className="col-12 col-md-6 mb-3">
            <div className="pioneers-details" data-aos="zoom-out-up">
              <h2 className="font-bodyFont font-extrabold text-black tracking-wide text-4xl">
                Anniversary Video Creator
              </h2>
              <h4 className=" font-bodyFont font-bold text-neweraBlue tracking-wide mb-4">
                Convert Your Memory Into Video
              </h4>
              <p className="font-bodyFont font-medium text-lg text-gray-600">
                An anniversary application is a software program designed to
                help individuals or couples commemorate and celebrate their
                anniversaries in a meaningful and personalized way. Whether it's
                a first-year anniversary or a milestone like a 25th wedding
                anniversary, this app provides a variety of features to make the
                occasion memorable.
              </p>
              <p className="font-bodyFont font-medium text-lg text-gray-600">
                The application can be easily downloaded to a mobile device or
                accessed online, making it convenient and accessible to users
                worldwide. Once installed, the app can be customized to suit
                individual preferences and needs. Users can input the
                anniversary date
              </p>
              <a
                href="https://play.google.com/store/apps/details?id=com.anniversary.video.maker"
                target="blank"
                className="inline-block bg-neweraBlue text-white text-decoration-none px-5 py-2 rounded-lg hover:bg-neweraOrange duration-300"
              >
                Install Now
              </a>
            </div>
          </div>
        </div>
        <div class="row justify-content-center align-items-center g-2 mb-3">
          <div className="col-12 col-md-6 mb-3 order-2 order-md-1">
            <div className="pioneers-details" data-aos="zoom-out-up">
              <h2 className="font-bodyFont font-extrabold text-black tracking-wide text-4xl">
              CrickLive - The Live Score
              </h2>
              <h4 className=" font-bodyFont font-bold text-neweraBlue tracking-wide mb-4">
                Enjoy Cricket From Anywhere
              </h4>
              <p className="font-bodyFont font-medium text-lg text-gray-600">
                This live cricket app provides you Live Matches, Live Score,
                Upcoming Matches, Finished Matches and News. <br />
                You can also watch For Free
                <ul style={{ listStyle: "disc" }} className="my-2">
                  <li>
                    <span>
                      All cricket matches content here like match score,
                    </span>
                  </li>
                  <li>
                    <span>Matches odds, stats and many more cricket news.</span>
                  </li>
                  <li>
                    <span>You can Watch Live Cricket Score with Voice</span>
                  </li>
                </ul>
              </p>
              <a
                href="https://play.google.com/store/apps/details?id=com.live.score.scoreandlive.livescores"
                target="blank"
                className="inline-block bg-neweraBlue text-white text-decoration-none px-5 py-2 rounded-lg hover:bg-neweraOrange duration-300"
              >
                Install Now
              </a>
            </div>
          </div>
          <div className="col-12 col-md-6 mb-3 order-1 order-md-2">
            <div className="pioneers-img" data-aos="zoom-out-up">
              <img
                src={productCricketLive}
                className=" block rounded-lg  h-96 mx-auto"
                alt="Nirmal Kanani CEO & Co-Founder Of New Era Technosoft"
              />
            </div>
          </div>
        </div>
        <div class="row justify-content-center align-items-center g-2 mb-3">
          <div className="col-12 col-md-6 mb-3">
            <div className="pioneers-img" data-aos="zoom-out-up">
              <img
                src={productPDFCreator}
                className=" block rounded-lg  h-96 mx-auto"
                alt="Nirmal Kanani CEO & Co-Founder Of New Era Technosoft"
              />
            </div>
          </div>
          <div className="col-12 col-md-6 mb-3">
            <div className="pioneers-details" data-aos="zoom-out-up">
              <h2 className="font-bodyFont font-extrabold text-black tracking-wide text-4xl">
                PDF Creator - All file to PDF
              </h2>
              <h4 className=" font-bodyFont font-bold text-neweraBlue tracking-wide mb-4">
                Convert Any Type Of Files Into PDF
              </h4>
              <p className="font-bodyFont font-medium text-lg text-gray-600">
                PDF Maker can convert images, Excel files and text file to PDF
                files. Easy to use and 100% free. Create PDF files on your
                device, offline, no internet connection or server uploads
                required.
                <ul style={{ listStyle: "disc" }} className="my-2">
                  <li>
                    <span>
                        Image to PDF converter
                    </span>
                  </li>
                  <li>
                    <span>Jpg to PDF converter</span>
                  </li>
                </ul>
              </p>
              <a
                href="https://play.google.com/store/apps/details?id=com.pdfmaker.pdfconverter"
                target="blank"
                className="inline-block bg-neweraBlue text-white text-decoration-none px-5 py-2 rounded-lg hover:bg-neweraOrange duration-300"
              >
                Install Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
