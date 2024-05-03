import { ListFav } from "../interfaces";

const key = "fav";

export const useLocalStorage = () => {
  const saveItem = (value: ListFav) => {
    if (validate(value.id)) {
      throw new Error("existe la movie");
    }

    try {
      const items = getItems();
      items?.push(value);
      window.localStorage.setItem(key, JSON.stringify(items));
    } catch (error) {
      console.error(error);
    }
  };

  const getItem = (id: number): ListFav | undefined => {
    try {
      const item = JSON.parse(localStorage.getItem(key) || "[]") as ListFav[];

      return item.find((item) => item.id === id);
    } catch (error) {
      console.error(error);
    }
  };

  const getItems = (): ListFav[] | undefined => {
    try {
      return JSON.parse(localStorage.getItem(key) || "[]") as ListFav[];
    } catch (error) {
      console.error(error);
    }
  };

  const removeItem = (id: number) => {
    if (!validate(id)) {
      throw new Error("no existe la movie");
    }
    try {
      const items = getItems();
      const newItem = items?.filter((item) => item.id !== id);
      console.log(newItem);
      window.localStorage.setItem(key, JSON.stringify(newItem));
      // window.localStorage.removeItem(key);
    } catch (error) {
      console.error(error);
    }
  };

  const validate = (id: number) => {
    try {
      const item = JSON.parse(localStorage.getItem(key) || "[]") as ListFav[];

      return item.some((item) => item.id === id) ? true : false;
    } catch {
      console.error("no existe");
    }
  };

  return { saveItem, getItem, getItems, removeItem, validate };
};
