import React from 'react';
import '../../App.css';

export default function Contact() {

    return (

        <div className="contact">
            <div className="row">
                <div className="col-sm-9">
                    <h1 >CONTACT ME </h1>
                    <ul class="drop">
                        <li class='list'><i class="fas fa-envelope-square"></i><a class='text' href="mailto:swethareddyl@gmail.com">Email</a></li>
                        <li class='list'><i class="fas fa-phone"></i><a class='text' href="tel:6035023995">Telephone</a></li>
                        <li class='list'><i class='fab fa-github'></i><a class='text' href="https://github.com/swethareddyl">Github </a></li>
                        <li class='list'><i class='fab fa-linkedin' /><a class='text' href="https://www.linkedin.com/in/swetha-reddivari-8508a82/">linkedin</a></li>



                    </ul>

                </div>
                <div className="col-sm-3">

                </div>
            </div>
        </div>

    )
}