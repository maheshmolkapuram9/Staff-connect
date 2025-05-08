import { useDispatch, useSelector } from "react-redux";
import { selectUser, setUser, userType } from "../store/user/userSlice";
import OrangeButton from "../utils/inputs/OrangeButton";

interface users {
  payload: userType;
  text: string;
}

const UserInfo = () => {
  const dispatch = useDispatch();
  const userDeatils = useSelector(selectUser);

  const users: users[] = [
    {
      payload: { staffId: 1, name: "Mahesh", isAdmin: false },
      text: "User 1 (Mahesh)",
    },
    {
      payload: { staffId: 2, name: "Zishan", isAdmin: false },
      text: "User 2 (Zishan)",
    },
    {
      payload: { staffId: 3, name: "Virji", isAdmin: true },
      text: "Admin (Virji)",
    },
  ];

  return (
    <div className="relative group bg-primary rounded-full w-[30px] h-[30px] md:w-[45px] md:h-[45px] flex justify-center items-center cursor-pointer transition-all duration-300 ">
      <p className="md:text-3xl font-bold">
        {userDeatils.name ? userDeatils.name[0] : "M"}
      </p>
      <div className="hidden z-10 group-hover:block absolute text-center top-[calc(100%-75px)] pt-20 pb-10 right-0 transition-all duration-300 ">
        <div className="bg-text-primary text-background p-2 md:p-4 rounded-xl flex flex-col gap-2">
          <p className="text-nowrap pb-2 text-[8px] md:text-xl ">
            Current User:{" "}
            {userDeatils.isAdmin ? "Admin" : "User " + userDeatils.staffId}
          </p>

          {users.map((user) => (
            <OrangeButton
              key={user.text}
              text={user.text}
              onClick={() => {
                dispatch(setUser(user.payload));
              }}
              className="text-xs p-1 md:p-2"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
