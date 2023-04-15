import apiClient from "./apiClient";

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

class userServiceBackUp {
  getAllUser() {
    const controller = new AbortController();
    const request = apiClient.get<User[]>("/users", {
      signal: controller.signal,
    });

    return { request, cancel: () => controller.abort() };
  }

  deleteUser(item: User) {
    return apiClient.delete("/users/" + item.id);
  }

  addUser(user: User) {
    return apiClient.post("/users", user);
  }

  updateUser(user: User) {
    return apiClient.put("/users/" + user.id, user);
  }
}

export default new userServiceBackUp();
