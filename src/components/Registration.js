import React from "react";
import Navbar from "./Navbar";
// import Footer from "./Footer";

export default function Registration() {
  return (
    <>
      <Navbar />

      <div class="alert alert-success  imp_date" role="alert">
        <h4 class="alert-heading dark" data-aos="fade-down">
          IMPORTANT DATES !
        </h4>
        <p data-aos="fade-down">
          Last Date for Submission of Full Paper: 15.02.2022 <br />
          Notification of Acceptance of Full Paper: 18.02.2022
          <br />
          Last Date for Registration: 26.02.2022{" "}
        </p>
        <hr />
      </div>

      <h3 class=" container text-success" data-aos="fade-down">
        Registration Fee{" "}
      </h3>
      <div className="table_container my-3 container">
        <table class="table table-bordered container" data-aos="fade-down">
          <thead>
            <tr>
              <th scope="col">DELEGATES</th>
              <th scope="col">INDIA</th>
              <th scope="col">FOREIGN</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td> Corporates / Industry Experts</td>
              <td> Rs. 3000/-</td>
              <td> USD - 40</td>
            </tr>
            <tr>
              <td> Faculty / Academicians </td>
              <td> Rs. 2000/-</td>
              <td> USD - 26</td>
            </tr>
            <tr>
              <td> Research Scholars</td>
              <td> Rs. 1500/-</td>
              <td> USD - 19</td>
            </tr>
            <tr>
              <td> Students</td>
              <td> Rs. 1000/-</td>
              <td> USD - 13</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h4 class=" text-success container my-2" data-aos="fade-down">
        PAYMENT DETAILS
      </h4>
      <div className="container">
        <div
          class="alert alert-dark bg-white"
          role="alert"
          data-aos="fade-down"
        >
          <p>
            Online Transfer / Bank Transfer
            <br />
            Bank Name: Bank of Maharashtra <br />
            Branch Name: Bistupur, Jamshedpur <br />
            Account Name: ARKA JAIN UNIVERSITY <br />
            Account Number: 60273286728 IFSC CODE: MAHB0001241
          </p>

          <hr />
        </div>
      </div>

      <div className="row container-fluid text-center my-5">
        <div class="col ">
          <div class="card mb-4 rounded-3 shadow-sm payment_box border-dark">
            <div class="card-header py-3 text-white bg-success border-dark">
              <h5 class="my-0 fw-normal"> Corporates/IndustryExperts</h5>
            </div>
            <div class="card-body">
              <h5 class="card-title pricing-card-title">RS : 3000</h5>
              <h5 class="card-title pricing-card-title">USD : $40</h5>
              <ul class="list-unstyled mt-3 mb-4"></ul>
              <button
                type="button"
                class="w-100 btn btn-lg btn-success"
                data-aos="flip-up"
              >
                Register Now
              </button>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card mb-4 rounded-3 shadow-sm payment_box border-dark">
            <div class="card-header py-3 text-white bg-success border-dark">
              <h5 class="my-0 fw-normal"> Faculty/Academicians</h5>
            </div>
            <div class="card-body">
              <h5 class="card-title pricing-card-title">RS : 2000</h5>
              <h5 class="card-title pricing-card-title">USD : $26</h5>
              <ul class="list-unstyled mt-3 mb-4"></ul>
              <button
                type="button"
                class="w-100 btn btn-lg btn-success"
                data-aos="flip-up"
              >
                Register Now
              </button>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card mb-4 rounded-3 shadow-sm payment_box border-dark">
            <div class="card-header py-3 text-white bg-success border-dark">
              <h5 class="my-0 fw-normal">ResearchScholars</h5>
            </div>
            <div class="card-body">
              <h5 class="card-title pricing-card-title">RS : 1500</h5>
              <h5 class="card-title pricing-card-title">USD : $19</h5>
              <ul class="list-unstyled mt-3 mb-4"></ul>
              <button
                type="button"
                class="w-100 btn btn-lg btn-success"
                data-aos="flip-up"
              >
                Register Now
              </button>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card mb-4 rounded-3 shadow-sm payment_box border-dark">
            <div class="card-header py-3 text-white bg-success border-dark">
              <h5 class="my-0 fw-normal">Students</h5>
            </div>
            <div class="card-body text-center">
              <h5 class="card-title pricing-card-title">RS : 1000</h5>
              <h5 class="card-title pricing-card-title">USD : $13</h5>
              <ul class="list-unstyled mt-3 mb-4">
                <li></li>
              </ul>
              <button
                type="button"
                class="w-100 btn btn-lg btn-success"
                data-aos="flip-up"
              >
                Register Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="alert alert-success" role="alert">
        <h4 class="alert-heading dark">PUBLICATION FEE</h4>
        <p>
          The selected paper of the International Conference will be sent to the
          journal publishers for Paper publications. The publication charges
          will be given by the authors as per the actual of the fees charged by
          the publishers. The publication charges for the research papers
          selected for the SCI/SCOPUS Indexed Journal will be communicated to
          the respective authors.
        </p>

        <hr />
      </div>
    </>
  );
}
