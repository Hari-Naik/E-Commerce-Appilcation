export const useUser = () => {
  const user = JSON.parse(localStorage.getItem("user") as string);
  return { user };
};
