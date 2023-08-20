import { commentsBadgeTemplate } from '../comment/badge';
import { templateInstance } from '../instance';
import { profileThumbnail } from '../profile/thumbnail';
import { postTags } from './tags';

export const postHeader = (post) => {
  const clone = templateInstance('postHeader');

  clone.querySelector('.card-header').href = `./?view=post&postId=${post.id}`;
  clone.querySelector('b').innerText = post.title;
  if (post.body) {
    clone.querySelector('span').innerText = post.body;
  } else {
    clone.querySelector('span').remove();
  }

  const commentsBadge = commentsBadgeTemplate(post.comments);
  const tagsBadges = postTags(post);
  const children = [commentsBadge, tagsBadges];

  if (post.author) {
    children.push(profileThumbnail(post.author));
  }
  clone.querySelector('.card-header').append(...children);

  return clone;
};
