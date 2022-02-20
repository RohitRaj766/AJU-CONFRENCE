import React from 'react'
import Navbar from './Navbar'


export default function Contact() {
  return (
    <div>
<Navbar />

<div className="container py-5">
      <div class="container-fluid row my-5">
      <div class="col d-flex align-items-start my-3">
        <div class="icon-square bg-danger text-dark flex-shrink-0 me-3">
          <svg class="bi" width="1em" height="1em"></svg>
        </div>
        <div>
          <h4 >CONVENOR</h4>
          <p>Mr. Ashwini Kumar, Asst. Prof, ARKA JAIN University.<br/>
          Email - ashwini.kumar@ arkajainuniversity.ac.in <br/>Mob. – +91-821035379</p>
          <a href="https://mail.google.com/" class="btn btn-danger " data-aos="fade-down">
          Email-Now
          </a>
        </div>
      </div>
      
      
   

      <div class="col d-flex align-items-start my-3">
        <div class="icon-square bg-danger text-dark flex-shrink-0 me-3">
          <svg class="bi" width="1em" height="1em"></svg>
        </div>
        <div>
          <h4 >CO- CONVENOR</h4>
          <p>Dr. Binod Kumar Choudhary, Asst. Prof, ARKA JAIN University.<br/>
          Email- dr.binod@ arkajainuniversity.ac .in<br/>Mob. – +91-9939974038</p>
          <a href="https://mail.google.com/" class="btn btn-danger" data-aos="fade-down">
          Email-Now
          </a>
        </div>
      </div>

      <div class="col d-flex align-items-start my-3 ">
<div class="icon-square bg-danger text-dark flex-shrink-0 me-3 ">
  <svg class="bi" width="1em" height="1em"></svg>
</div>
<div>
<h4 >Organising Secretary</h4>
  <p>Dr. Anupam Kumari, Asst. Prof, ARKA JAIN University.<br/>
  Email- dr.anupam@ arkajainuniversity.ac.in<br/>Mob. – +91-9939974038</p>
  <a href="https://mail.google.com/" class="btn btn-danger " data-aos="fade-down">
  Email-Now
  </a>
</div>
</div>
</div>
    </div>
    
    
    
    
    
    </div>
  )
}
