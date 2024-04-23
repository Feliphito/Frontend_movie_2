import { ListFav } from "../interfaces";

export const useLocalStorage = (key: string) => {
  const setItem = (value: unknown) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };
  
  const getItem = (key: string) => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : undefined;
    } catch (error) {
      console.error(error);
    }
  };

  const removeItem = () => {
    try {
      window.localStorage.removeItem(key);
    } catch (error) {
      console.error(error);
    }
  };

  const validate = (id?: number) => {
    try {
      const item = JSON.parse(localStorage.getItem(key) || "[]") as ListFav[];

      return item.some((item) => item.id === id) ? true : false;
    } catch {
      console.error("no existe");
    }
  };

  return { setItem, getItem, removeItem, validate };
};
