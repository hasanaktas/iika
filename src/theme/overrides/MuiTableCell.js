import palette from '../palette';
import typography from '../typography';

export default {
  root: {
    ...typography.body2,
    borderBottom: `1px solid ${palette.divider}`,
    borderRight: `1px solid ${palette.divider}`
  }
};
