import { useEffect, useRef, useState } from "react";
import userService, { User } from "../services/userService";
import { CanceledError } from "../services/apiClient";

const useUsers = () => {
  const [userData, setUserData] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // const controller = new AbortController();

    /*     const getCall = async () => {
          try {
            let users = await axios.get<User[]>(
              "https://jsonplaceholder.typicode.com/users"
            );
            setUserData(users.data);
          } catch (error) {
            setError((error as AxiosError).message);
          }
        };
    
        getCall(); */

    setLoading(true);
    /* using apiclient only
        apiClient
          .get<User[]>("/users", {
            signal: controller.signal,
          })
          .then((res) => {
            setUserData(res.data);
            setLoading(false);
          })
          .catch((err) => {
            if (err instanceof CanceledError) return;
            setError("true");
            setLoading(false);
          }); */

    const { request, cancel } = userService.getAllItem<User>();
    request
      .then((res) => {
        setUserData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError("true");
        setLoading(false);
      });
    return () => {
      cancel();
    };
  }, []);

  return { userData, error, loading, setUserData, setError };
};

export default useUsers;
