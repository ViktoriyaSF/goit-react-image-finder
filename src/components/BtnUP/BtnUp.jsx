import ScrollToTop from 'react-scroll-to-top';
import { FiChevronsUp } from 'react-icons/fi';

export const BtnUp = () => {
  return (
    <>
      <ScrollToTop
        smooth
        style={{
          borderRadius: '50%',
          background: '#94bbe9',
        }}
        component={<FiChevronsUp size="2em" />}
      />
    </>
  );
};
