import styled from 'styled-components';
import * as ss from 'styled-system';

export const Box = styled.div`
  ${ss.color}
  ${ss.space}
  ${ss.borders}
  ${ss.borderRadius}
  ${ss.width}
  ${ss.height}
  ${ss.flex}
  ${ss.display}
  ${ss.justifyContent}
  ${ss.opacity}
  ${ss.position}
  ${ss.alignItems}
  box-sizing: border-box;
`;