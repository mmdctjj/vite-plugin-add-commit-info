import childProcess from 'child_process';
import { JSDOM } from 'jsdom';
import moment from 'moment';

var index = (option) => {

  let {
    dateFormat = `YYYY.MM.DD.HH:mm:ss`,
    commitID,
    verion,
    description,
    extendInfo = {},
    root = 'body'
  } = option ?? {};

  return {
    name: 'vate-plugin-add-commit-info',
    transformIndexHtml (html) {

      const dom = new JSDOM(html);
      const document = dom.window.document;
      const container = document.querySelector(root);

      if (!container) {
        return new Error(`[add-commit-and-version]: root node is missing!`)
      }

      if (commitID !== true) {
        commitID = commitID
          ? commitID
          : childProcess.execSync('git rev-parse --short HEAD', { encoding: 'utf-8' });
        container?.setAttribute("commitID", commitID.trim());
      }
      
      if (verion !== true) {
        container?.setAttribute("verion", verion ?? moment(new Date())?.format(dateFormat));
      }

      if (description !== true) {
        description = description
          ? description
          : childProcess
            .execSync('git log -3 --pretty="%s"', { encoding: 'utf-8' })
            .trim()
            .split('\n')
            .toString();
        
        container?.setAttribute("description", description);
      }

      if (extendInfo) {
        const keys = Object.keys(extendInfo);
        
        if (keys.length) {
          keys.map(key => container?.setAttribute(key, extendInfo[key]));
        }
      }
      
      return dom.serialize()
    }
  }
};

export { index as default };
