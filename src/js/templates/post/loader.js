import { BLANK_POST } from '../../data/blank/post';
import { postThumbnailTemplate } from './thumbnail';

export const postLoaderTemplate = (post = {}) => {
  post = {
    ...BLANK_POST,
    ...post,
  };

  const thumbnail = postThumbnailTemplate(post);
  thumbnail.querySelector('.post').classList.add('loader');
  return thumbnail;
};
