import { comment } from "../../api/index";
import { getSearchParams } from "../../router/searchParams";

export async function commentListener(event) {
  event.preventDefault();
  const form = event.target;
  const data = new FormData(form);
  const body = data.get("body");
  const postId = form.dataset.postId;
  const replyToId = getSearchParams().replyToId;
  try {
    await comment(postId, body, replyToId);
  } catch {
    return alert("There was a problem posting your comment");
  }

  form.remove();
  location.reload();
}
