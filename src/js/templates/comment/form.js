import { commentListener } from '../../listeners/index';
import { templateInstance } from '../instance';

export const commentFormTemplate = (postId) => {
  const clone = templateInstance('commentForm');
  clone.querySelector('form').dataset.postId = postId;
  clone.querySelector('form').addEventListener('submit', commentListener);
  return clone;
};
