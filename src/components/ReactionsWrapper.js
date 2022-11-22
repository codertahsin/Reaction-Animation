import styled from 'styled-components';
import { motion } from 'framer-motion';

const ReactionsWrapper = styled(motion.div)`
  position: absolute;
  top: -180%;

  width: 350px;
  padding: 10px;
  border-radius: 100px;
  background-color: black;
  box-shadow: 0 5px 20px -2px rgba(0,0,0,0.2);

  display: flex;
  justify-content: space-between;
  align-items: center;

  /* opacity: 0; */
`

export default ReactionsWrapper;
