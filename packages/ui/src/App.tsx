import React ,{ useState } from 'react';
import styled from 'styled-components';
import { Home } from './pages/home';
import { GraphqlProvider } from './providers/graphql';
import { GlobalStyles } from './styles/styles';

const StyledApp = styled.main``;


const App = () => {
  const [stats, setStats] = useState([])
  
  return (
    <>
      <GlobalStyles />
      <GraphqlProvider>
        <StyledApp>
          <Home />
        </StyledApp>
      </GraphqlProvider>
    </>
  );
};

export default App;
