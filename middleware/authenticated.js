export default function({ store, redirect }) {
  if (!store.getters["user/userStatus"]) {
    return redirect("/");
  }
}
