
import { Fragment } from "react";

//Fragment giống thẻ div mà không hiển thị chỉ dùng để bao bọc trang
import { Route } from "react-router-dom"
export const UserTemplate = (props) => {
//props (path,component)



    return <Route exact path={props.path} render={(propsRoute)=>{

           return <Fragment>
  
              <div className="d-flex">
                    <div className="w-50">
                        <img className="w-100 vh-100" src="https://picsum.photos/2000/2000" alt="..." />
                    </div>
                    <div className="w-50">
                        <props.component {...propsRoute} />
                    </div>

              </div>
           </Fragment>
        }} />
 
}