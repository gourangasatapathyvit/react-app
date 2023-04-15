import apiClient from "./apiClient";

interface User {
  id: number;
  name: string;
}

class UserService {
  getAllUser() {
    const controller = new AbortController();
    const request = apiClient.get<User>("/user/", {
      signal: controller.signal,
    });

    return { request, cancel: () => controller.abort() };
  }

  deleteUser(id: number) {
    const res = apiClient.delete("/users/" + id);
  }

  createUser(user: User) {
    return apiClient.post("/user", user);
  }

  updateUser(user: User) {
    return apiClient.put("/user" + user.id, user);
  }
}

export { UserService };
