
import "./Home.css";

const UserCard = ({name = "dummy name" , img="https://picsum.photos/200/300" , colour="Yellow"}) => {

console.log("image Name : ",img)
    return(
        <>
            <div className="border w-[22rem] h-auto shadow-md rounded-xl">
                <img src={img} alt="demo" className="w-[100%] h-[40vh] rounded-t-xl" />
                <div className="p-3">
                    <h1 className="text-3xl">{name}</h1>
                    <p className="text-gray-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita soluta sapiente ducimus facere maxime necessitatibus hic reiciendis debitis, quis natus quaerat a optio laboriosam ipsum est impedit sint voluptate ad.</p>
                    <button className="bg-black text-white p-2 rounded-md shadow mt-2">Know More</button>
                </div>
            </div>

        </>
    );
}
export default UserCard;