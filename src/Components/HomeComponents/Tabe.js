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
                    <div className="col-2 " >

                    </div>

                    <div className="col-1" >
                        <p align="center " >crop Name </p>
                    </div>

                    <div className="col-1" >
                        <p align="right" >crop id</p>
                    </div>


                    <div className="col-1" >
                        <p align="right" >amount</p>
                    </div>


                    <div className="col-1">
                        <p >Price</p>
                    </div>


                    <div className="col-1">
                        <p align="center">Supplied Date </p>
                    </div>


                    <div className="col-1">
                        <p align="center">Expired Date </p>
                    </div>

                    <div className="col-1">
                        <p align="center">Farmer's name </p>
                    </div>


                    <div className="col-1">
                        <p align="right">Rating</p>
                    </div>

                    <div className="col-1">
                        <p> </p>
                    </div>

                </div>
            </div>






        </>
    )
}
export default Table;