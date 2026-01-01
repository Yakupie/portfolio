import adapter from '@sveltejs/adapter-static';

export default {
  kit: {
    adapter: adapter(),
    prerender: {
      handleHttpError: ({ status, path }) => {
        // allow the prerenderer to continue when the favicon is missing
        if (status === 404 && path === '/favicon.png') return 'continue';
        return 'fail';
      }
    }
  }
};