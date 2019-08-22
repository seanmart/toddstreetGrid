export default function({ store, redirect }) {
  if (!store.getters["user/getUserStatus"]) {
    return redirect("/");
  }
}
