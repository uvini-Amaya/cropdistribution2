import  "../../pages/style for pages/style.css";
import "../Card/Card.css";
// import StarIcon from "@mui/icons-material/Star";
// import StarOutlineIcon from "@mui/icons-material/StarOutline";
// import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";

function Table(){
    return(
        <>

            <div className="">
                <div className="row justify-content-start">
                    <div className="col-3 " >

                    </div>

                    <div className="col-3" >
                        <p align="center " >crop Name </p>
                    </div>

                    <div className="col-1" >
                        <p align="left" >crop id</p>
                    </div>

                    <div className="col-1" >
                        <p align="left" >amount</p>
                    </div>


                    <div className="col-2">
                        <p >IMDb <b/>Price</p>
                    </div>

                    <div className="col-1">
                        <p align="left">Your <b/>Rating</p>
                    </div>


                    <div className="col-1">
                        <p align>Farmer's id </p>
                    </div>

                </div>
            </div>






        </>
    )
}
export default Table;