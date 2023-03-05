import React, { useState, useEffect } from 'react';
import { GlobalStyles } from './components/styles/Global.styled';
import { Header } from './components/styles/Header.styled';
import { Footer } from './components/styles/Footer.styled';
import Quotes from './components/Quotes';
import {
  ThemeContainer,
  ThemeButton,
} from './components/styles/ThemeSwitching.styled';
import { ThemeProvider } from 'styled-components';
import {
  light,
  dark,
  blue,
  green,
  brown,
  pink,
} from './components/styles/Theme.styled';

function App() {
  const [selectedTheme, setSelectedTheme] = useState(pink);

  useEffect(() => {
    const currentTheme = JSON.parse(localStorage.getItem('current-theme'));
    if (currentTheme) {
      setSelectedTheme(currentTheme);
    }
  }, []);

  const HandleThemeChange = (theme) => {
    setSelectedTheme(theme);
    localStorage.setItem('current-theme', JSON.stringify(theme));
  };

  const invertedSelectedTheme = ({ colors }) => ({
    colors: {
      background: colors.footer,
      footer: colors.background,
    },
  });

  return (
    <ThemeProvider theme={selectedTheme}>
      <div className="App">
        <GlobalStyles />
        <Header>Game of Thrones Quotes</Header>

        <ThemeContainer>
          <span>Themes: </span>
          <ThemeButton
            className={`light ${selectedTheme === light ? 'active' : ''}`}
            onClick={() => HandleThemeChange(light)}
          ></ThemeButton>
          <ThemeButton
            className={`dark ${selectedTheme === dark ? 'active' : ''}`}
            onClick={() => HandleThemeChange(dark)}
          ></ThemeButton>
          <ThemeButton
            className={`blue ${selectedTheme === blue ? 'active' : ''}`}
            onClick={() => HandleThemeChange(blue)}
          ></ThemeButton>
          <ThemeButton
            className={`green ${selectedTheme === green ? 'active' : ''}`}
            onClick={() => HandleThemeChange(green)}
          ></ThemeButton>
          <ThemeButton
            className={`brown ${selectedTheme === brown ? 'active' : ''}`}
            onClick={() => HandleThemeChange(brown)}
          ></ThemeButton>
          <ThemeButton
            className={`pink ${selectedTheme === pink ? 'active' : ''}`}
            onClick={() => HandleThemeChange(pink)}
          ></ThemeButton>
        </ThemeContainer>
        <ThemeProvider theme={pink}>
          <Quotes />
        </ThemeProvider>
        <Footer>
          <p>
            Made with love by <a href="http://bio.link/timonwa">Timonwa</a>
          </p>
        </Footer>
        <ThemeProvider theme={invertedSelectedTheme}>
          <Footer>
            <p>
              Made with love by <a href="http://bio.link/timonwa">Timonwa</a>
            </p>
          </Footer>
        </ThemeProvider>
      </div>
    </ThemeProvider>
  );
}

export default App;
