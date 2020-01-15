import ids from '../../src/components/Example/identifiers';
import { commands as cmd } from '../utils';

describe('Example', () => {
  describe('Fetch text', () => {
    it('should fetch text', () => cmd.click(ids.BUTTON_FETCH_TEXT, 3e3));
  });
});
