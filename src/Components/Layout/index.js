import React from 'react';


const Layout = (props) => {
  return(
      <React.Fragment>
          <div className="container">
        {props.children}
      
    </div>
    <div>
        <h1>THIS IS FOOTER FOR ALL PAGES</h1>
    </div>
      </React.Fragment>   
   )

 }

export default Layout