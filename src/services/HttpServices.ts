import apiClient from "./apiClient";

interface entity {
  id: number;
}

class HttpServices {
  endPoint: string;

  constructor(endPoint: string) {
    this.endPoint = endPoint;
  }

  getAllItem<T>() {
    const controller = new AbortController();
    const request = apiClient.get<T[]>(this.endPoint, {
      signal: controller.signal,
    });

    return { request, cancel: () => controller.abort() };
  }

  deleteItem<T extends entity>(item: T) {
    return apiClient.delete(this.endPoint + "/" + item.id);
  }

  addItem<T extends entity>(entity: T) {
    return apiClient.post(this.endPoint, entity);
  }

  updateItem<T extends entity>(entity: T) {
    return apiClient.put(this.endPoint + "/" + entity.id, entity);
  }
}

const create = (endPoint: string) => new HttpServices(endPoint);

export default create;
