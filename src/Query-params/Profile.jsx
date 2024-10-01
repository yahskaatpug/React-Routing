import { useSearchParams } from "react-router-dom";
import DialogComponent from "../Dialog";


const Profile = () => {
  const [searchQuery] = useSearchParams();
  const userName = searchQuery.get("user");
  const color = searchQuery.get("color");
  const subConfirmation = searchQuery.get("sub_confirmation");
  
  console.log("searchQuery ", searchQuery);
  console.log("sub_confirmation :", subConfirmation);
  console.log("searchQuery name: ", searchQuery.get("user"));
  console.log("searchQuery color: ", searchQuery.get("color"));


  return (
    <div>
      {userName && color ? (
        <p>
          Hello {userName}, Your fav color is{" "}
          <strong style={{ color }}>{color}</strong>
        </p>
      ) : (
        <p>Hello user, what is your fav color?</p>
      )}


      {subConfirmation == 1?
      (
        <DialogComponent
                open={true}
                title={"Deletion Confirmation"}
                description={`Do you really want to delete`}
            />
      ):(
        <p>no dialog</p>
      )
      }
    </div>
  );
};

export default Profile;