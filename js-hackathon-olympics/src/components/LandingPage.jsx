import React from "react";

export default function Landing(props) {

  return (
    <div className=" pt-5 light-grey">
      <div className="d-flex justify-content-around container">
        <div className="">
          <h1 className="pac title-font">Kanvas</h1>
          <h1 className="mont">by Team Ove<span className="blue">React</span></h1>
          <p className="mont">Get organized, and Stay ahead of the competition with our new Kanban Board!</p>
          <div className='d-flex justify-content-around mt-3'>
            <div>
              <a href="https://www.linkedin.com/in/nathan-reitan/" target="_blank">
                <div className='circle nathan m-2'>
                </div>
              </a>
              <p className='text-center mont mt-2'>Nathan</p>
            </div>
            <div>
              <a href="https://www.linkedin.com/in/jasonkim-jk/" target="_blank"><div className='circle jason m-2'></div></a>
              <p className='text-center mont mt-2'>Jason</p>
            </div>
            <div>
              <a href="https://www.linkedin.com/in/kushol-huq/" target="_blank"><div className='circle kushol m-2'></div></a>
              <p className='text-center mont mt-2'>Kushol</p>
            </div>
          </div>
          <div className=''>
            <h4 className='mont mt-3'>Give our Kanban board a test drive by clicking the button below</h4>
            <button onClick={() => props.handleDisplay()} className='custom mont p-2'>
              Enter Here
          </button>
          </div>
        </div>
        <div className="mt-3 ml-5 pb-5">
          <div className="demo">
            {/* <img src="../images/demosmaller.gif" alt="kanban board" className='py-3 w-75' /> */}
          </div>
          <div className='our-app ml-4 mt-5'>
            <h2 className='mont ml-3 '>What Our App has to Offer:</h2>
            <ul className="mont m-3">
              <li className='m-3'>
                Do you like to plan with more than 3 stages? You're in luck!
                Our app gives you the ability to add and remove columns with ease.
            </li>
              <li className='m-3'>
                We give you the power, the titles of the columns,
                task titles and task contents are all completely editable.
            </li>
              <li className='m-3'>
                Add new tasks to any Column at any time!
            </li>
              <li className='m-3'>
                Thanks to the work of our developers, our app gives your the ability drag columns to switch the order if needed
                and you can move tasks up and down within the column or horizontally to another column!
            </li>
            </ul>
          </div>
        </div>



      </div>
      {/* <div className='d-flex justify-content-center flex-wrap'>
        <h2 className='w-100 d-flex justify-content-center mont '>What Our App has to Offer:</h2>
        <ul>
          <li>
            Do you like to plan with more than 3 stages? You're in luck!
            Our app gives you the ability to add and remove columns with ease.
            </li>
          <li>
            We give you the power, the titles of the columns,
            task titles and task contents are all completely editable.
            </li>
          <li>
            Add new tasks to any Column at any time!
            </li>
          <li>
            Thanks to the work of our developers, our app gives your the ability drag columns to switch the order if needed
            and you can move tasks up and down within the column or horizontally to another column!
            </li>
        </ul>
      </div> */}
      {/* <div className=''>
        <h4 className='mont'>So what are you waiting for, give our Kanban board a test drive by clicking the button below</h4>
        <button onClick={() => props.handleDisplay()} className='bg-info text-light w-25 border border-dark rounded'>
          Enter Here
          </button>
      </div> */}
    </div>
  )

}
