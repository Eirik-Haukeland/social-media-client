import { templateInstance } from '../instance';
import { postHeader } from './header';
import { postMedia } from './media';
import { postFooter } from './footer';
import { postActions } from './actions';
import { postReactionMenu } from './reactions';
import { postCommentsTemplate } from './comments';

export const postPageTemplate = (post) => {
  const clone = templateInstance('postPage');

  clone.querySelector('.post').id = post.id;

  const header = postHeader(post);
  const media = postMedia(post, 'div');
  const footer = postFooter(postActions(post), postReactionMenu(post));
  const comments = postCommentsTemplate(post);
  const children = [header, media, footer, comments];
  clone.querySelector('.page').append(...children);

  return clone;
};
