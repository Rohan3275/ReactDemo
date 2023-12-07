import React from 'react'


function RForm() {
  return (
    <>
    <section class="container">
        <header>Registration</header>
        <form action="#" class="form">
            <div class="input-boxa">
            <div class="input-box"> 
                <label for="fullname">Full Name</label>
                <input type="text" placeholder="Enter your name" required />
            </div>

            <div class="input-box">
                <label for="fullname">Username</label>
                <input type="text" placeholder="Enter your username" required />
            </div>
        </div>
            <div class="column">
                <div class="input-box">
                    <label for="fullname">Email</label>
                    <input type="text" placeholder="Enter your email" required />
                </div>
                <div class="input-box">
                    <label for="fullname">Phone Number</label>
                    <input type="number" placeholder="Enter your number" required />
                </div> 
            </div>
            <div class="columna">
                <div class="input-box">
                    <label for="fullname">Password</label>
                    <input type="text" placeholder="Enter your password" required />
                </div>
                <div class="input-box">
                    <label for="fullname">Confirm Password</label>
                    <input type="text" placeholder="Confirm your password" required />
                </div>
            </div>
            <div class="gender-box">
                <h3>Gender</h3>
                <div class="gender-option">
                    <div class="gender">
                        <input type="radio" id="check-male" name="gender" checked />
                        <label for="check">Male</label>
                    </div>
                    <div class="gender">
                        <input type="radio" id="check-female" name="gender" />
                        <label for="check">Female</label>
                    </div>
                    <div class="gender">
                        <input type="radio" id="check-pnts" name="gender" />
                        <label for="check">Prefer not to say</label>
                    </div>
                </div>
            </div>
            <button>Register</button>
        </form>
    </section>
    </>
  )
}

export default RForm