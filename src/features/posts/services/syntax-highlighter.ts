import hl from 'highlight.js';
import { Post } from '../types';

export const getCode = (posts: Post[]) => {
  const hlPosts = posts.map(post => {
    // const code = hl.highlight('javascript', post.body).value;
    post.body.match(/<code>([\s\S]+)<\/code>/g)?.forEach(codeBlock => {
      console.log(codeBlock)
      // const lang = code.match(/<code>([\s\S]+)<\/code>/)[1].split('\n')[0].split(' ')[1];
      const code = codeBlock.match(/<code>([\s\S]+)<\/code>/)?.[1];
      const codeHl = hl.highlight('javascript', code || '').value;
      post.body = post.body.replace(codeBlock, `<br><pre class="bg-pink-200 p-4 border-4 border-solid border-blue-500" ><code lang="javascript">${codeHl}</code></pre></br>`);
      console.log(post.body)
      // const code = hl.highlight(lang, code.match(/<code>([\s\S]+)<\/code>/)[1]).value;
      // post.body = post.body.replace(code, `<code>${code}</code>`);
    });
    return { ...post };
  })

  return hlPosts;
}

export const highlightCode = (code: string, language: string) => {
  return hl.highlight(language, code).value;
}
